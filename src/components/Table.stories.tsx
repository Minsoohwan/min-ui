import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Table } from "./Table";

type Row = {
  id: number;
  name: string;
  age: number;
  email: string;
  active: boolean;
  permissions: Record<string, boolean | null>;
};

const sampleData: Row[] = [
  {
    id: 1,
    name: "Alice",
    age: 28,
    email: "alice@example.com",
    active: true,
    permissions: { read: true, write: false, execute: null },
  },
  {
    id: 2,
    name: "Bob",
    age: 34,
    email: "bob@example.com",
    active: false,
    permissions: { read: true, write: true, execute: false },
  },
  {
    id: 3,
    name: "Charlie",
    age: 22,
    email: "charlie@example.com",
    active: true,
    permissions: { read: true, write: null, execute: false },
  },
];

const sampleDataWithDisabled: (Row & { disabled?: boolean })[] = [
  {
    id: 1,
    name: "Alice",
    age: 28,
    email: "alice@example.com",
    active: true,
    permissions: { read: true, write: false, execute: null },
  },
  {
    id: 2,
    name: "Bob",
    age: 34,
    email: "bob@example.com",
    active: false,
    permissions: { read: true, write: true, execute: false },
    disabled: true, // 이 행은 비활성화됨
  },
  {
    id: 3,
    name: "Charlie",
    age: 22,
    email: "charlie@example.com",
    active: true,
    permissions: { read: true, write: null, execute: false },
  },
];

const meta: Meta<typeof Table<Row>> = {
  title: "Components/Table",
  component: Table<Row>,
  tags: ["autodocs"],
  args: {
    columns: [
      {
        key: "id",
        header: "ID",
        width: 60,
        align: "right",
        headerAlign: "center",
      },
      { key: "name", header: "Name", width: 160 },
      { key: "age", header: "Age", width: 80, align: "center" },
      { key: "email", header: "Email", width: 220 },
    ],
    data: sampleData,
    striped: true,
    bordered: true,
    hoverable: true,
    width: "100%",
    height: undefined,
    validationMessages: null,
  },
  argTypes: {
    onInitialized: { action: "initialized" },
    validationMessages: { control: "object" },
  },
};

export default meta;
type Story = StoryObj<typeof Table<Row>>;

export const Basic: Story = {};

export const Empty: Story = {
  args: {
    data: [],
    emptyText: "데이터가 없습니다.",
  },
};

export const CustomCells: Story = {
  args: {
    columns: [
      { key: "id", header: "#", width: 60, align: "right" },
      { key: "name", header: "User", width: 200 },
      {
        key: "age",
        header: "Age",
        width: 100,
        align: "center",
        render: (v: any) => (v >= 30 ? `🔥 ${v}` : v),
      },
      {
        key: "email",
        header: "Email",
        width: 240,
        render: (v: any, row: Row) => `${row.name} <${v}>`,
      },
    ],
  },
};

export const WithValidation: Story = {
  args: {
    validationMessages: [
      "필수 값을 입력하세요.",
      "이메일 형식이 올바르지 않습니다.",
    ],
  },
};

export const Editing: Story = {
  render: (args) => {
    const [rows, setRows] = React.useState<Row[]>(args.data as Row[]);
    const columns = [
      {
        key: "id",
        header: "ID",
        width: 60,
        align: "right" as const,
        // ID는 편집 불가
      },
      {
        key: "name",
        header: "Name",
        width: 160,
        edit: { editor: "TextBox", editorProps: { placeholder: "이름" } },
      },
      {
        key: "age",
        header: "Age",
        width: 100,
        align: "center" as const,
        edit: {
          editor: "SelectBox",
          editorProps: { items: [20, 25, 30, 35, 40] },
        },
      },
      {
        key: "email",
        header: "Email",
        width: 220,
        edit: { editor: "TextBox", editorProps: { placeholder: "이메일" } },
      },
    ];

    return (
      <div>
        <div
          style={{
            marginBottom: "10px",
            padding: "10px",
            background: "#f0f0f0",
          }}
        >
          <strong>현재 데이터:</strong>
          <pre>{JSON.stringify(rows, null, 2)}</pre>
        </div>
        <Table<Row>
          {...args}
          columns={columns as any}
          data={rows}
          editing
          onCellChange={({ rowIndex, key, value }) => {
            console.log("onCellChange:", { rowIndex, key, value });
            setRows((prev) => {
              const next = [...prev];
              (next[rowIndex] as any)[key as any] = value;
              console.log("Updated rows:", next);
              return next;
            });
          }}
        />
      </div>
    );
  },
};

