# /styles

## /components
Component styles that are not actual react components. Examples: button styling, form styling, etc.

## /mixins
Self-explanatory.

## /variables
Variable sheets for each brand.
# Styles directory

*IMPORTANT:* In this global stylesheets you CAN'T target html tags (<html>, <body>, etc) it must be a class/id name.

```html
<html className="example-class">
  <!-- markup inside -->
</html>
```

🚫 Do not do this:
```css
html {
  // some styles
}
```

✅ Correct way:
```css
.example-class {
  // some styles
}
```
