import { createMuiTheme, rgbToHex } from '@material-ui/core'

export const theme = createMuiTheme({
  typography: {
    fontSize: 16,

    h5: { fontWeight: 600 },
    h6: { fontWeight: 900, color: "#133341" },
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
    text: {
      primary: 'rgb(52, 58, 64)'
    },
    primary: { main: "rgba(46,124,158,1)", dark: "#133341" },
    secondary: {
      main: "rgba(115,229,131,1)"

    }
  },
  spacing: 4,
  shape: { borderRadius: 10 }
})