export const EditingAll: Story = {
  render: (args) => {
    const [rows, setRows] = React.useState<Row[]>(args.data as Row[]);
    const columns = [
      { key: "id", header: "ID", width: 60, align: "right" as const },
      {
        key: "name",
        header: "Name",
        width: 160,
        edit: { editor: "TextBox", editorProps: { placeholder: "이름" } },
      },
      {
        key: "age",
        header: "Age",
        width: 100,
        align: "center" as const,
        edit: {
          editor: "SelectBox",
          editorProps: { items: [20, 25, 30, 35, 40] },
        },
      },
      {
        key: "email",
        header: "Email",
        width: 220,
        edit: { editor: "TextBox", editorProps: { placeholder: "이메일" } },
      },
      {
        key: "active",
        header: "Active",
        width: 100,
        align: "center" as const,
        edit: { editor: "CheckBox" },
      },
      {
        key: "permissions",
        header: "Permissions",
        width: 260,
        edit: {
          editor: (row: Row) => (row.id % 2 === 0 ? "none" : "CheckBoxGroup"),
          editorProps: {
            items: [
              { value: "read", display: "Read" },
              { value: "write", display: "Write" },
              { value: "execute", display: "Execute" },
            ],
            enableThreeState: true,
            direction: "horizontal",
          },
        },
      },
    ];

    return (
      <Table<Row>
        {...args}
        columns={columns as any}
        data={rows}
        editing
        onCellChange={({ rowIndex, key, value }) => {
          setRows((prev) => {
            const next = [...prev];
            (next[rowIndex] as any)[key as any] = value;
            return next;
          });
        }}
      />
    );
  },
};

export const PerColumnEditors: Story = {
  render: (args) => {
    const [rows, setRows] = React.useState<Row[]>(args.data as Row[]);
    const columns = [
      { key: "id", header: "ID", width: 60, align: "right" as const },
      {
        key: "name",
        header: "Name",
        width: 160,
        // 짝수 id는 편집 비활성화, 홀수 id는 TextBox
        edit: {
          editor: (row: Row) => (row.id % 2 === 0 ? "none" : "TextBox"),
          editorProps: { placeholder: "이름" },
        },
      },
      {
        key: "age",
        header: "Age",
        width: 100,
        align: "center" as const,
        // 나이에 따라 에디터 타입 다르게: 30 미만 SelectBox, 그 외 TextBox
        edit: {
          editor: (row: Row) => (row.age < 30 ? "SelectBox" : "TextBox"),
          editorProps: { items: [20, 22, 24, 26, 28, 30, 32, 34, 36] },
        },
      },
      {
        key: "email",
        header: "Email",
        width: 220,
        edit: { editor: "TextBox", editorProps: { placeholder: "이메일" } },
      },
      {
        key: "active",
        header: "Active",
        width: 100,
        align: "center" as const,
        edit: { editor: "CheckBox" },
      },
      {
        key: "permissions",
        header: "Permissions",
        width: 280,
        // 홀수 id 행만 그룹 편집, 짝수 id는 none
        edit: {
          editor: (row: Row) => (row.id % 2 === 1 ? "CheckBoxGroup" : "none"),
          editorProps: {
            items: [
              { value: "read", display: "Read" },
              { value: "write", display: "Write" },
              { value: "execute", display: "Execute" },
            ],
            enableThreeState: true,
            direction: "horizontal",
          },
        },
      },
    ];

    return (
      <Table<Row>
        {...args}
        columns={columns as any}
        data={rows}
        editing
        onCellChange={({ rowIndex, key, value }) => {
          setRows((prev) => {
            const next = [...prev];
            (next[rowIndex] as any)[key as any] = value;
            return next;
          });
        }}
      />
    );
  },
};

