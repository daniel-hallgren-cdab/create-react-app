---
to: <%= srcPath %>/src/components/<%= name %>/<%= name %>.interfaces.ts
---
<% if (locals.i18n && locals.class) { -%>
import { WithTranslation } from 'react-i18next'
<% } -%>
export interface I<%= name %>Props <%= locals.i18n && locals.class ? 'extends WithTranslation' : '' %> {
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
