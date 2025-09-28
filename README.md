# Min UI

A minimal React UI component library with clean, modern components.

## Installation

```bash
npm install min-ui
```

## Usage

```tsx
import { Button, TextBox, CheckBox, SelectBox, Tree } from "min-ui";
import "min-ui/dist/index.css"; // Import styles

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <TextBox placeholder="Enter text..." />
      <CheckBox label="Check this" />
      <SelectBox
        items={[
          { value: "1", label: "Option 1" },
          { value: "2", label: "Option 2" },
        ]}
      />
      <Tree
        nodes={[
          {
            id: "1",
            label: "Node 1",
            children: [{ id: "2", label: "Child 1" }],
          },
        ]}
      />
    </div>
  );
}
```

## Components

- **Button**: Various button styles and variants
- **TextBox**: Input field with validation support
- **CheckBox**: Checkbox with label support
- **CheckBoxGroup**: Group of checkboxes
- **SelectBox**: Dropdown selection component
- **Tree**: Hierarchical tree component

## Requirements

- React 18 or higher
- React DOM 18 or higher

## License

MIT

## Storybook

Live demo: https://minsoohwan.github.io/min-ui