export const RowSpecificEditors: Story = {
  render: (args) => {
    const [rows, setRows] = React.useState<Row[]>(args.data as Row[]);
    const columns = [
      { key: "id", header: "ID", width: 60, align: "right" as const },
      {
        key: "name",
        header: "Name (Row-specific)",
        width: 200,
        edit: {
          editor: (_row: Row, rowIndex: number) =>
            rowIndex === 0 ? "TextBox" : rowIndex === 1 ? "SelectBox" : "none",
          editorProps: { items: ["Alice", "Bob", "Charlie", "Dana"] },
        },
      },
      { key: "age", header: "Age", width: 100, align: "center" as const },
      { key: "email", header: "Email", width: 240 },
    ];

    return (
      <Table<Row>
        {...args}
        columns={columns as any}
        data={rows}
        editing
        onCellChange={({ rowIndex, key, value }) => {
          setRows((prev) => {
            const next = [...prev];
            (next[rowIndex] as any)[key as any] = value;
            return next;
          });
        }}
      />
    );
  },
};

export const SingleSelection: Story = {
  render: (args) => {
    const [selectedRowKeys, setSelectedRowKeys] = React.useState<number>(1);

    return (
      <div>
        <p>선택된 행: {selectedRowKeys}</p>
        <Table<Row>
          {...args}
          rowKey={(row) => row.id}
          selectMode="single"
          selectedRowKeys={selectedRowKeys}
          onRowSelectionChange={({ selectedRowKeys, selectedRows }) => {
            const id = selectedRowKeys[0];
            setSelectedRowKeys(id as number);
            console.log("선택된 행:", selectedRows);
          }}
        />
      </div>
    );
  },
};

export const MultipleSelection: Story = {
  render: (args) => {
    const [selectedRowKeys, setSelectedRowKeys] = React.useState<number[]>([
      1, 3,
    ]);

    return (
      <div>
        <p>선택된 행 IDs: {selectedRowKeys.join(", ")}</p>
        <Table<Row>
          {...args}
          rowKey={(row) => row.id}
          selectMode="multiple"
          selectedRowKeys={selectedRowKeys}
          onRowSelectionChange={({ selectedRowKeys, selectedRows }) => {
            setSelectedRowKeys(selectedRowKeys as number[]);
            console.log("선택된 행:", selectedRows);
          }}
        />
      </div>
    );
  },
};

export const SelectionWithEditing: Story = {
  render: (args) => {
    const [rows, setRows] = React.useState<Row[]>(args.data as Row[]);
    const [selectedRowKeys, setSelectedRowKeys] = React.useState<number[]>([1]);

    const columns = [
      { key: "id", header: "ID", width: 60, align: "right" as const },
      {
        key: "name",
        header: "Name",
        width: 160,
        edit: { editor: "TextBox", editorProps: { placeholder: "이름" } },
      },
      { key: "age", header: "Age", width: 100, align: "center" as const },
      { key: "email", header: "Email", width: 220 },
      {
        key: "active",
        header: "Active",
        width: 100,
        align: "center" as const,
        edit: { editor: "CheckBox" },
      },
    ];

    return (
      <div>
        <p>선택된 행 IDs: {selectedRowKeys.join(", ")}</p>
        <Table<Row>
          {...args}
          columns={columns as any}
          rowKey={(row) => row.id}
          data={rows}
          selectMode="multiple"
          selectedRowKeys={selectedRowKeys}
          editing
          onRowSelectionChange={({ selectedRowKeys, selectedRows }) => {
            setSelectedRowKeys(selectedRowKeys as number[]);
            console.log("선택된 행:", selectedRows);
          }}
          onCellChange={({ rowIndex, key, value }) => {
            setRows((prev) => {
              const next = [...prev];
              (next[rowIndex] as any)[key as any] = value;
              return next;
            });
          }}
        />
      </div>
    );
  },
};

