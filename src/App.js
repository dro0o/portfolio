import React from 'react'
import { makeStyles, ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core'
import { useRoutes } from 'hookrouter'

import Background from './img/background.jpg'
import routes from './routes/router'
import Landing from './components/Landing'
import ElevationAppBar from './components/ElevationAppBar'

const portfolioTheme = createMuiTheme({
  palette: {
    text: {
      primary: 'rgba(255, 255, 255, 0.9)'
    }
  },
  typography: {
    fontFamily: '"Merienda", sans-serif'
  }
})

const useStyles = makeStyles(portfolioTheme => ({
  appBarRoot: {
    flexGrow: 1,
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh'
  }
}))

export default function App() {
  const routeResult = useRoutes(routes)
  const classes = useStyles()

  return (
    <div className={classes.appBarRoot}>
      <ThemeProvider theme={portfolioTheme}>
        <ElevationAppBar />
        {routeResult || <Landing />}
      </ThemeProvider>
    </div>
  )
}
