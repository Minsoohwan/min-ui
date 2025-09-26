import React from "react";
import ValidationMessages from "./ValidationMessages";

export interface TreeNode {
  id: string;
  label: string;
  children?: TreeNode[];
  expanded?: boolean;
  disabled?: boolean;
  visible?: boolean;
  data?: any; // Additional data for each node
  hasChildren?: boolean; // Whether this node has children (for dynamic loading)
  loadChildren?: () => Promise<TreeNode[]>; // Function to load children dynamically
}

export interface TreeProps {
  data: TreeNode[] | (() => Promise<TreeNode[]>);
  value?: string[]; // Selected node IDs
  selectMode?: "none" | "single" | "multiple" | "recursive";
  validationMessages?: string[] | null;
  onChange?: (selectedIds: string[]) => void;
  visible?: boolean;
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
  onInitialized?: (el: HTMLDivElement | null) => void;
  disabled?: boolean;
  expandable?: boolean; // Whether nodes can be expanded/collapsed
  showCheckboxes?: boolean; // Whether to show checkboxes for selection
  indentSize?: number; // Indentation size in pixels
  loading?: boolean; // Whether data is currently loading
  onLoadingChange?: (loading: boolean) => void; // Callback when loading state changes
  onNodeExpand?: (nodeId: string) => void; // Callback when a node is expanded
  onNodeCollapse?: (nodeId: string) => void; // Callback when a node is collapsed
}

