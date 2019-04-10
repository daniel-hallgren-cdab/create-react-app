### Description

The grid system uses a series of grids and modules to layout and align content. It’s built with `display: grid` and is fully responsive. Below is an example and an in-depth look at how the grid comes together.

### Examples

#### Basic Usage

A plain `<Grid>` component. The number of columns defaults to 4.

```jsx
<Grid style={{ color: 'black' }}>
  <p>I am a child</p>
</Grid>
```

#### Complete Example with a Module

You should always put a `<Module />` inside the grid as a direct child.

Please refer to [Module](#/UI%20Components/Grid%20System?id=module) for a more usage example.

```jsx
<Grid style={{ color: 'black' }}>
  <Module columns={2}>
    <p>I am a child</p>
  </Module>
  <Module columns={2}>
    <p>I am a child</p>
  </Module>
</Grid>
```
