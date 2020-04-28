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
  Avatar,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import NearMeIcon from '@material-ui/icons/NearMe'
import GitHubIcon from '@material-ui/icons/GitHub'
import FindInPageIcon from '@material-ui/icons/FindInPage'
import YouTubeIcon from '@material-ui/icons/YouTube'

import vidGif from '../tools/vidGif'

// logos
import logo from '../img/dp_brand.png'
import react from '../img/react.png'
import mapbox from '../img/mapbox.png'
import mui from '../img/mui.png'
import d3 from '../img/d3.png'
import bootstrap from '../img/bootstrap.png'
import html5 from '../img/html5.png'
import css3 from '../img/css3.png'
import esri from '../img/esri.png'
import indesign from '../img/indesign.png'
import photoshop from '../img/photoshop.png'
import green_energy from '../img/green_energy3.png'
import data_science from '../img/data_science_logo.png'

// 'Gifs'
import afcpGifVid from '../vid/africanCorruptionGifVid.mp4'
import crooGifVid from '../vid/crooGifVid.mp4'
import cycloGifVid from '../vid/cyclocrossGifVid.mp4'
import femGifVid from '../vid/femGeekGifVid.mp4'
import fifaGifVid from '../vid/fifaGifVid.mp4'
import glacierGifVid from '../vid/glacierSocialGifVid.mp4'
import mjGifVid from '../vid/medicalMarijuanaGifVid.mp4'
import renewGifVid from '../vid/renewablesGifVid.mp4'
import spatialGifVid from '../vid/spatialAnalysisGifVid.mp4'

// Posters
import glacierSocialPoster from '../img/poster/glacierSocialPoster.png'
import spatialPoster from '../img/poster/spatialAnalysisPoster.png'
import afcpPoster from '../img/poster/AfricanCorruption.png'
import fifaPoster from '../img/poster/FIFAcrop.png'
import femPoster from '../img/poster/LongformInfo.png'
import cycloPoster from '../img/poster/ShadedRelief.png'
import renewPoster from '../img/poster/RenewableEnergy.png'

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    width: '100%',
    flexGrow: 1,
    margin: 0,
    padding: 30,
  },
  cardRoot: {
    margin: theme.spacing(2),
    maxWidth: '80vw',
    backgroundColor: 'rgba(12, 12, 12, 0.4)',
    borderRadius: 15,
    boxShadow: '0 4px 6px 2px rgba(235, 235, 235, .3)',
  },
  cardHeaderText: {
    marginLeft: 30,
    fontWeight: 400,
    fontSize: 15,
  },
  iconButton: {
    color: 'white',
    '&:hover, &.Mui-focusVisible': {
      background: 'linear-gradient(45deg, #02A1F9 30%, #27F19C 70%)',
    },
  },
  iconLinks: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 26,
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 33,
    },
  },
  avatar: {
    [theme.breakpoints.down('sm')]: {
      height: 26,
      width: 26,
    },
    [theme.breakpoints.up('sm')]: {
      height: 33,
      width: 33,
    },
  },
  space: {
    flexGrow: 1,
  },
  media: {
    width: '100%',
    height: '100%',
  },
}))

