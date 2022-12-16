import * as React from 'react'
import { Container } from "@mui/material"
import PageBanner from "./PageBanner"
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

const theme = createTheme({
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
      '"Nunito Sans',
    ].join(',')
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: '"Nunito Sans"';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Raleway'), local('Raleway-Regular'), url(${RalewayWoff2}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <PageBanner />
      </Container>
    </ThemeProvider>
)}

export default App