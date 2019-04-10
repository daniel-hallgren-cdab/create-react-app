### Description

A module is a container placed in a `<Grid />`. The module is used to position the content in the grid. A `<Module>` can be positioned differently on different screen sizes.

You can also pass a title to a `<Module />` which is rendered inside it.

### Examples

#### Basic Usage

A plain `<Module>` component.

```jsx
<Grid style={{ color: 'black' }}>
  <p>Hello, I am a child!</p>
</Grid>
```

#### Module title

Pass a title to a module.

```jsx
<Grid style={{ color: 'black' }}>
  <Module title="¡Hola! ¡I am a title!" />
</Grid>
```

#### Multiple modules

Use multiple modules with different columns.

```jsx
<Grid style={{ color: 'black' }}>
  <Module columns={1} startColumn={2}>
    <p>Hello</p>
  </Module>
  <Module columns={2} startColumn={3}>
    <p>Hello again</p>
  </Module>
</Grid>
```

#### Multiple Rows

When the total width of modules exceeds the number of columns specified in the `<Grid />` a new row is rendered.

Notice: Calculate the columns span to create rows.

```jsx
<Grid style={{ background: '#f0f0f0', color: 'black' }}>
  <Module style={{ border: '1px solid #aaa' }} columns={1}>
    1 of 4
  </Module>
  <Module style={{ border: '1px solid #aaa' }} columns={1}>
    1 of 4
  </Module>
  <Module style={{ border: '1px solid #aaa' }} columns={1}>
    1 of 4
  </Module>
  <Module style={{ border: '1px solid #aaa' }} columns={1}>
    1 of 4
  </Module>
  <Module style={{ border: '1px solid #aaa' }} columns={2}>
    2 of 4
  </Module>
  <Module style={{ border: '1px solid #aaa' }} columns={2}>
    2 of 4
  </Module>
  <Module style={{ border: '1px solid #aaa' }} columns={3}>
    3 of 4
  </Module>
  <Module style={{ border: '1px solid #aaa' }} columns={1}>
    1 of 4
  </Module>
  <Module style={{ border: '1px solid #aaa' }}>4 of 4</Module>
  <Module style={{ border: '1px solid #aaa' }} columns={3}>
    3 of 4
  </Module>
  <Module style={{ border: '1px solid #aaa' }} columns={1}>
    1 of 4
  </Module>
  <Module style={{ border: '1px solid #aaa' }} columns={2}>
    2 of 4
  </Module>
  <Module style={{ border: '1px solid #aaa' }} columns={2}>
    2 of 4
  </Module>
  <Module style={{ border: '1px solid #aaa' }} columns={3}>
    3 of 4
  </Module>
  <Module style={{ border: '1px solid #aaa' }} columns={1}>
    1 of 4
  </Module>
</Grid>
```

#### Differents Columns on Different Screen Sizes

In the following example the modules will take up all the grid columns on smaller screens. On bigger screens each module uses a different value.

```jsx
<Grid style={{ background: '#f0f0f0', color: 'black' }}>
  <Module style={{ border: '1px solid #aaa' }} columns={4} xlColumns={2}>
    Resize me
  </Module>
  <Module style={{ border: '1px solid #aaa' }} columns={4} xlColumns={1}>
    Resize me
  </Module>
  <Module style={{ border: '1px solid #aaa' }} columns={4} xlColumns={3}>
    Resize me
  </Module>
  <Module style={{ border: '1px solid #aaa' }} columns={4} xlColumns={1}>
    Resize me
  </Module>
  <Module style={{ border: '1px solid #aaa' }} columns={4} xlColumns={4}>
    Resize me
  </Module>
  <Module style={{ border: '1px solid #aaa' }} columns={4} xlColumns={1}>
    Resize me
  </Module>
  <Module style={{ border: '1px solid #aaa' }} columns={4} xlColumns={1}>
    Resize me
  </Module>
  <Module style={{ border: '1px solid #aaa' }} columns={4} xlColumns={1}>
    Resize me
  </Module>
  <Module style={{ border: '1px solid #aaa' }} columns={4} xlColumns={1}>
    Resize me
  </Module>
  <Module style={{ border: '1px solid #aaa' }} columns={4} xlColumns={1}>
    Resize me
  </Module>
</Grid>
```
