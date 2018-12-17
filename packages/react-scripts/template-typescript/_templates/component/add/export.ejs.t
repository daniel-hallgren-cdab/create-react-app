---
inject: true
prepend: true
to: <%= cwd %>/src/components/index.tsx
skip_if: <%= name %>
eof_last: false
---
export * from './<%= name %>'