export const CustomAlignment: Story = {
  args: {
    columns: [
      {
        key: "id",
        header: "ID",
        width: 80,
        align: "right",
        headerAlign: "center",
      },
      {
        key: "name",
        header: "이름",
        width: 150,
        align: "left",
        headerAlign: "center",
      },
      {
        key: "age",
        header: "나이",
        width: 100,
        align: "center",
        headerAlign: "center",
      },
      {
        key: "email",
        header: "이메일",
        width: 250,
        align: "left",
      },
    ],
  },
};

export const NestedColumns: Story = {
  args: {
    columns: [
      {
        key: "id",
        header: "ID",
        width: 60,
        align: "right",
        headerAlign: "center",
      },
      {
        key: "user-info",
        header: "사용자 정보",
        headerAlign: "center",
        children: [
          {
            key: "name",
            header: "이름",
            width: 120,
            align: "left",
          },
          {
            key: "age",
            header: "나이",
            width: 80,
            align: "center",
          },
        ],
      },
      {
        key: "contact",
        header: "연락처",
        headerAlign: "center",
        children: [
          {
            key: "email",
            header: "이메일",
            width: 200,
            align: "left",
          },
        ],
      },
      {
        key: "active",
        header: "활성",
        width: 80,
        align: "center",
        headerAlign: "center",
        render: (v: any) => (v ? "✓" : "✗"),
      },
    ],
  },
};

export const ComplexNestedColumns: Story = {
  args: {
    columns: [
      {
        key: "id",
        header: "ID",
        width: 60,
        align: "right",
        headerAlign: "center",
      },
      {
        key: "personal",
        header: "개인 정보",
        headerAlign: "center",
        children: [
          {
            key: "basic",
            header: "기본 정보",
            headerAlign: "center",
            children: [
              {
                key: "name",
                header: "이름",
                width: 100,
              },
              {
                key: "age",
                header: "나이",
                width: 60,
                align: "center",
              },
            ],
          },
          {
            key: "email",
            header: "이메일",
            width: 180,
          },
        ],
      },
      {
        key: "active",
        header: "상태",
        width: 80,
        align: "center",
        headerAlign: "center",
        render: (v: any) => (v ? "활성" : "비활성"),
      },
    ],
  },
};

export const WithDataField: Story = {
  args: {
    columns: [
      {
        key: "user-id",
        header: "ID",
        dataField: "id",
        width: 60,
        align: "right",
        headerAlign: "center",
      },
      {
        key: "user-name",
        header: "사용자 이름",
        dataField: "name",
        width: 150,
      },
      {
        key: "user-age",
        header: "나이",
        dataField: "age",
        width: 80,
        align: "center",
      },
      {
        key: "user-email",
        header: "이메일 주소",
        dataField: "email",
        width: 220,
      },
      {
        key: "user-status",
        header: "상태",
        dataField: "active",
        width: 100,
        align: "center",
        render: (v: any) => (v ? "✓ 활성" : "✗ 비활성"),
      },
    ],
  },
};

export const WithDisabledRows: Story = {
  args: {
    data: sampleDataWithDisabled,
    columns: [
      { key: "id", header: "ID", width: 60, align: "right" },
      { key: "name", header: "Name", width: 160 },
      { key: "age", header: "Age", width: 80, align: "center" },
      { key: "email", header: "Email", width: 220 },
      {
        key: "active",
        header: "Active",
        width: 100,
        align: "center",
        render: (v: any) => (v ? "✓" : "✗"),
      },
    ],
  },
};

