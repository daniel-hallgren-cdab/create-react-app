---
to: <%= srcPath %>/src/pages/<%= name %>/<%= name %>.interfaces.ts
---
export interface I<%= name %>Props {
  /**
   * The best and most awesome title ever!!!
   */
  title?: string
}

<% if (locals.class) { -%>
export interface I<%= name %>State {
  /**
   * Count your money...s
   */
  counter: number
}
<% } -%>
