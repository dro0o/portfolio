import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

// .banner-text{
//   background-color: rgba(0, 0, 0, 0);
//   text-align: center;
//   justify-content: center;
//   width: 90vw;
//   margin: auto;
//   border-radius: 10px;
//   text-shadow:
//     -1px -1px 0 rgba(139, 139, 139, 0.75),
//      0   -1px 0 rgba(139, 139, 139, 0.75),
//      1px -1px 0 rgba(139, 139, 139, 0.75),
//      1px  0   0 rgba(139, 139, 139, 0.75),
//      1px  1px 0 rgba(139, 139, 139, 0.75),
//      0    1px 0 rgba(139, 139, 139, 0.75),
//     -1px  1px 0 rgba(139, 139, 139, 0.75),
//     -1px  0   0 rgba(139, 139, 139, 0.75);
// }

// .banner-text h1{
//   font-size: 4em;
//   font-weight: bold;
//   font-family: "Merienda", cursive, sans-serif;
//   color: rgba(252, 252, 252, 0.705);
//   /* text-shadow:
//     -1px -1px 0 rgba(139, 139, 139, 0.75),
//      0   -1px 0 rgba(139, 139, 139, 0.75),
//      1px -1px 0 rgba(139, 139, 139, 0.75),
//      1px  0   0 rgba(139, 139, 139, 0.75),
//      1px  1px 0 rgba(139, 139, 139, 0.75),
//      0    1px 0 rgba(139, 139, 139, 0.75),
//     -1px  1px 0 rgba(139, 139, 139, 0.75),
//     -1px  0   0 rgba(139, 139, 139, 0.75); */
// }
// awesome blue:
// rgba(2, 161, 249, 1)
// awesome green:
// rgba(39, 241, 156, 1)

const useStyles = makeStyles(theme => ({
  mainGrid: {
    width: '100%',
    flexGrow: 1,
    margin: 0,
    padding: 30
  },
  appBar: {
    backgroundColor: 'rgba(23, 23, 23, 0.2)'
  },
  title: {
    color: 'rgba(255, 255, 255, 1)',
    marginTop: '7vh',
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
    // <div style={{ width: '100%', margin: 'auto', paddingTop: '15vh' }}>
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
    // </div>
  )
}