export const WithDisabledRowsAndSelection: Story = {
  render: (args) => {
    const [selectedRowKeys, setSelectedRowKeys] = React.useState<number[]>([1]);

    return (
      <div>
        <p style={{ marginBottom: "10px" }}>
          <strong>선택된 행 IDs:</strong> {selectedRowKeys.join(", ")}
          <br />
          <small>(2번 행은 비활성화되어 선택할 수 없습니다)</small>
        </p>
        <Table
          {...args}
          data={sampleDataWithDisabled}
          rowKey={(row: any) => row.id}
          selectMode="multiple"
          selectedRowKeys={selectedRowKeys}
          onRowSelectionChange={({ selectedRowKeys, selectedRows }) => {
            setSelectedRowKeys(selectedRowKeys as number[]);
            console.log("선택된 행:", selectedRows);
          }}
          columns={[
            { key: "id", header: "ID", width: 60, align: "right" },
            { key: "name", header: "Name", width: 160 },
            { key: "age", header: "Age", width: 80, align: "center" },
            { key: "email", header: "Email", width: 220 },
            {
              key: "active",
              header: "Active",
              width: 100,
              align: "center",
              render: (v: any) => (v ? "✓" : "✗"),
            },
          ]}
        />
      </div>
    );
  },
};

export const WithDisabledRowsAndEditing: Story = {
  render: (args) => {
    const [rows, setRows] = React.useState(sampleDataWithDisabled);

    return (
      <div>
        <p style={{ marginBottom: "10px" }}>
          <small>(2번 행은 비활성화되어 편집할 수 없습니다)</small>
        </p>
        <Table
          {...args}
          data={rows}
          editing
          onCellChange={({ rowIndex, key, value }) => {
            setRows((prev) => {
              const next = [...prev];
              (next[rowIndex] as any)[key as any] = value;
              return next;
            });
          }}
          columns={[
            { key: "id", header: "ID", width: 60, align: "right" },
            {
              key: "name",
              header: "Name",
              width: 160,
              edit: { editor: "TextBox", editorProps: { placeholder: "이름" } },
            },
            {
              key: "age",
              header: "Age",
              width: 100,
              align: "center",
              edit: {
                editor: "SelectBox",
                editorProps: { items: [20, 25, 30, 35, 40] },
              },
            },
            {
              key: "email",
              header: "Email",
              width: 220,
              edit: {
                editor: "TextBox",
                editorProps: { placeholder: "이메일" },
              },
            },
            {
              key: "active",
              header: "Active",
              width: 100,
              align: "center",
              edit: { editor: "CheckBox" },
            },
          ]}
        />
      </div>
    );
  },
};

type MergeData = {
  id: number;
  category: string;
  product: string;
  price: number;
  stock: number;
};

const mergeData: MergeData[] = [
  { id: 1, category: "Electronics", product: "Laptop", price: 1200, stock: 50 },
  { id: 2, category: "Electronics", product: "Mouse", price: 25, stock: 200 },
  {
    id: 3,
    category: "Electronics",
    product: "Keyboard",
    price: 75,
    stock: 150,
  },
  { id: 4, category: "Books", product: "Novel", price: 15, stock: 100 },
  { id: 5, category: "Books", product: "Magazine", price: 5, stock: 300 },
  { id: 6, category: "Clothing", product: "T-Shirt", price: 20, stock: 500 },
];

export const WithCellMerge = {
  args: {
    data: mergeData as any,
    columns: [
      {
        key: "id",
        header: "ID",
        width: 60,
        align: "right",
        headerAlign: "center",
      },
      {
        key: "category",
        header: "Category",
        width: 150,
        align: "center",
        // 같은 카테고리를 병합
        getCellMerge: (value: any, row: MergeData, rowIndex: number) => {
          if (rowIndex === 0) {
            // Electronics: 3행
            return { rowSpan: 3 };
          } else if (rowIndex === 3) {
            // Books: 2행
            return { rowSpan: 2 };
          } else if (rowIndex === 5) {
            // Clothing: 1행
            return { rowSpan: 1 };
          }
          return null;
        },
      },
      { key: "product", header: "Product", width: 150 },
      {
        key: "price",
        header: "Price",
        width: 100,
        align: "right",
        render: (v: any) => `$${v}`,
      },
      {
        key: "stock",
        header: "Stock",
        width: 100,
        align: "center",
      },
    ],
  },
};

