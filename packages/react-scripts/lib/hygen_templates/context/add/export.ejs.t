---
inject: true
prepend: true
to: <%= srcPath %>/src/contexts/index.ts
skip_if: <%= name %>
eof_last: false
---
export * from './<%= name %>'
