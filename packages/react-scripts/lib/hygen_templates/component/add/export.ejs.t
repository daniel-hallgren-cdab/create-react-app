---
inject: true
prepend: true
to: <%= srcPath %>/src/components/index.ts
skip_if: export * from './<%= name %>'
eof_last: false
---
export * from './<%= name %>'
