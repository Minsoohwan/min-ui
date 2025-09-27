import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Tree from "./Tree";
import type { TreeNode } from "./Tree";

const meta: Meta<typeof Tree> = {
  title: "Components/Tree",
  component: Tree,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: {
    data: [
      {
        id: "1",
        label: "Root Node 1",
        expanded: true,
        children: [
          {
            id: "1-1",
            label: "Child Node 1-1",
            children: [
              { id: "1-1-1", label: "Grandchild Node 1-1-1" },
              { id: "1-1-2", label: "Grandchild Node 1-1-2" },
            ],
          },
          {
            id: "1-2",
            label: "Child Node 1-2",
            children: [{ id: "1-2-1", label: "Grandchild Node 1-2-1" }],
          },
        ],
      },
      {
        id: "2",
        label: "Root Node 2",
        children: [
          { id: "2-1", label: "Child Node 2-1" },
          { id: "2-2", label: "Child Node 2-2" },
        ],
      },
    ],
    selectMode: "single",
    disabled: false,
    expandable: true,
    showCheckboxes: false,
    indentSize: 20,
    width: "fit-content",
    height: "fit-content",
    validationMessages: null,
  },
  argTypes: {
    onChange: { action: "changed" },
    selectMode: {
      control: "radio",
      options: ["none", "single", "multiple", "recursive"],
      description: "Selection mode for tree nodes",
    },
    disabled: { control: "boolean" },
    expandable: { control: "boolean" },
    showCheckboxes: { control: "boolean" },
    data: {
      control: "object",
      description: "Tree data structure",
    },
    value: {
      control: "object",
      description: "Selected node IDs",
    },
    width: {
      control: "text",
      description: "Width of the tree (CSS value)",
      table: {
        type: { summary: "string | number" },
      },
    },
    height: {
      control: "text",
      description: "Height of the tree (CSS value)",
      table: {
        type: { summary: "string | number" },
      },
    },
    indentSize: {
      control: "number",
      description: "Indentation size in pixels",
    },
    loading: {
      control: "boolean",
      description: "Whether data is currently loading",
    },
    onLoadingChange: { action: "loadingChanged" },
    onNodeExpand: { action: "nodeExpanded" },
    onNodeCollapse: { action: "nodeCollapsed" },
  },
};

export default meta;
type Story = StoryObj<typeof Tree>;

export const Default: Story = {
  render: (args) => {
    const [selectedIds, setSelectedIds] = React.useState<string[]>([]);
    return (
      <Tree
        {...(args.data && { data: args.data })}
        {...(args.selectMode !== undefined && { selectMode: args.selectMode })}
        {...(args.disabled !== undefined && { disabled: args.disabled })}
        {...(args.expandable !== undefined && { expandable: args.expandable })}
        {...(args.showCheckboxes !== undefined && {
          showCheckboxes: args.showCheckboxes,
        })}
        {...(args.indentSize && { indentSize: args.indentSize })}
        {...(args.width && { width: args.width })}
        {...(args.height && { height: args.height })}
        {...(args.validationMessages && {
          validationMessages: args.validationMessages,
        })}
        value={selectedIds}
        onChange={(ids) => {
          args.onChange?.(ids);
          setSelectedIds(ids);
        }}
      />
    );
  },
};

export const WithCheckboxes: Story = {
  args: {
    showCheckboxes: true,
    selectMode: "multiple",
  },
  render: (args) => {
    const [selectedIds, setSelectedIds] = React.useState<string[]>(["1-1"]);
    return (
      <Tree
        {...(args.data && { data: args.data })}
        {...(args.selectMode !== undefined && { selectMode: args.selectMode })}
        {...(args.disabled !== undefined && { disabled: args.disabled })}
        {...(args.expandable !== undefined && { expandable: args.expandable })}
        {...(args.showCheckboxes !== undefined && {
          showCheckboxes: args.showCheckboxes,
        })}
        {...(args.indentSize && { indentSize: args.indentSize })}
        {...(args.width && { width: args.width })}
        {...(args.height && { height: args.height })}
        {...(args.validationMessages && {
          validationMessages: args.validationMessages,
        })}
        value={selectedIds}
        onChange={(ids) => {
          args.onChange?.(ids);
          setSelectedIds(ids);
        }}
      />
    );
  },
};

