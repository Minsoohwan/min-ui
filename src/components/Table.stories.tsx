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

const meta: Meta<typeof Table<Row>> = {
  title: "Components/Table",
  component: Table<Row>,
  tags: ["autodocs"],
  args: {
    columns: [
      { key: "id", header: "ID", width: 60, align: "right" },
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
