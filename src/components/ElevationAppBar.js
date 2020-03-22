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
  name: {
    textTransform: 'none',
    '&:hover, &.Mui-focusVisible': {
      background: 'linear-gradient(45deg, #02A1F9 30%, #27F19C 70%)'
    }
  },
  space: {
    flexGrow: 1
  },
  navIcon: {
    height: 45,
    '&:hover, &.Mui-focusVisible': {
      background: 'linear-gradient(45deg, #02A1F9 30%, #27F19C 70%)'
    }
  },
  navButton: {
    marginLeft: 30,
    fontWeight: 600,
    fontSize: 15,
    textTransform: 'none',
    '&:hover, &.Mui-focusVisible': {
      background: 'linear-gradient(45deg, #02A1F9 30%, #27F19C 70%)'
    }
  }
}))

function ElevationScroll(props) {
  const { children } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 20
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    style: {
      backgroundColor: trigger
        ? 'rgba(23, 23, 23, 0.8)'
        : 'rgba(23, 23, 23, 0.2)'
    }
  })
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired
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
        <AppBar>
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
