import React from 'react'
import { makeStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  CssBaseline,
  IconButton,
  useScrollTrigger
} from '@material-ui/core'
import FingerprintIcon from '@material-ui/icons/Fingerprint'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode'
import { A } from 'hookrouter'

import { useMediaQuery } from 'react-responsive'

import logo from '../img/adp_brand.png'

const useStyles = makeStyles(theme => ({
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

function ElevationScroll(props) {
  const { children, window } = props

  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  })
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
}

export default function ElevateAppBar(props) {
  const classes = useStyles()

  // Vary the header bar links based on device size
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
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className={classes.appBar}>
          <Toolbar variant='dense'>
            <A href='/'>
              <img
                src={logo}
                alt='logo'
                style={{ height: 25, paddingRight: 20 }}
              />
            </A>
            <Button href='/' color='inherit' className={classes.name}>
              <Typography variant='h5'>Andrew Pittman</Typography>
            </Button>
            <div className={classes.space} />
            <NavigationArray />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  )
}
