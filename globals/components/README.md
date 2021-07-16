# /components

Each component should go in its own folder. Styles that are scoped to the component should be kept alongside the component itself.

Example:
```
/components/header
  header.js
  header.module.scss
```

## Barrel File
Export your components from the component folder root `index.js` so that they can be imported together in a single line.

Example:
```
export { default as Header} from './header/header.js';
```
