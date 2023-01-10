import * as React from 'react'
import { Container } from "@mui/material"
import PageBanner from "./PageBanner"
import SourceBooks from "./LinkLists/SourceBooks"
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

const App = () => {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Container>
        <PageBanner />
        <SourceBooks />
      </Container>
    </ThemeProvider>
)}

export default App