export const SingleSelection: Story = {
  args: {
    selectMode: "single",
  },
  render: (args) => {
    const [selectedIds, setSelectedIds] = React.useState<string[]>(["1-1"]);
    return (
      <Tree
        {...(args.data && { data: args.data })}
        {...(args.selectMode !== undefined && { selectMode: args.selectMode })}
        {...(args.disabled !== undefined && { disabled: args.disabled })}
        {...(args.expandable !== undefined && { expandable: args.expandable })}
        {...(args.showCheckboxes !== undefined && {
          showCheckboxes: args.showCheckboxes,
        })}
        {...(args.indentSize && { indentSize: args.indentSize })}
        {...(args.width && { width: args.width })}
        {...(args.height && { height: args.height })}
        {...(args.validationMessages && {
          validationMessages: args.validationMessages,
        })}
        value={selectedIds}
        onChange={(ids) => {
          args.onChange?.(ids);
          setSelectedIds(ids);
        }}
      />
    );
  },
};

export const NoSelection: Story = {
  args: {
    selectMode: "none",
  },
  render: (args) => {
    const [selectedIds, setSelectedIds] = React.useState<string[]>([]);
    return (
      <Tree
        {...(args.data && { data: args.data })}
        {...(args.selectMode !== undefined && { selectMode: args.selectMode })}
        {...(args.disabled !== undefined && { disabled: args.disabled })}
        {...(args.expandable !== undefined && { expandable: args.expandable })}
        {...(args.showCheckboxes !== undefined && {
          showCheckboxes: args.showCheckboxes,
        })}
        {...(args.indentSize && { indentSize: args.indentSize })}
        {...(args.width && { width: args.width })}
        {...(args.height && { height: args.height })}
        {...(args.validationMessages && {
          validationMessages: args.validationMessages,
        })}
        value={selectedIds}
        onChange={(ids) => {
          args.onChange?.(ids);
          setSelectedIds(ids);
        }}
      />
    );
  },
};

export const RecursiveSelection: Story = {
  args: {
    selectMode: "recursive",
    showCheckboxes: true,
  },
  render: (args) => {
    const [selectedIds, setSelectedIds] = React.useState<string[]>(["1-1"]);
    return (
      <Tree
        {...(args.data && { data: args.data })}
        {...(args.selectMode !== undefined && { selectMode: args.selectMode })}
        {...(args.disabled !== undefined && { disabled: args.disabled })}
        {...(args.expandable !== undefined && { expandable: args.expandable })}
        {...(args.showCheckboxes !== undefined && {
          showCheckboxes: args.showCheckboxes,
        })}
        {...(args.indentSize && { indentSize: args.indentSize })}
        {...(args.width && { width: args.width })}
        {...(args.height && { height: args.height })}
        {...(args.validationMessages && {
          validationMessages: args.validationMessages,
        })}
        value={selectedIds}
        onChange={(ids) => {
          args.onChange?.(ids);
          setSelectedIds(ids);
        }}
      />
    );
  },
};

export const NonExpandable: Story = {
  args: {
    expandable: false,
  },
  render: (args) => {
    const [selectedIds, setSelectedIds] = React.useState<string[]>([]);
    return (
      <Tree
        {...(args.data && { data: args.data })}
        {...(args.selectMode !== undefined && { selectMode: args.selectMode })}
        {...(args.disabled !== undefined && { disabled: args.disabled })}
        {...(args.expandable !== undefined && { expandable: args.expandable })}
        {...(args.showCheckboxes !== undefined && {
          showCheckboxes: args.showCheckboxes,
        })}
        {...(args.indentSize && { indentSize: args.indentSize })}
        {...(args.width && { width: args.width })}
        {...(args.height && { height: args.height })}
        {...(args.validationMessages && {
          validationMessages: args.validationMessages,
        })}
        value={selectedIds}
        onChange={(ids) => {
          args.onChange?.(ids);
          setSelectedIds(ids);
        }}
      />
    );
  },
};

