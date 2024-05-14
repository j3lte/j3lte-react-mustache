# React + Mustache

Packages:

- `react`
- `vite`
- `react-router-dom`
- `react-mustache-template-component`

Allow HTML files as assets in the configuration:

```
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.html"],
})
```

See file `src/routes/Mustache.jsx`.

Loading the template `mustache.html` as a file results in the following warnings/errors:

```
Warning: React has detected a change in the order of Hooks called by TemplateComponentInternal.
This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: ...
```

```
Error: Rendered more hooks than during the previous render.
```

Using a text string as the template works.
