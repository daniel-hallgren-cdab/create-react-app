export interface ITheme {
  colors: {
    white: string
    black: string
  }
  sizes: {
    container: string
    mdContainer: string
    xlContainer: string
  }
}

export const theme: ITheme = {
  colors: {
    white: '#fff',
    black: '#222'
  },
  sizes: {
    container: '100%',
    mdContainer: '48rem',
    xlContainer: '82rem'
  }
}