export const WithComplexMerge = {
  args: {
    data: [
      { id: 1, col1: "A", col2: "B", col3: "C", col4: "D" },
      { id: 2, col1: "A", col2: "E", col3: "F", col4: "G" },
      { id: 3, col1: "H", col2: "I", col3: "J", col4: "K" },
      { id: 4, col1: "L", col2: "M", col3: "N", col4: "O" },
    ],
    columns: [
      { key: "id", header: "ID", width: 60, align: "center" },
      {
        key: "col1",
        header: "Column 1",
        width: 150,
        align: "center",
        // 첫 두 행 병합
        getCellMerge: (value: any, row: any, rowIndex: number) => {
          if (rowIndex === 0) {
            return { rowSpan: 2 };
          }
          return null;
        },
      },
      {
        key: "col2",
        header: "Column 2",
        width: 150,
        align: "center",
      },
      {
        key: "col3",
        header: "Column 3-4",
        width: 150,
        align: "center",
        // 2열 병합
        getCellMerge: (value: any, row: any, rowIndex: number) => {
          return { colSpan: 2 };
        },
      },
      {
        key: "col4",
        header: "Hidden",
        width: 150,
        align: "center",
      },
    ],
  },
};

export const WithMergeAndEditing = {
  render: (args: any) => {
    const [rows, setRows] = React.useState(mergeData);

    return (
      <div>
        <p style={{ marginBottom: "10px" }}>
          <strong>병합된 셀에서도 편집 가능합니다</strong>
          <br />
          <small>
            Category 컬럼은 병합되어 있지만, 병합된 첫 번째 셀에서 편집할 수
            있습니다.
          </small>
        </p>
        <div style={{ marginBottom: "10px", fontSize: "12px" }}>
          <pre>{JSON.stringify(rows, null, 2)}</pre>
        </div>
        <Table
          {...args}
          data={rows}
          editing
          onCellChange={({ rowIndex, key, value }: any) => {
            console.log("Cell changed:", { rowIndex, key, value });
            setRows((prev: any) => {
              const next = [...prev];
              (next[rowIndex] as any)[key as any] = value;
              return next;
            });
          }}
          columns={[
            {
              key: "id",
              header: "ID",
              width: 60,
              align: "right",
              headerAlign: "center",
            },
            {
              key: "category",
              header: "Category",
              width: 150,
              align: "center",
              // 같은 카테고리를 병합하고 편집 가능하게
              getCellMerge: (value: any, row: any, rowIndex: number) => {
                if (rowIndex === 0) {
                  return { rowSpan: 3 }; // Electronics: 3행
                } else if (rowIndex === 3) {
                  return { rowSpan: 2 }; // Books: 2행
                } else if (rowIndex === 5) {
                  return { rowSpan: 1 }; // Clothing: 1행
                }
                return null;
              },
              edit: {
                editor: "TextBox",
                editorProps: { placeholder: "카테고리" },
              },
            },
            {
              key: "product",
              header: "Product",
              width: 150,
              edit: {
                editor: "TextBox",
                editorProps: { placeholder: "제품명" },
              },
            },
            {
              key: "price",
              header: "Price",
              width: 100,
              align: "right",
              render: (v: any) => `$${v}`,
              edit: {
                editor: "TextBox",
                editorProps: { placeholder: "가격" },
              },
            },
            {
              key: "stock",
              header: "Stock",
              width: 100,
              align: "center",
              edit: {
                editor: "SelectBox",
                editorProps: { items: [50, 100, 150, 200, 300, 500] },
              },
            },
          ]}
        />
      </div>
    );
  },
};
