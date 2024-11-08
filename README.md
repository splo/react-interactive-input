<center>
  <img src="assets/interactive-input-icon.svg" alt="" height="64" aria-hidden="true" />
  <h1>React Interactive Input</h1>
</center>

In Blender and similar 3D applications, users can adjust values in numeric input boxes by clicking and dragging horizontally, often referred to as **scrubbing.**

The user typically clicks and holds the mouse over the number, then drags left or right to decrease or increase the value smoothly. This provides quick, precise control over numeric adjustments without needing to type manually or rely on up/down arrows.

This component is a React implementation of that behavior, with a few additional features and customizations.

## Features

- **Interactive Input**: Click and drag to adjust numeric values smoothly.
- **Customizable**: Control the step, min, and max values for the input.
- **Controlled Component**: Fully controlled input field with a callback for value changes.
- **Input Masking**: Custom input component for handling negative numbers.
- **Theming**: Easily customize styles to match your application's look and feel.
- **Accessibility**: Built with accessibility in mind.

## Installation

To install the library, use npm or yarn:

```bash
npm install @designbyadrian/react-interactive-input
# or
yarn add @designbyadrian/react-interactive-input
```

## Usage

```jsx
import InteractiveInput from '@designbyadrian/react-interactive-input';

function MyComponent() {
  return <InteractiveInput value={42} onChange={value => console.log(value)} />;
}
```

## Attributes

The `InteractiveInput` component accepts all properties of the HTMLInputElement element, especially the following attributes:

- `value`: The initial value of the input field.
- `onChange`: A callback function that receives the new value when it changes.
- `step`: The amount to increment or decrement the value when scrubbing.
- `min`: The minimum value allowed.
- `max`: The maximum value allowed.

## Components

The library exports two components: `InteractiveInput` and `MaskedInput`.

### InteractiveInput

The main component for interactive input behavior.

### MaskedInput

A custom input component featuring input masking specifically designed to address limitations with negative numbers in standard HTML input elements. This component ensures that negative values are properly formatted and accepted by the input field, preventing unexpected behavior or errors when handling signed numbers.

You can provide your own masking function to customize the behavior of the input field.

Example:

```jsx
import { MaskedInput } from '@designbyadrian/react-interactive-input';

function MyComponent() {
  return (
    <MaskedInput
      value="-4.2"
      onChange={e => console.log(parseFloat(e.target.value))}
    />
  );
}
```

## Running locally

To run the project locally, follow these steps:

1. Clone the repository:

```bash
git clone
```

2. Install the dependencies:

```bash
npm install
# or
yarn
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

The project will be available at `http://localhost:6006`.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.
