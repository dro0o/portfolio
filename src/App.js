import React from 'react'
import { makeStyles } from '@material-ui/styles'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button
} from '@material-ui/core'
import FingerprintIcon from '@material-ui/icons/Fingerprint'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode'
import { useRoutes, A } from 'hookrouter'
import { useMediaQuery } from 'react-responsive'

import routes from './routes/router'
import Landing from './components/Landing'
import logo from './img/adp.png'

const useStyles = makeStyles(theme => ({
  appBarRoot: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: 'rgba(23, 23, 23, 0.2)'
  },
  name: {
    textTransform: 'none'
  },
  space: {
    flexGrow: 1
  },
  navIcon: {
    height: 45
  },
  navButton: {
    marginLeft: 30,
    fontWeight: 600,
    fontSize: 15,
    textTransform: 'none'
  }
}))

export default function App() {
  const routeResult = useRoutes(routes)
  const classes = useStyles()

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  const NavigationArray = () => {
    if (isTabletOrMobile) {
      return (
        <>
          <IconButton color='inherit' href='/who' className={classes.navIcon}>
            <FingerprintIcon />
          </IconButton>
          <IconButton
            color='inherit'
            href='/projects'
            className={classes.navIcon}
          >
            <WhatshotIcon />
          </IconButton>
          <IconButton
            color='inherit'
            href='/resume'
            className={classes.navIcon}
          >
            <DeveloperModeIcon />
          </IconButton>
        </>
      )
    } else {
      return (
        <>
          <Button color='inherit' href='/who' className={classes.navButton}>
            Who
          </Button>
          <Button
            color='inherit'
            href='/projects'
            className={classes.navButton}
          >
            Projects
          </Button>
          <Button color='inherit' href='/resume' className={classes.navButton}>
            Resume
          </Button>
        </>
      )
    }
  }

  return (
    <div
      style={{
        height: '100vh',
        position: 'relative',
        background:
          'url(' + require('./img/background.jpg') + ') center / cover'
      }}
      className={classes.appBarRoot}
    >
      <AppBar position='static' className={classes.appBar}>
        <Toolbar variant='dense'>
          <A href='/landing'>
            <img
              src={logo}
              alt='logo'
              href='/landing'
              style={{ height: 25, paddingRight: 20 }}
            />
          </A>
          <Button href='/landing' color='inherit' className={classes.name}>
            <Typography variant='h5'>Andrew Pittman</Typography>
          </Button>
          <div className={classes.space} />
          <NavigationArray />
        </Toolbar>
      </AppBar>
      {routeResult || <Landing />}
    </div>
  )
}