export default function Projects() {
  const classes = useStyles()
  return (
    <Grid container justify='center' spacing={0} className={classes.mainGrid}>
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
            title='Spatial Analysis Web Application'
            titleTypographyProps={{
              align: 'right',
              variant: 'h6',
              color: 'textPrimary',
            }}
          />
          <CardMedia
            title='Spatial Analysis Web Application'
            component={() =>
              vidGif({ src: spatialGifVid, poster: spatialPoster })
            }
          />
          <CardContent>
            <Typography variant='subtitle2' style={{ color: 'white' }}>
              Interactive web application exploring geographic correlation
              between well Nitrate levels and normalized cancer rates in the
              state of Wisconsin.
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton
              href='https://pittman.dev/spatialanalysis/'
              className={classes.iconButton}
              target='_blank'
            >
              <NearMeIcon className={classes.iconLinks} />
            </IconButton>
            <IconButton
              href='https://github.com/dro0o/777p1'
              className={classes.iconButton}
              style={{ marginLeft: 2 }}
              target='_blank'
            >
              <GitHubIcon className={classes.iconLinks} />
            </IconButton>
            <IconButton
              href='https://youtu.be/fQldeX4Gc7E'
              className={classes.iconButton}
              style={{ marginLeft: 2 }}
              target='_blank'
            >
              <YouTubeIcon className={classes.iconLinks} />
            </IconButton>
            <div className={classes.space} />
            <Avatar
              alt='React'
              variant='square'
              src={react}
              className={classes.avatar}
            />
            <Avatar
              alt='Mapbox GL'
              variant='square'
              src={mapbox}
              className={classes.avatar}
            />
            <Avatar
              alt='Material UI'
              variant='square'
              src={mui}
              className={classes.avatar}
            />
            <Avatar
              alt='htlm5'
              variant='square'
              src={html5}
              className={classes.avatar}
              style={{ marginRight: 5 }}
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
            title='African Corruption & Wealth'
            titleTypographyProps={{
              align: 'right',
              variant: 'h6',
              color: 'textPrimary',
            }}
          />
          <CardMedia
            title='African Corruption & Wealth'
            component={() => vidGif({ src: afcpGifVid, poster: afcpPoster })}
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
            <Avatar
              alt='D3'
              variant='square'
              src={d3}
              className={classes.avatar}
            />
            <Avatar
              alt='htlm5'
              variant='square'
              src={html5}
              className={classes.avatar}
            />
            <Avatar
              alt='css3'
              variant='square'
              src={css3}
              className={classes.avatar}
            />
            <Avatar
              alt='bootstrap'
              variant='square'
              src={bootstrap}
              style={{ marginLeft: 10, marginRight: 10 }}
              className={classes.avatar}
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
              color: 'textPrimary',
            }}
          />
          <CardMedia
            title='FIFA Success & Governance'
            component={() => vidGif({ src: fifaGifVid, poster: fifaPoster })}
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
            <Avatar
              alt='D3'
              variant='square'
              src={d3}
              className={classes.avatar}
            />
            <Avatar
              alt='html5'
              variant='square'
              src={html5}
              className={classes.avatar}
            />
            <Avatar
              alt='css3'
              variant='square'
              src={css3}
              className={classes.avatar}
            />
            <Avatar
              alt='bootstrap'
              variant='square'
              src={bootstrap}
              style={{ marginLeft: 10, marginRight: 10 }}
              className={classes.avatar}
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
              color: 'textPrimary',
            }}
          />
          <CardMedia
            title='Women in Technology Infographic'
            component={() => vidGif({ src: femGifVid, poster: femPoster })}
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
            <Avatar
              alt='esri'
              variant='square'
              src={esri}
              className={classes.avatar}
            />
            <Avatar
              alt='indesign'
              variant='square'
              src={indesign}
              className={classes.avatar}
            />
            <Avatar
              alt='photoshop'
              variant='square'
              src={photoshop}
              style={{ marginLeft: 10, marginRight: 10 }}
              className={classes.avatar}
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
              color: 'textPrimary',
            }}
          />
          <CardMedia
            title='Cyclocross Shaded Relief'
            component={() => vidGif({ src: cycloGifVid, poster: cycloPoster })}
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
            <Avatar
              alt='esri'
              variant='square'
              src={esri}
              className={classes.avatar}
            />
            <Avatar
              alt='indesign'
              variant='square'
              src={indesign}
              className={classes.avatar}
            />
            <Avatar
              alt='photoshop'
              variant='square'
              src={photoshop}
              style={{ marginLeft: 10, marginRight: 10 }}
              className={classes.avatar}
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
              color: 'textPrimary',
            }}
          />
          <CardMedia
            title='Third World Renewable Energy Research'
            component={() => vidGif({ src: renewGifVid, poster: renewPoster })}
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
            <Avatar
              alt='green_energy'
              src={green_energy}
              className={classes.avatar}
            />
            <Avatar
              alt='data_science'
              src={data_science}
              className={classes.avatar}
            />
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  )
}
