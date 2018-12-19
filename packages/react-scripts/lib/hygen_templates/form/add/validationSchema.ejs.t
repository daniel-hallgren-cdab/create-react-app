---
to: <%= srcPath %>/src/components/<%= name %>Form/validationSchema.ts
---
import * as Yup from 'yup'

/* Import utilities here */
import i18n from '../../config/i18n'

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email(i18n.t('<%= name %>-form:email-valid-format'))
    .required(i18n.t('<%= name %>-form:email-required'))
})
