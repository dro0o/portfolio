import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { useRoutes } from 'hookrouter'

import Background from './img/background.jpg'
import routes from './routes/router'
import Landing from './components/Landing'
import ElevationAppBar from './components/ElevationAppBar'

const useStyles = makeStyles(theme => ({
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
      <ElevationAppBar />
      {routeResult || <Landing />}
    </div>
  )
}
