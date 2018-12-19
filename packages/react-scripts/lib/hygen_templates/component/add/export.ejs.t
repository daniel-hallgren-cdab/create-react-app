---
inject: true
prepend: true
to: <%= srcPath %>/src/components/index.tsx
skip_if: <%= name %>
eof_last: false
---
export * from './<%= name %>'