export const Tree = React.forwardRef<HTMLDivElement, TreeProps>(
  (
    {
      data = [],
      value = [],
      selectMode = "single",
      validationMessages = [],
      onChange,
      visible = true,
      width,
      height,
      onInitialized,
      disabled = false,
      expandable = true,
      showCheckboxes = false,
      indentSize = 20,
      loading = false,
      onLoadingChange,
      onNodeExpand,
      onNodeCollapse,
    },
    ref
  ) => {
    const [treeData, setTreeData] = React.useState<TreeNode[]>([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [expandedNodes, setExpandedNodes] = React.useState<Set<string>>(
      new Set()
    );
    const [selectedNodes, setSelectedNodes] = React.useState<Set<string>>(
      new Set(value)
    );
    const [loadingNodes, setLoadingNodes] = React.useState<Set<string>>(
      new Set()
    );
    const [errorNodes, setErrorNodes] = React.useState<Map<string, string>>(
      new Map()
    );
    const [initialLoadError, setInitialLoadError] = React.useState<
      string | null
    >(null);

    // Handle data loading
    React.useEffect(() => {
      const loadData = async () => {
        if (typeof data === "function") {
          setIsLoading(true);
          onLoadingChange?.(true);
          setInitialLoadError(null); // Clear any previous error
          try {
            const result = await data();
            setTreeData(result);
            // Set initial expanded nodes based on the loaded data
            setExpandedNodes(
              new Set(
                result.filter((node) => node.expanded).map((node) => node.id)
              )
            );
          } catch (error) {
            console.error("Failed to load tree data:", error);
            const errorMessage =
              error instanceof Error
                ? error.message
                : "Failed to load tree data";
            setInitialLoadError(errorMessage);
            setTreeData([]);
          } finally {
            setIsLoading(false);
            onLoadingChange?.(false);
          }
        } else {
          setTreeData(data);
          // Set initial expanded nodes based on the data
          setExpandedNodes(
            new Set(data.filter((node) => node.expanded).map((node) => node.id))
          );
        }
      };

      loadData();
    }, [data, onLoadingChange]);

    const innerRef = React.useRef<HTMLDivElement | null>(null);
    const setRefs = (node: HTMLDivElement | null) => {
      innerRef.current = node;
      if (typeof ref === "function") (ref as any)(node);
      else if (ref)
        (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
    };

    React.useEffect(() => {
      onInitialized?.(innerRef.current);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Sync when prop value changes
    React.useEffect(() => {
      setSelectedNodes(new Set(value));
    }, [value]);

    if (!visible) return null;

    const isInvalid =
      Array.isArray(validationMessages) && validationMessages.length > 0;

    // Helper function to find a node by ID
    const findNode = (nodes: TreeNode[], id: string): TreeNode | null => {
      for (const node of nodes) {
        if (node.id === id) return node;
        if (node.children) {
          const found = findNode(node.children, id);
          if (found) return found;
        }
      }
      return null;
    };

    // Helper function to update a node's children in the tree data
    const updateNodeChildren = (
      nodes: TreeNode[],
      nodeId: string,
      children: TreeNode[]
    ): TreeNode[] => {
      return nodes.map((node) => {
        if (node.id === nodeId) {
          return { ...node, children };
        }
        if (node.children) {
          return {
            ...node,
            children: updateNodeChildren(node.children, nodeId, children),
          };
        }
        return node;
      });
    };

    // Helper function to get all descendant node IDs
    const getAllDescendantIds = (node: TreeNode): string[] => {
      const ids: string[] = [];
      if (node.children) {
        for (const child of node.children) {
          ids.push(child.id);
          ids.push(...getAllDescendantIds(child));
        }
      }
      return ids;
    };

    // Helper function to get all ancestor node IDs
    const getAllAncestorIds = (nodeId: string): string[] => {
      const ancestors: string[] = [];

      const findParent = (
        nodes: TreeNode[],
        targetId: string,
        parentId?: string
      ): string | null => {
        for (const node of nodes) {
          if (node.id === targetId) return parentId || null;
          if (node.children) {
            const found = findParent(node.children, targetId, node.id);
            if (found) return found;
          }
        }
        return null;
      };

      let currentId = nodeId;
      while (currentId) {
        const parentId = findParent(treeData, currentId);
        if (parentId) {
          ancestors.push(parentId);
          currentId = parentId;
        } else {
          break;
        }
      }

      return ancestors;
    };

    const toggleExpanded = async (nodeId: string) => {
      if (!expandable) return;

      const node = findNode(treeData, nodeId);
      if (node?.disabled) return; // Don't expand if node is disabled

      const isCurrentlyExpanded = expandedNodes.has(nodeId);

      if (isCurrentlyExpanded) {
        // Collapse the node
        setExpandedNodes((prev) => {
          const newSet = new Set(prev);
          newSet.delete(nodeId);
          return newSet;
        });
        onNodeCollapse?.(nodeId);
      } else {
        // Expand the node
        setExpandedNodes((prev) => {
          const newSet = new Set(prev);
          newSet.add(nodeId);
          return newSet;
        });
        onNodeExpand?.(nodeId);

        // Load children if they don't exist and loadChildren function is provided
        if (
          node &&
          (!node.children || node.children.length === 0) &&
          node.loadChildren
        ) {
          // Clear any existing error for this node
          setErrorNodes((prev) => {
            const newMap = new Map(prev);
            newMap.delete(nodeId);
            return newMap;
          });

          setLoadingNodes((prev) => {
            const newSet = new Set(prev);
            newSet.add(nodeId);
            return newSet;
          });

          try {
            const children = await node.loadChildren();
            setTreeData((prevData) =>
              updateNodeChildren(prevData, nodeId, children)
            );
          } catch (error) {
            console.error(`Failed to load children for node ${nodeId}:`, error);
            const errorMessage =
              error instanceof Error
                ? error.message
                : "Failed to load children";
            setErrorNodes((prev) => {
              const newMap = new Map(prev);
              newMap.set(nodeId, errorMessage);
              return newMap;
            });
          } finally {
            setLoadingNodes((prev) => {
              const newSet = new Set(prev);
              newSet.delete(nodeId);
              return newSet;
            });
          }
        }
      }
    };

    const toggleSelection = (nodeId: string) => {
      if (disabled || selectMode === "none") return;

      setSelectedNodes((prev) => {
        const newSet = new Set(prev);

        if (selectMode === "single") {
          // Single mode: clear all and select only this node
          newSet.clear();
          newSet.add(nodeId);
        } else if (selectMode === "multiple") {
          // Multiple mode: toggle selection (add if not selected, remove if selected)
          if (newSet.has(nodeId)) {
            newSet.delete(nodeId);
          } else {
            newSet.add(nodeId);
          }
        } else if (selectMode === "recursive") {
          const node = findNode(treeData, nodeId);
          if (!node) return prev;

          const isCurrentlySelected = newSet.has(nodeId);

          if (isCurrentlySelected) {
            // Deselect: remove this node and all descendants
            newSet.delete(nodeId);
            const descendantIds = getAllDescendantIds(node);
            descendantIds.forEach((id) => newSet.delete(id));

            // Check if all siblings are deselected, then deselect parent
            const ancestors = getAllAncestorIds(nodeId);
            ancestors.forEach((ancestorId) => {
              const ancestor = findNode(treeData, ancestorId);
              if (ancestor) {
                const allDescendants = getAllDescendantIds(ancestor);
                const hasAnySelectedDescendant = allDescendants.some((id) =>
                  newSet.has(id)
                );
                if (!hasAnySelectedDescendant) {
                  newSet.delete(ancestorId);
                }
              }
            });
          } else {
            // Select: add this node and all descendants
            newSet.add(nodeId);
            const descendantIds = getAllDescendantIds(node);
            descendantIds.forEach((id) => {
              const descendantNode = findNode(treeData, id);
              if (descendantNode && !descendantNode.disabled) {
                newSet.add(id);
              }
            });

            // Check if all descendants are selected, then select parent
            const ancestors = getAllAncestorIds(nodeId);
            ancestors.forEach((ancestorId) => {
              const ancestor = findNode(treeData, ancestorId);
              if (ancestor) {
                const allDescendants = getAllDescendantIds(ancestor);
                const allDescendantsSelected = allDescendants.every((id) => {
                  const descendantNode = findNode(treeData, id);
                  return descendantNode?.disabled || newSet.has(id);
                });
                if (allDescendantsSelected) {
                  newSet.add(ancestorId);
                }
              }
            });
          }
        }

        return newSet;
      });

      // Calculate new selected array for onChange callback
      let newSelected: string[] = [];

      if (selectMode === "single") {
        newSelected = [nodeId];
      } else if (selectMode === "multiple") {
        const newSet = new Set(selectedNodes);
        if (newSet.has(nodeId)) {
          newSet.delete(nodeId);
        } else {
          newSet.add(nodeId);
        }
        newSelected = Array.from(newSet);
      } else if (selectMode === "recursive") {
        // For recursive mode, we need to calculate the final state
        const node = findNode(treeData, nodeId);
        if (!node) return;

        const isCurrentlySelected = selectedNodes.has(nodeId);
        const newSet = new Set(selectedNodes);

        if (isCurrentlySelected) {
          // Deselect logic
          newSet.delete(nodeId);
          const descendantIds = getAllDescendantIds(node);
          descendantIds.forEach((id) => newSet.delete(id));

          // Check ancestors
          const ancestors = getAllAncestorIds(nodeId);
          ancestors.forEach((ancestorId) => {
            const ancestor = findNode(treeData, ancestorId);
            if (ancestor) {
              const allDescendants = getAllDescendantIds(ancestor);
              const hasAnySelectedDescendant = allDescendants.some((id) =>
                newSet.has(id)
              );
              if (!hasAnySelectedDescendant) {
                newSet.delete(ancestorId);
              }
            }
          });
        } else {
          // Select logic
          newSet.add(nodeId);
          const descendantIds = getAllDescendantIds(node);
          descendantIds.forEach((id) => {
            const descendantNode = findNode(treeData, id);
            if (descendantNode && !descendantNode.disabled) {
              newSet.add(id);
            }
          });

          // Check ancestors
          const ancestors = getAllAncestorIds(nodeId);
          ancestors.forEach((ancestorId) => {
            const ancestor = findNode(treeData, ancestorId);
            if (ancestor) {
              const allDescendants = getAllDescendantIds(ancestor);
              const allDescendantsSelected = allDescendants.every((id) => {
                const descendantNode = findNode(treeData, id);
                return descendantNode?.disabled || newSet.has(id);
              });
              if (allDescendantsSelected) {
                newSet.add(ancestorId);
              }
            }
          });
        }

        newSelected = Array.from(newSet);
      }

      onChange?.(newSelected);
    };

    const renderNode = (node: TreeNode, level: number = 0): React.ReactNode => {
      if (node.visible === false) return null;

      const isExpanded = expandedNodes.has(node.id);
      const isSelected = selectedNodes.has(node.id);
      const hasChildren = node.children && node.children.length > 0;
      const hasChildrenToLoad =
        node.hasChildren ||
        (node.loadChildren && (!node.children || node.children.length === 0));
      const isNodeLoading = loadingNodes.has(node.id);
      const nodeError = errorNodes.get(node.id);
      const indentStyle = { paddingLeft: `${level * indentSize}px` };

      return (
        <div key={node.id} className="tree-node">
          <div
            className={`flex items-center py-1 px-2 hover:bg-gray-50 ${
              isSelected ? "bg-blue-50 text-blue-600" : ""
            } ${node.disabled || disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
            style={indentStyle}
            onClick={() => {
              if (node.disabled || disabled) return;
              if (selectMode !== "none") {
                toggleSelection(node.id);
              }
            }}
          >
            {/* Expand/Collapse Button */}
            {expandable && (hasChildren || hasChildrenToLoad) && (
              <button
                type="button"
                className={`mr-2 w-4 h-4 flex items-center justify-center ${
                  node.disabled || disabled
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                disabled={node.disabled || disabled || isNodeLoading}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleExpanded(node.id);
                }}
              >
                {isNodeLoading ? (
                  <div className="w-3 h-3 border border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                ) : isExpanded ? (
                  "▼"
                ) : (
                  "▶"
                )}
              </button>
            )}

            {/* Checkbox */}
            {showCheckboxes && (
              <input
                type="checkbox"
                checked={isSelected}
                disabled={node.disabled || disabled}
                onChange={(e) => {
                  e.stopPropagation();
                  if (selectMode !== "none") {
                    toggleSelection(node.id);
                  }
                }}
                className="mr-2"
              />
            )}

            {/* Node Label */}
            <span className="flex-1">{node.label}</span>
          </div>

          {/* Children */}
          {isExpanded && (
            <div className="tree-children">
              {isNodeLoading ? (
                <div
                  className="flex items-center py-1 px-2"
                  style={{ paddingLeft: `${(level + 1) * indentSize}px` }}
                >
                  <div className="w-3 h-3 border border-gray-400 border-t-transparent rounded-full animate-spin mr-2"></div>
                  <span className="text-gray-500 text-sm">Loading...</span>
                </div>
              ) : nodeError ? (
                <div
                  className="flex items-center py-1 px-2 bg-red-500 text-white rounded mx-2 my-1"
                  style={{ paddingLeft: `${(level + 1) * indentSize}px` }}
                >
                  <span className="text-sm">⚠️ {nodeError}</span>
                  <button
                    type="button"
                    className="ml-2 text-white hover:text-gray-200 underline text-xs"
                    onClick={async (e) => {
                      e.stopPropagation();
                      setErrorNodes((prev) => {
                        const newMap = new Map(prev);
                        newMap.delete(node.id);
                        return newMap;
                      });
                      // Retry loading - force reload without toggling
                      if (node && node.loadChildren) {
                        setLoadingNodes((prev) => {
                          const newSet = new Set(prev);
                          newSet.add(node.id);
                          return newSet;
                        });

                        try {
                          const children = await node.loadChildren();
                          setTreeData((prevData) =>
                            updateNodeChildren(prevData, node.id, children)
                          );
                        } catch (error) {
                          console.error(
                            `Failed to load children for node ${node.id}:`,
                            error
                          );
                          const errorMessage =
                            error instanceof Error
                              ? error.message
                              : "Failed to load children";
                          setErrorNodes((prev) => {
                            const newMap = new Map(prev);
                            newMap.set(node.id, errorMessage);
                            return newMap;
                          });
                        } finally {
                          setLoadingNodes((prev) => {
                            const newSet = new Set(prev);
                            newSet.delete(node.id);
                            return newSet;
                          });
                        }
                      }
                    }}
                  >
                    Retry
                  </button>
                </div>
              ) : hasChildren ? (
                node.children!.map((child) => renderNode(child, level + 1))
              ) : null}
            </div>
          )}
        </div>
      );
    };

    const computedStyle: React.CSSProperties = {
      width: width ?? "100%",
      height,
      maxHeight: height || 300,
      overflowY: "auto",
    };

    return (
      <div
        ref={setRefs}
        style={computedStyle}
        className="border border-gray-300 rounded bg-white"
      >
        {isLoading || loading ? (
          <div className="flex items-center justify-center p-4">
            <div className="text-gray-500">Loading...</div>
          </div>
        ) : initialLoadError ? (
          <div className="flex items-center justify-center p-4">
            <div className="bg-red-500 text-white rounded p-4 max-w-md">
              <div className="flex items-center">
                <span className="text-lg mr-2">⚠️</span>
                <div>
                  <div className="font-semibold">Failed to load data</div>
                  <div className="text-sm mt-1">{initialLoadError}</div>
                  <button
                    type="button"
                    className="mt-2 text-white hover:text-gray-200 underline text-sm"
                    onClick={() => {
                      setInitialLoadError(null);
                      // Retry loading
                      if (typeof data === "function") {
                        setIsLoading(true);
                        onLoadingChange?.(true);
                        data()
                          .then((result) => {
                            setTreeData(result);
                            setExpandedNodes(
                              new Set(
                                result
                                  .filter((node) => node.expanded)
                                  .map((node) => node.id)
                              )
                            );
                          })
                          .catch((error) => {
                            console.error("Failed to load tree data:", error);
                            const errorMessage =
                              error instanceof Error
                                ? error.message
                                : "Failed to load tree data";
                            setInitialLoadError(errorMessage);
                            setTreeData([]);
                          })
                          .finally(() => {
                            setIsLoading(false);
                            onLoadingChange?.(false);
                          });
                      }
                    }}
                  >
                    Retry
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="tree-container">
            {treeData.map((node) => renderNode(node))}
          </div>
        )}
        <ValidationMessages visible={isInvalid} messages={validationMessages} />
      </div>
    );
  }
);

Tree.displayName = "Tree";

export default Tree;
