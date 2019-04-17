---
inject: true
prepend: true
to: <%= srcPath %>/src/pages/index.ts
skip_if: export * from './<%= name %>'
eof_last: false
---
export * from './<%= name %>'
