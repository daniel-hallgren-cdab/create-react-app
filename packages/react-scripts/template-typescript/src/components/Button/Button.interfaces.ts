import { ReactNode } from 'react'

export interface IButtonProps {
  /** Pass your own click event handler, if you wish */
  onClick?(): void
}

export interface IButtonState {
  /** The value of the button */
  text?: ReactNode
}
