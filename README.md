# ToDo List

ToDo List with React.js, TypeScript, Vite and Tailwind
![todo_list_image](readme_images/todo_list_image.png)

## 🚀Links

- [Figma Design](https://www.figma.com/design/TAxEevA88S0FE3YVGYHuA0/Lista-de-Tarefas--Community-?node-id=3-376&p=f&t=dssHKjL2UhmkpBIk-0)

## 🛠️ Tech Stack

- [React](https://react.dev/) - React framework for production
- [TypeScript](https://www.typescriptlang.org/) - Programming Language
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [PNPM](https://pnpm.io/pt/installation) - Package Manager
- [Vite](https://vite.dev/) - Build Tool
- [CSA](https://cva.style/docs) - library for creating component variants with CSS classes.
- [Vite plugin svgr](https://www.npmjs.com/package/vite-plugin-svgr) - Vite plugin to transform SVGs into React components.
- [useLocalStorage React Hook](https://www.npmjs.com/package/use-local-storage) - flexible React Hook for using Local Storage

## 📦 Installation

1. Clone the repository

```bash
git clone https://github.com/Thaisfelicio/todo-list-React.git
```

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
