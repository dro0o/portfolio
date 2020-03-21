import React from 'react'
import {
  Grid,
  Card,
  CardActionArea,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Avatar
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import NearMeIcon from '@material-ui/icons/NearMe'
import GitHubIcon from '@material-ui/icons/GitHub'
import FindInPageIcon from '@material-ui/icons/FindInPage'
import YouTubeIcon from '@material-ui/icons/YouTube'

import logo from '../img/dp_brand.png'
import afcp from '../img/AfricanCorruption.png'
import fifa from '../img/FIFAcrop.png'
import women from '../img/LongformInfo.png'
import relief from '../img/ShadedRelief.png'
import energy from '../img/RenewableEnergy.png'
import d3 from '../img/d3.png'
import bootstrap from '../img/bootstrap.png'
import html5 from '../img/html5.png'
import css3 from '../img/css3.png'
import esri from '../img/esri.png'
import indesign from '../img/indesign.png'
import photoshop from '../img/photoshop.png'
import green_energy from '../img/green_energy3.png'
import data_science from '../img/data_science_logo.png'

const useStyles = makeStyles(theme => ({
  mainGrid: {
    width: '100%',
    flexGrow: 1,
    margin: 0,
    padding: 30
  },
  cardRoot: {
    margin: theme.spacing(2),
    maxWidth: '80vw',
    backgroundColor: 'rgba(12, 12, 12, 0.4)',
    borderRadius: 15,
    boxShadow: '0 4px 6px 2px rgba(235, 235, 235, .3)'
  },
  cardHeaderText: {
    marginLeft: 30,
    fontWeight: 400,
    fontSize: 15
  },
  media: {
    height: 0,
    paddingTop: '56.25%'
  },
  iconButton: {
    color: 'white',
    // fontSize: 35,
    '&:hover, &.Mui-focusVisible': {
      background: 'linear-gradient(45deg, #02A1F9 30%, #27F19C 70%)'
    }
  },
  iconLinks: {
    fontSize: 33
  },
  space: {
    flexGrow: 1
  }
}))

export default function Projects() {
  const classes = useStyles()
  return (
    <Grid container justify='center' spacing={4} className={classes.mainGrid}>
      <Grid item xs={12} md={6}>
        <Card className={classes.cardRoot}>
          <CardHeader
            avatar={
              <img
                src={logo}
                alt='logo'
                style={{ height: 28, paddingLeft: 10 }}
              />
            }
            title='African Corruption & Wealth'
            titleTypographyProps={{
              align: 'right',
              variant: 'h6',
              color: 'textPrimary'
            }}
          />
          <CardMedia
            className={classes.media}
            image={afcp}
            title='African Corruption & Wealth'
          />
          <CardContent>
            <Typography variant='subtitle2' style={{ color: 'white' }}>
              Interactive web application exploring the geographic correlation
              between corruption and wealth in Africa.
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton
              href='https://adp6729.github.io/d3-coordinated-viz/'
              className={classes.iconButton}
            >
              <NearMeIcon className={classes.iconLinks} />
            </IconButton>
            <IconButton
              href='https://github.com/adp6729/d3-coordinated-viz'
              className={classes.iconButton}
              style={{ marginLeft: 2 }}
            >
              <GitHubIcon className={classes.iconLinks} />
            </IconButton>
            <div className={classes.space} />
            <Avatar alt='D3' variant='square' src={d3} />
            <Avatar alt='htlm5' variant='square' src={html5} />
            <Avatar alt='css3' variant='square' src={css3} />
            <Avatar
              alt='bootstrap'
              variant='square'
              src={bootstrap}
              style={{ marginLeft: 15, marginRight: 10 }}
            />
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card className={classes.cardRoot}>
          <CardHeader
            avatar={
              <img
                src={logo}
                alt='logo'
                style={{ height: 28, paddingLeft: 10 }}
              />
            }
            title='FIFA Success & Governance'
            titleTypographyProps={{
              align: 'right',
              variant: 'h6',
              color: 'textPrimary'
            }}
          />
          <CardMedia
            className={classes.media}
            image={fifa}
            title='FIFA Success & Governance'
          />
          <CardContent>
            <Typography variant='subtitle2' style={{ color: 'white' }}>
              Interactive web application exploring the geographic correlation
              between FIFA World Cup success and various corruption metrics.
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton
              href='https://adp6729.github.io/fifaCorruption/'
              className={classes.iconButton}
            >
              <NearMeIcon className={classes.iconLinks} />
            </IconButton>
            <IconButton
              href='https://github.com/adp6729/fifaCorruption'
              className={classes.iconButton}
              style={{ marginLeft: 2 }}
            >
              <GitHubIcon className={classes.iconLinks} />
            </IconButton>
            <div className={classes.space} />
            <Avatar alt='D3' variant='square' src={d3} />
            <Avatar alt='html5' variant='square' src={html5} />
            <Avatar alt='css3' variant='square' src={css3} />
            <Avatar
              alt='bootstrap'
              variant='square'
              src={bootstrap}
              style={{ marginLeft: 15, marginRight: 10 }}
            />
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card className={classes.cardRoot}>
          <CardHeader
            avatar={
              <img
                src={logo}
                alt='logo'
                style={{ height: 28, paddingLeft: 10 }}
              />
            }
            title='Women in Technology Infographic'
            titleTypographyProps={{
              align: 'right',
              variant: 'h6',
              color: 'textPrimary'
            }}
          />
          <CardMedia
            className={classes.media}
            image={women}
            title='Women in Technology Infographic'
          />
          <CardContent>
            <Typography variant='subtitle2' style={{ color: 'white' }}>
              Storyboard infographic exploring which American states encourage
              women to engage in STEM positions.
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton
              href='https://www.dropbox.com/s/msiewayzo506pom/Feminine_Geek_is_Technically_Chic.pdf?dl=0'
              className={classes.iconButton}
            >
              <FindInPageIcon className={classes.iconLinks} />
            </IconButton>
            <div className={classes.space} />
            <Avatar alt='esri' variant='square' src={esri} />
            <Avatar alt='indesign' variant='square' src={indesign} />
            <Avatar
              alt='photoshop'
              variant='square'
              src={photoshop}
              style={{ marginLeft: 15, marginRight: 10 }}
            />
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card className={classes.cardRoot}>
          <CardHeader
            avatar={
              <img
                src={logo}
                alt='logo'
                style={{ height: 28, paddingLeft: 10 }}
              />
            }
            title='Cyclocross Shaded Relief'
            titleTypographyProps={{
              align: 'right',
              variant: 'h6',
              color: 'textPrimary'
            }}
          />
          <CardMedia
            className={classes.media}
            image={relief}
            title='Cyclocross Shaded Relief'
          />
          <CardContent>
            <Typography variant='subtitle2' style={{ color: 'white' }}>
              Static infographic with shaded relief showing cyclocross race
              across the southern tip of Africa.
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton
              href='https://www.dropbox.com/s/v54l1kol6r4eclu/South_African_Cyclocross.pdf?dl=0'
              className={classes.iconButton}
            >
              <FindInPageIcon className={classes.iconLinks} />
            </IconButton>
            <div className={classes.space} />
            <Avatar alt='esri' variant='square' src={esri} />
            <Avatar alt='indesign' variant='square' src={indesign} />
            <Avatar
              alt='photoshop'
              variant='square'
              src={photoshop}
              style={{ marginLeft: 15, marginRight: 10 }}
            />
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card className={classes.cardRoot}>
          <CardHeader
            avatar={
              <img
                src={logo}
                alt='logo'
                style={{ height: 28, paddingLeft: 10 }}
              />
            }
            title='Third World Renewable Energy Research'
            titleTypographyProps={{
              align: 'right',
              variant: 'h6',
              color: 'textPrimary'
            }}
          />
          <CardMedia
            className={classes.media}
            image={energy}
            title='Third World Renewable Energy Research'
          />
          <CardContent>
            <Typography variant='subtitle2' style={{ color: 'white' }}>
              Independent research paper focusing on renewable energy
              development and practice in the third world.
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton
              href='https://www.dropbox.com/home/Public?preview=IS+UAP+4974+Final+Paper+Andrew+Pittman.pdf'
              className={classes.iconButton}
            >
              <FindInPageIcon className={classes.iconLinks} />
            </IconButton>
            <div className={classes.space} />
            <Avatar alt='green_energy' src={green_energy} />
            <Avatar alt='data_science' src={data_science} />
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  )
}
