import { createMuiTheme } from '@material-ui/core'

export const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: { main: "rgba(46,124,158,1)" },
    secondary: {
      main: "rgba(115,229,131,1)"

      //#fb743e
    }
  },
  spacing: 4,
  shape: { borderRadius: 10 }
})

