import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import NavigationPanel from '../components/NavigationPanel'
import { ThemeProvider, themeReducer, Theme } from "../providers/theme-context"
import { useReducer } from 'react'

export default function App({ Component, pageProps }: AppProps) {

  const [state, setCurrentTheme] = useReducer(themeReducer, { value: Theme.light })

  return <ThemeProvider value={{ currentTheme: state, setCurrentTheme }}><Head>
    <title>Aqua Hobby</title>
    <meta name="description" content="Best Place for Aquarium Hobbyist" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
    <NavigationPanel /><Component {...pageProps} /></ThemeProvider>
}
