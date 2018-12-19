---
inject: true
prepend: true
to: <%= srcPath %>/src/components/index.ts
skip_if: <%= name %>
eof_last: false
---
export * from './<%= name %>'