export const WithValidation: Story = {
  args: {
    validationMessages: ["Please select at least one item"],
  },
  render: (args) => {
    const [selectedIds, setSelectedIds] = React.useState<string[]>([]);
    return (
      <Tree
        {...(args.data && { data: args.data })}
        {...(args.selectMode !== undefined && { selectMode: args.selectMode })}
        {...(args.disabled !== undefined && { disabled: args.disabled })}
        {...(args.expandable !== undefined && { expandable: args.expandable })}
        {...(args.showCheckboxes !== undefined && {
          showCheckboxes: args.showCheckboxes,
        })}
        {...(args.indentSize && { indentSize: args.indentSize })}
        {...(args.width && { width: args.width })}
        {...(args.height && { height: args.height })}
        {...(args.validationMessages && {
          validationMessages: args.validationMessages,
        })}
        value={selectedIds}
        onChange={(ids) => {
          args.onChange?.(ids);
          setSelectedIds(ids);
        }}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => {
    const [selectedIds, setSelectedIds] = React.useState<string[]>(["1-1"]);
    return (
      <Tree
        {...(args.data && { data: args.data })}
        {...(args.selectMode !== undefined && { selectMode: args.selectMode })}
        {...(args.disabled !== undefined && { disabled: args.disabled })}
        {...(args.expandable !== undefined && { expandable: args.expandable })}
        {...(args.showCheckboxes !== undefined && {
          showCheckboxes: args.showCheckboxes,
        })}
        {...(args.indentSize && { indentSize: args.indentSize })}
        {...(args.width && { width: args.width })}
        {...(args.height && { height: args.height })}
        {...(args.validationMessages && {
          validationMessages: args.validationMessages,
        })}
        value={selectedIds}
        onChange={(ids) => {
          args.onChange?.(ids);
          setSelectedIds(ids);
        }}
      />
    );
  },
};

export const WithCustomSize: Story = {
  args: {
    width: "400px",
    height: "300px",
  },
  render: (args) => {
    const [selectedIds, setSelectedIds] = React.useState<string[]>([]);
    return (
      <Tree
        {...(args.data && { data: args.data })}
        {...(args.selectMode !== undefined && { selectMode: args.selectMode })}
        {...(args.disabled !== undefined && { disabled: args.disabled })}
        {...(args.expandable !== undefined && { expandable: args.expandable })}
        {...(args.showCheckboxes !== undefined && {
          showCheckboxes: args.showCheckboxes,
        })}
        {...(args.indentSize && { indentSize: args.indentSize })}
        {...(args.width && { width: args.width })}
        {...(args.height && { height: args.height })}
        {...(args.validationMessages && {
          validationMessages: args.validationMessages,
        })}
        value={selectedIds}
        onChange={(ids) => {
          args.onChange?.(ids);
          setSelectedIds(ids);
        }}
      />
    );
  },
};

export const WithDisabledAndHidden: Story = {
  args: {
    data: [
      {
        id: "1",
        label: "Root Node 1",
        expanded: true,
        children: [
          {
            id: "1-1",
            label: "Child Node 1-1 (Normal)",
            children: [
              { id: "1-1-1", label: "Grandchild Node 1-1-1" },
              {
                id: "1-1-2",
                label: "Grandchild Node 1-1-2 (Disabled)",
                disabled: true,
              },
            ],
          },
          {
            id: "1-2",
            label: "Child Node 1-2 (Disabled)",
            disabled: true,
            children: [
              { id: "1-2-1", label: "Grandchild Node 1-2-1" },
              { id: "1-2-2", label: "Grandchild Node 1-2-2" },
            ],
          },
          {
            id: "1-3",
            label: "Child Node 1-3 (Hidden)",
            visible: false,
            children: [{ id: "1-3-1", label: "Grandchild Node 1-3-1" }],
          },
        ],
      },
      {
        id: "2",
        label: "Root Node 2 (Disabled)",
        disabled: true,
        children: [
          { id: "2-1", label: "Child Node 2-1" },
          { id: "2-2", label: "Child Node 2-2" },
        ],
      },
      {
        id: "3",
        label: "Root Node 3 (Hidden)",
        visible: false,
        children: [{ id: "3-1", label: "Child Node 3-1" }],
      },
      {
        id: "4",
        label: "Root Node 4 (Normal)",
        children: [
          { id: "4-1", label: "Child Node 4-1" },
          { id: "4-2", label: "Child Node 4-2 (Disabled)", disabled: true },
          { id: "4-3", label: "Child Node 4-3 (Hidden)", visible: false },
        ],
      },
    ],
    selectMode: "multiple",
    showCheckboxes: true,
  },
  render: (args) => {
    const [selectedIds, setSelectedIds] = React.useState<string[]>([
      "1-1",
      "4-1",
    ]);
    return (
      <Tree
        {...(args.data && { data: args.data })}
        {...(args.selectMode !== undefined && { selectMode: args.selectMode })}
        {...(args.disabled !== undefined && { disabled: args.disabled })}
        {...(args.expandable !== undefined && { expandable: args.expandable })}
        {...(args.showCheckboxes !== undefined && {
          showCheckboxes: args.showCheckboxes,
        })}
        {...(args.indentSize && { indentSize: args.indentSize })}
        {...(args.width && { width: args.width })}
        {...(args.height && { height: args.height })}
        {...(args.validationMessages && {
          validationMessages: args.validationMessages,
        })}
        value={selectedIds}
        onChange={(ids) => {
          args.onChange?.(ids);
          setSelectedIds(ids);
        }}
      />
    );
  },
};

export const WithAsyncData: Story = {
  args: {
    data: async () => {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      return [
        {
          id: "1",
          label: "Async Root Node 1",
          expanded: true,
          children: [
            {
              id: "1-1",
              label: "Async Child Node 1-1",
              children: [
                { id: "1-1-1", label: "Async Grandchild Node 1-1-1" },
                { id: "1-1-2", label: "Async Grandchild Node 1-1-2" },
              ],
            },
            {
              id: "1-2",
              label: "Async Child Node 1-2",
              children: [{ id: "1-2-1", label: "Async Grandchild Node 1-2-1" }],
            },
          ],
        },
        {
          id: "2",
          label: "Async Root Node 2",
          children: [
            { id: "2-1", label: "Async Child Node 2-1" },
            { id: "2-2", label: "Async Child Node 2-2" },
          ],
        },
      ];
    },
    selectMode: "multiple",
    showCheckboxes: true,
  },
  render: (args) => {
    const [selectedIds, setSelectedIds] = React.useState<string[]>([]);
    const [isLoading, setIsLoading] = React.useState(false);

    return (
      <Tree
        {...(args.data && { data: args.data })}
        {...(args.selectMode !== undefined && { selectMode: args.selectMode })}
        {...(args.disabled !== undefined && { disabled: args.disabled })}
        {...(args.expandable !== undefined && { expandable: args.expandable })}
        {...(args.showCheckboxes !== undefined && {
          showCheckboxes: args.showCheckboxes,
        })}
        {...(args.indentSize && { indentSize: args.indentSize })}
        {...(args.width && { width: args.width })}
        {...(args.height && { height: args.height })}
        {...(args.validationMessages && {
          validationMessages: args.validationMessages,
        })}
        loading={isLoading}
        onLoadingChange={setIsLoading}
        value={selectedIds}
        onChange={(ids) => {
          args.onChange?.(ids);
          setSelectedIds(ids);
        }}
      />
    );
  },
};

export const WithAsyncDataError: Story = {
  args: {
    data: async () => {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simulate API error
      throw new Error("Failed to load tree data");
    },
    selectMode: "single",
  },
  render: (args) => {
    const [selectedIds, setSelectedIds] = React.useState<string[]>([]);
    const [isLoading, setIsLoading] = React.useState(false);

    return (
      <Tree
        {...(args.data && { data: args.data })}
        {...(args.selectMode !== undefined && { selectMode: args.selectMode })}
        {...(args.disabled !== undefined && { disabled: args.disabled })}
        {...(args.expandable !== undefined && { expandable: args.expandable })}
        {...(args.showCheckboxes !== undefined && {
          showCheckboxes: args.showCheckboxes,
        })}
        {...(args.indentSize && { indentSize: args.indentSize })}
        {...(args.width && { width: args.width })}
        {...(args.height && { height: args.height })}
        {...(args.validationMessages && {
          validationMessages: args.validationMessages,
        })}
        loading={isLoading}
        onLoadingChange={setIsLoading}
        value={selectedIds}
        onChange={(ids) => {
          args.onChange?.(ids);
          setSelectedIds(ids);
        }}
      />
    );
  },
};

export const DynamicLoading: Story = {
  args: {
    data: [
      {
        id: "1",
        label: "Documents",
        hasChildren: true,
        loadChildren: async () => {
          // Simulate API call delay
          await new Promise((resolve) => setTimeout(resolve, 1500));

          return [
            {
              id: "1-1",
              label: "Work",
              hasChildren: true,
              loadChildren: async () => {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                return [
                  { id: "1-1-1", label: "Project A" },
                  { id: "1-1-2", label: "Project B" },
                  { id: "1-1-3", label: "Project C" },
                ];
              },
            },
            {
              id: "1-2",
              label: "Personal",
              hasChildren: true,
              loadChildren: async () => {
                await new Promise((resolve) => setTimeout(resolve, 1200));
                return [
                  { id: "1-2-1", label: "Photos" },
                  { id: "1-2-2", label: "Videos" },
                  { id: "1-2-3", label: "Music" },
                ];
              },
            },
          ];
        },
      },
      {
        id: "2",
        label: "Applications",
        hasChildren: true,
        loadChildren: async () => {
          await new Promise((resolve) => setTimeout(resolve, 800));
          return [
            { id: "2-1", label: "Web Browsers" },
            { id: "2-2", label: "Development Tools" },
            { id: "2-3", label: "Media Players" },
          ];
        },
      },
      {
        id: "3",
        label: "System",
        hasChildren: true,
        loadChildren: async () => {
          await new Promise((resolve) => setTimeout(resolve, 600));
          return [
            { id: "3-1", label: "Settings" },
            { id: "3-2", label: "Logs" },
          ];
        },
      },
    ],
    showCheckboxes: true,
    selectMode: "multiple",
  },
  render: (args) => {
    const [selectedIds, setSelectedIds] = React.useState<string[]>([]);

    return (
      <Tree
        {...(args.data && { data: args.data })}
        {...(args.selectMode !== undefined && { selectMode: args.selectMode })}
        {...(args.disabled !== undefined && { disabled: args.disabled })}
        {...(args.expandable !== undefined && { expandable: args.expandable })}
        {...(args.showCheckboxes !== undefined && {
          showCheckboxes: args.showCheckboxes,
        })}
        {...(args.indentSize && { indentSize: args.indentSize })}
        {...(args.width && { width: args.width })}
        {...(args.height && { height: args.height })}
        {...(args.validationMessages && {
          validationMessages: args.validationMessages,
        })}
        onNodeExpand={(nodeId) => {
          console.log(`Node ${nodeId} expanded`);
        }}
        onNodeCollapse={(nodeId) => {
          console.log(`Node ${nodeId} collapsed`);
        }}
        value={selectedIds}
        onChange={(ids) => {
          args.onChange?.(ids);
          setSelectedIds(ids);
        }}
      />
    );
  },
};

export const DynamicLoadingWithErrors: Story = {
  args: {
    data: [
      {
        id: "1",
        label: "Documents (Success)",
        hasChildren: true,
        loadChildren: async () => {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          return [
            { id: "1-1", label: "Work" },
            { id: "1-2", label: "Personal" },
          ];
        },
      },
      {
        id: "2",
        label: "Applications (Error)",
        hasChildren: true,
        loadChildren: async () => {
          await new Promise((resolve) => setTimeout(resolve, 1500));
          throw new Error("Network connection failed");
        },
      },
      {
        id: "3",
        label: "System (Timeout)",
        hasChildren: true,
        loadChildren: async () => {
          await new Promise((resolve) => setTimeout(resolve, 2000));
          throw new Error("Request timeout");
        },
      },
      {
        id: "4",
        label: "Media (Server Error)",
        hasChildren: true,
        loadChildren: async () => {
          await new Promise((resolve) => setTimeout(resolve, 1200));
          throw new Error("Internal server error (500)");
        },
      },
    ],
    showCheckboxes: true,
    selectMode: "multiple",
  },
  render: (args) => {
    const [selectedIds, setSelectedIds] = React.useState<string[]>([]);

    return (
      <Tree
        {...(args.data && { data: args.data })}
        {...(args.selectMode !== undefined && { selectMode: args.selectMode })}
        {...(args.disabled !== undefined && { disabled: args.disabled })}
        {...(args.expandable !== undefined && { expandable: args.expandable })}
        {...(args.showCheckboxes !== undefined && {
          showCheckboxes: args.showCheckboxes,
        })}
        {...(args.indentSize && { indentSize: args.indentSize })}
        {...(args.width && { width: args.width })}
        {...(args.height && { height: args.height })}
        {...(args.validationMessages && {
          validationMessages: args.validationMessages,
        })}
        onNodeExpand={(nodeId) => {
          console.log(`Node ${nodeId} expanded`);
        }}
        onNodeCollapse={(nodeId) => {
          console.log(`Node ${nodeId} collapsed`);
        }}
        value={selectedIds}
        onChange={(ids) => {
          args.onChange?.(ids);
          setSelectedIds(ids);
        }}
      />
    );
  },
};

export const SimpleErrorTest: Story = {
  args: {
    data: [
      {
        id: "1",
        label: "Test Node (Will Error)",
        hasChildren: true,
        loadChildren: async () => {
          console.log("Loading children for test node...");
          await new Promise((resolve) => setTimeout(resolve, 1000));
          console.log("Throwing error...");
          throw new Error("Test error message");
        },
      },
    ],
    showCheckboxes: false,
    selectMode: "single",
  },
  render: (args) => {
    const [selectedIds, setSelectedIds] = React.useState<string[]>([]);

    return (
      <div>
        <p className="mb-4 text-sm text-gray-600">
          Click on the expand button to test error handling. Check console for
          debug logs.
        </p>
        <Tree
          {...(args.data && { data: args.data })}
          {...(args.selectMode !== undefined && {
            selectMode: args.selectMode,
          })}
          {...(args.disabled !== undefined && { disabled: args.disabled })}
          {...(args.expandable !== undefined && {
            expandable: args.expandable,
          })}
          {...(args.showCheckboxes !== undefined && {
            showCheckboxes: args.showCheckboxes,
          })}
          {...(args.indentSize && { indentSize: args.indentSize })}
          {...(args.width && { width: args.width })}
          {...(args.height && { height: args.height })}
          {...(args.validationMessages && {
            validationMessages: args.validationMessages,
          })}
          onNodeExpand={(nodeId) => {
            console.log(`Node ${nodeId} expanded`);
          }}
          onNodeCollapse={(nodeId) => {
            console.log(`Node ${nodeId} collapsed`);
          }}
          value={selectedIds}
          onChange={(ids) => {
            args.onChange?.(ids);
            setSelectedIds(ids);
          }}
        />
      </div>
    );
  },
};

export const LargeTree: Story = {
  args: {
    data: [
      {
        id: "1",
        label: "Documents",
        expanded: true,
        children: [
          {
            id: "1-1",
            label: "Work",
            expanded: true,
            children: [
              { id: "1-1-1", label: "Project A" },
              { id: "1-1-2", label: "Project B" },
              { id: "1-1-3", label: "Project C" },
            ],
          },
          {
            id: "1-2",
            label: "Personal",
            children: [
              { id: "1-2-1", label: "Photos" },
              { id: "1-2-2", label: "Videos" },
              { id: "1-2-3", label: "Music" },
            ],
          },
        ],
      },
      {
        id: "2",
        label: "Applications",
        children: [
          { id: "2-1", label: "Web Browsers" },
          { id: "2-2", label: "Development Tools" },
          { id: "2-3", label: "Media Players" },
        ],
      },
      {
        id: "3",
        label: "System",
        children: [
          { id: "3-1", label: "Settings" },
          { id: "3-2", label: "Logs" },
        ],
      },
    ],
    showCheckboxes: true,
    selectMode: "multiple",
  },
  render: (args) => {
    const [selectedIds, setSelectedIds] = React.useState<string[]>([
      "1-1-1",
      "2-1",
    ]);
    return (
      <Tree
        {...(args.data && { data: args.data })}
        {...(args.selectMode !== undefined && { selectMode: args.selectMode })}
        {...(args.disabled !== undefined && { disabled: args.disabled })}
        {...(args.expandable !== undefined && { expandable: args.expandable })}
        {...(args.showCheckboxes !== undefined && {
          showCheckboxes: args.showCheckboxes,
        })}
        {...(args.indentSize && { indentSize: args.indentSize })}
        {...(args.width && { width: args.width })}
        {...(args.height && { height: args.height })}
        {...(args.validationMessages && {
          validationMessages: args.validationMessages,
        })}
        value={selectedIds}
        onChange={(ids) => {
          args.onChange?.(ids);
          setSelectedIds(ids);
        }}
      />
    );
  },
};

export const EllipsisWithLongLabels: Story = {
  args: {
    data: [
      {
        id: "1",
        label:
          "This is a very long root node label that should be truncated with ellipsis",
        expanded: true,
        children: [
          {
            id: "1-1",
            label:
              "This is an extremely long child node label that definitely exceeds the container width",
            expanded: true,
            children: [
              {
                id: "1-1-1",
                label:
                  "Super duper extremely long grandchild node label that needs ellipsis truncation",
              },
              {
                id: "1-1-2",
                label:
                  "Another very long grandchild node label for testing ellipsis functionality",
              },
              {
                id: "1-1-3",
                label: "Short",
              },
            ],
          },
          {
            id: "1-2",
            label: "Medium length child node",
            children: [
              {
                id: "1-2-1",
                label:
                  "This is another very long grandchild node label that should be truncated",
              },
              {
                id: "1-2-2",
                label: "Normal length",
              },
            ],
          },
        ],
      },
      {
        id: "2",
        label:
          "Another root node with a very long label that should be truncated",
        children: [
          {
            id: "2-1",
            label:
              "Child node with extremely long label that exceeds container width",
          },
          {
            id: "2-2",
            label: "Short child",
          },
        ],
      },
    ],
    showCheckboxes: true,
    selectMode: "multiple",
    width: "200px",
  },
  render: (args) => {
    const [selectedIds, setSelectedIds] = React.useState<string[]>([
      "1-1-1",
      "2-1",
    ]);
    return (
      <div style={{ padding: "20px", border: "1px dashed #ccc" }}>
        <h4>Tree with Long Labels (Width: 200px)</h4>
        <Tree
          {...(args.data && { data: args.data })}
          {...(args.selectMode !== undefined && {
            selectMode: args.selectMode,
          })}
          {...(args.disabled !== undefined && { disabled: args.disabled })}
          {...(args.expandable !== undefined && {
            expandable: args.expandable,
          })}
          {...(args.showCheckboxes !== undefined && {
            showCheckboxes: args.showCheckboxes,
          })}
          {...(args.indentSize && { indentSize: args.indentSize })}
          {...(args.width && { width: args.width })}
          {...(args.height && { height: args.height })}
          {...(args.validationMessages && {
            validationMessages: args.validationMessages,
          })}
          value={selectedIds}
          onChange={(ids) => {
            args.onChange?.(ids);
            setSelectedIds(ids);
          }}
        />
      </div>
    );
  },
};

export const EllipsisComparison: Story = {
  render: () => {
    const [selectedIds1, setSelectedIds1] = React.useState<string[]>(["1-1-1"]);
    const [selectedIds2, setSelectedIds2] = React.useState<string[]>(["2-1"]);

    const longLabelData = [
      {
        id: "1",
        label:
          "This is a very long root node label that should be truncated with ellipsis",
        expanded: true,
        children: [
          {
            id: "1-1",
            label:
              "This is an extremely long child node label that definitely exceeds the container width",
            expanded: true,
            children: [
              {
                id: "1-1-1",
                label:
                  "Super duper extremely long grandchild node label that needs ellipsis truncation",
              },
              {
                id: "1-1-2",
                label:
                  "Another very long grandchild node label for testing ellipsis functionality",
              },
            ],
          },
        ],
      },
      {
        id: "2",
        label:
          "Another root node with a very long label that should be truncated",
        children: [
          {
            id: "2-1",
            label:
              "Child node with extremely long label that exceeds container width",
          },
        ],
      },
    ];

    return (
      <div
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h3>Tree Ellipsis Comparison</h3>

        <div style={{ border: "1px dashed #ccc", padding: "15px" }}>
          <h4>Narrow Width (150px)</h4>
          <Tree
            data={longLabelData}
            selectMode="multiple"
            showCheckboxes={true}
            width="150px"
            value={selectedIds1}
            onChange={(ids) => {
              setSelectedIds1(ids);
            }}
          />
        </div>

        <div style={{ border: "1px dashed #ccc", padding: "15px" }}>
          <h4>Medium Width (250px)</h4>
          <Tree
            data={longLabelData}
            selectMode="multiple"
            showCheckboxes={true}
            width="250px"
            value={selectedIds2}
            onChange={(ids) => {
              setSelectedIds2(ids);
            }}
          />
        </div>

        <div style={{ border: "1px dashed #ccc", padding: "15px" }}>
          <h4>Wide Width (400px)</h4>
          <Tree
            data={longLabelData}
            selectMode="multiple"
            showCheckboxes={true}
            width="400px"
            value={selectedIds1}
            onChange={(ids) => {
              setSelectedIds1(ids);
            }}
          />
        </div>
      </div>
    );
  },
};
