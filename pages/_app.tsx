import type { AppProps /*, AppContext */ } from 'next/app'
import { useEffect } from "react"
import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from '../src/theme/theme'
import CssBaseline from '@material-ui/core/CssBaseline';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles: any = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return <ThemeProvider theme={theme}> <CssBaseline /><Component {...pageProps} /></ThemeProvider >
}



export default MyApp