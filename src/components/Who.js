import React from 'react'
import {
  Grid,
  Typography,
  IconButton,
  Card,
  CardActions,
  CardMedia,
  CardContent
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { A } from 'hookrouter'

import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import CallIcon from '@material-ui/icons/Call'
import YouTubeIcon from '@material-ui/icons/YouTube'
import GitHubIcon from '@material-ui/icons/GitHub'
import InstagramIcon from '@material-ui/icons/Instagram'

import me_leah from '../img/me_leah.jpg'

const useStyles = makeStyles(theme => ({
  mainGrid: {
    width: '100%',
    flexGrow: 1,
    margin: 0,
    padding: 30
  },
  cardRoot: {
    margin: theme.spacing(2),
    minHeight: 560,
    backgroundColor: 'rgba(12, 12, 12, 0.4)',
    borderRadius: 15,
    boxShadow: '0 4px 6px 2px rgba(235, 235, 235, .3)',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('lg')]: {
      maxWidth: '25vw'
    }
  },
  content: {
    color: 'white',
    fontSize: 14,
    marginBottom: 10
  },
  lastContent: {
    color: 'white',
    fontSize: 14
  },
  iconButton: {
    color: 'white',
    '&:hover, &.Mui-focusVisible': {
      background: 'linear-gradient(45deg, #02A1F9 30%, #27F19C 70%)'
    }
  },
  iconLinks: {
    fontSize: 33
  },
  space: {
    flexGrow: 1
  },
  media: {
    [theme.breakpoints.down('md')]: {
      height: 0,
      paddingTop: '156.25%',
      flexGrow: 1
    },
    [theme.breakpoints.up('lg')]: {
      flexGrow: 1,
      backgroundPosition: 'top'
    }
  },
  link1: {
    color: '#67C8FE',
    outline: 'none',
    textDecoration: 'none',
    '&:hover, &.Mui-focusVisible': {
      color: '#0E0F62',
      background: 'linear-gradient(45deg, #02A1F9 30%, #27F19C 70%)'
    }
  },
  link2: {
    color: '#8DF8CB',
    outline: 'none',
    textDecoration: 'none',
    '&:hover, &.Mui-focusVisible': {
      color: '#0E5411',
      background: 'linear-gradient(45deg, #02A1F9 30%, #27F19C 70%)'
    }
  }
}))

export default function Who() {
  const classes = useStyles()

  return (
    <Grid
      container
      justify='center'
      alignItems='center'
      spacing={4}
      className={classes.mainGrid}
    >
      <Grid item xs={12} md={9} lg={7} xl={5}>
        <Card className={classes.cardRoot}>
          <div className={classes.details}>
            <CardContent>
              <Typography variant='subtitle2' className={classes.content}>
                Thank you for stopping by my portolio! I’m a driven geospatial
                software engineer with several years of experience in web
                application development, map generation, GIS scripting, graphic
                design, advanced analytical algorithms for spatial data
                analysis, and geodatabase schema creation and implementation.
              </Typography>
              <Typography variant='subtitle2' className={classes.content}>
                I received my Bachelor's in Industrial Systems Engineering from
                Virginia Tech and will soon graduate with a Master’s in
                Geospatial Full Stack Software Development from the University
                of Wisconsin at Madison.
              </Typography>
              <Typography variant='subtitle2' className={classes.content}>
                My educational and professional experiences have allowed me to
                strengthen my geospatial development skillset, and I’m open to
                new opportunities to sharpen these skills while learning new
                ones.
              </Typography>
              <Typography variant='subtitle2' className={classes.content}>
                Check out my{' '}
                <A href='/resume' className={classes.link1}>
                  resume
                </A>{' '}
                and{' '}
                <A href='/projects' className={classes.link2}>
                  work
                </A>{' '}
                sections for more details about my background and experience.
              </Typography>
              <Typography variant='subtitle2' className={classes.lastContent}>
                Please feel free to reach out! I look forward to connecting with
                you.
              </Typography>
            </CardContent>
            <CardActions>
              <div className={classes.space} />
              <IconButton
                href='mailto:andrew@pittman.dev?cc=adp6729@gmail.com?Subject=Reaching%20out'
                className={classes.iconButton}
              >
                <EmailIcon className={classes.iconLinks} />
              </IconButton>
              <IconButton
                href='tel:+1703-350-3056'
                className={classes.iconButton}
                style={{ marginLeft: 4 }}
              >
                <CallIcon className={classes.iconLinks} />
              </IconButton>
              <IconButton
                href='https://github.com/dro0o/'
                className={classes.iconButton}
                style={{ marginLeft: 4 }}
              >
                <GitHubIcon className={classes.iconLinks} />
              </IconButton>
              <IconButton
                href='https://www.linkedin.com/in/andrew-pittman-a1618922/'
                className={classes.iconButton}
                style={{ marginLeft: 4 }}
              >
                <LinkedInIcon className={classes.iconLinks} />
              </IconButton>
              <IconButton
                href='https://www.instagram.com/upsidwnkingdom/'
                className={classes.iconButton}
                style={{ marginLeft: 4 }}
              >
                <InstagramIcon className={classes.iconLinks} />
              </IconButton>
              <div className={classes.space} />
            </CardActions>
          </div>
          <CardMedia
            className={classes.media}
            image={me_leah}
            title='With my wonderful wife'
          />
        </Card>
      </Grid>
    </Grid>
  )
}
