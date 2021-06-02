import { useState } from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { store } from '../store'
import themes from '../styles/themes'

function MyApp({ Component, pageProps }) {
  const [themeName, setThemeName] = useState('')
  return (
  	<Provider store={store}>
      <ThemeProvider theme={themes[themeName] ? themes[themeName] : themes['themeDefault']}>
        <Component {...pageProps} setTheme={setThemeName} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
