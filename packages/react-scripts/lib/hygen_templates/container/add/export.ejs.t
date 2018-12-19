---
inject: true
prepend: true
to: <%= srcPath %>/src/containers/index.ts
skip_if: <%= name %>
eof_last: false
---
export * from './<%= name %>'
