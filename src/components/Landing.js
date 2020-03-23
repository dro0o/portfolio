import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  mainGrid: {
    width: '100%',
    flexGrow: 1,
    margin: 0,
    padding: 30
  },
  title: {
    color: 'rgba(255, 255, 255, 1)',
    marginTop: '7vh',
    [theme.breakpoints.down('sm')]: {
      fontSize: 40
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 50
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 80
    },
    textShadow: ` -1px -1px 0 rgba(30, 30, 30, 0.75), 
        0    -1px 0 rgba(30, 30, 30, 0.75), 
        1px  -1px 0 rgba(30, 30, 30, 0.75), 
        1px   0   0 rgba(30, 30, 30, 0.75),
        1px   1px 0 rgba(30, 30, 30, 0.75),
        0     1px 0 rgba(30, 30, 30, 0.75),
        -1px  1px 0 rgba(30, 30, 30, 0.75),
        -1px  0   0 rgba(30, 30, 30, 0.75)`
  },
  subTitle: {
    fontSize: 25,
    marginTop: '3vh',
    [theme.breakpoints.down('sm')]: {
      fontSize: 20
    },
    textShadow: ` -1px -1px 0 rgba(130, 130, 130, 0.75), 
        0    -1px 0 rgba(130, 130, 130, 0.75), 
        1px  -1px 0 rgba(130, 130, 130, 0.75), 
        1px   0   0 rgba(130, 130, 130, 0.75),
        1px   1px 0 rgba(130, 130, 130, 0.75),
        0     1px 0 rgba(130, 130, 130, 0.75),
        -1px  1px 0 rgba(130, 130, 130, 0.75),
        -1px  0   0 rgba(130, 130, 130, 0.75)`
  }
}))

export default function Landing() {
  const classes = useStyles()

  return (
    <Grid
      container
      justify='center'
      alignItems='center'
      spacing={4}
      className={classes.mainGrid}
    >
      <Grid item xs={12}>
        <Typography variant='h1' align='center' className={classes.title}>
          Beyond Geospatial
        </Typography>
      </Grid>
      <Grid item xs={6} md={2}>
        <Typography
          variant='subtitle1'
          align='center'
          className={classes.subTitle}
        >
          Creativity
        </Typography>
      </Grid>
      <Grid item xs={6} md={2}>
        <Typography
          variant='subtitle1'
          align='center'
          className={classes.subTitle}
        >
          Integrity
        </Typography>
      </Grid>
      <Grid item xs={12} md={3}>
        <Typography
          variant='subtitle1'
          align='center'
          className={classes.subTitle}
        >
          Engineering
        </Typography>
      </Grid>
      <Grid item xs={6} md={2}>
        <Typography
          variant='subtitle1'
          align='center'
          className={classes.subTitle}
        >
          Analytics
        </Typography>
      </Grid>
      <Grid item xs={6} md={2}>
        <Typography
          variant='subtitle1'
          align='center'
          className={classes.subTitle}
        >
          Service
        </Typography>
      </Grid>
    </Grid>
  )
}
