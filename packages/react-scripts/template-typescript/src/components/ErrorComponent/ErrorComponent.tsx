import React, { useEffect } from 'react'

export const ErrorComponent = () => {
  useEffect(() => {
    throw new Error('A very dangerous error')
  })

  return <h4>This component makes the app crash</h4>
}

/** @component */
export default ErrorComponent
