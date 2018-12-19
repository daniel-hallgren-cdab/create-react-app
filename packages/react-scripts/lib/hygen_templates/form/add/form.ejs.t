---
to: <%= srcPath %>/src/components/<%= name %>Form/<%= name %>Form.tsx
---
import * as React from 'react'
import { withI18n, WithI18n } from 'react-i18next'
import styled from 'styled-components'

/* Form */
import { withFormik, Form, Field, ErrorMessage, FormikProps, FieldProps } from 'formik'

/* Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAsterisk } from '@fortawesome/free-solid-svg-icons'

/* Import utilities here */

/* Import components here */

/* Validation */

import { validationSchema } from '.'

/* Styles */

const StyledInput = styled.input`
  appearance: none;

  padding: 1rem;

  font: inherit;

  border: 0;
  border-radius: .25rem;
`

// Exclude `form` to enable 'submit on enter', until Formik's Hooks release
const StyledField = styled(({ form, field, ...props }: FieldProps & React.InputHTMLAttributes<HTMLInputElement>) => <StyledInput {...field} {...props} />)``

/* Interfaces */

interface I<%= name %>FormProps extends WithI18n {}

interface FormValues {
  /* The user's email address */
  email: string
}

/* Form */

const Inner<%= name %>Form = (props: FormikProps<FormValues>) => {
  const { isSubmitting } = props

  return (
    <Form>
      <Field component={StyledInput} name='email' placeholder={ t('<%= name %>-form:email-placeholder') } />
      <ErrorMessage name='email' />
      <Button type='submit' disabled={isSubmitting}>{ isSubmitting ? <FontAwesomeIcon icon={faAsterisk} spin /> : t('<%= name %>-form:submit') }</Button>
    </Form>
  )
}

/* Formik */

export const <%= name %>Form = withI18n()(
  withFormik<I<%= name %>FormProps, FormValues>({
    /* Form validation */
    validationSchema,

    /* Set initial values */
    mapPropsToValues: () => ({
      email: '',
    }),

    /* Submit handler */
    handleSubmit: async (values, { props, setSubmitting }) => {
      try {
        /* Make API request or similar here */
      } catch (e) {
        console.error(e)
      } finally {
        setSubmitting(false)
      }
    }
  })(Inner<%= name %>Form)
)

/** @component */
export default <%= name %>Form
