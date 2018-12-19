---
inject: true
prepend: true
to: <%= srcPath %>/src/pages/index.tsx
skip_if: <%= name %>
eof_last: false
---
export * from './<%= name %>'
