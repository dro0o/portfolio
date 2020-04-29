import React from 'react'
import {
  Grid,
  Card,
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
import DescriptionIcon from '@material-ui/icons/Description'
import YouTubeIcon from '@material-ui/icons/YouTube'

import vidGif from '../tools/vidGif'

// logos
import logo from '../img/brand/dp_brand.png'
import rn from '../img/tech/react_native.png'
import firestore from '../img/tech/firestore.png'
import mongo from '../img/tech/mongodb.png'
import express from '../img/tech/express.png'
import react from '../img/tech/react.png'
import mapbox from '../img/tech/mapbox.png'
import mui from '../img/tech/mui.png'
import d3 from '../img/tech/d3.png'
import bootstrap from '../img/tech/bootstrap.png'
import html5 from '../img/tech/html5.png'
import css3 from '../img/tech/css3.png'
import esri from '../img/tech/esri.png'
import indesign from '../img/tech/indesign.png'
import photoshop from '../img/tech/photoshop.png'
import green_energy from '../img/tech/green_energy3.png'
import data_science from '../img/tech/data_science_logo.png'
import postgres from '../img/tech/postgresql.png'

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
import crooPoster from '../img/poster/crooPoster.png'
import glacierSocialPoster from '../img/poster/glacierSocialPoster.png'
import spatialPoster from '../img/poster/spatialAnalysisPoster.png'
import afcpPoster from '../img/poster/AfricanCorruption.png'
import fifaPoster from '../img/poster/FIFAcrop.png'
import femPoster from '../img/poster/LongformInfo.png'
import cycloPoster from '../img/poster/ShadedRelief.png'
import renewPoster from '../img/poster/RenewableEnergy.png'
import mjPoster from '../img/poster/mjPoster.png'

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
    [theme.breakpoints.down('sm')]: {
      padding: 6,
    },
    [theme.breakpoints.up('sm')]: {
      padding: 10,
    },
  },
  iconLinks: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 26,
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 28,
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
            title='Croo Mobile'
            titleTypographyProps={{
              align: 'right',
              variant: 'h6',
              color: 'textPrimary',
            }}
          />
          <CardMedia
            title='Croo Mobile'
            component={() => vidGif({ src: crooGifVid, poster: crooPoster })}
          />
          <CardContent>
            <Typography variant='subtitle2' style={{ color: 'white' }}>
              Mobile application that makes location sharing a simple and social
              experience. Users can share their location on a per availability
              basis
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton
              href='https://youtu.be/-VeAOsaZGYw'
              className={classes.iconButton}
              style={{ marginLeft: 2 }}
              target='_blank'
            >
              <YouTubeIcon className={classes.iconLinks} />
            </IconButton>
            <div className={classes.space} />
            <Avatar
              alt='React Native'
              variant='square'
              src={rn}
              className={classes.avatar}
            />
            <Avatar
              alt='Mapbox GL'
              variant='square'
              src={mapbox}
              className={classes.avatar}
            />
            <Avatar
              alt='Firestore'
              variant='square'
              src={firestore}
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
            title='Glacier Social Mobile'
            titleTypographyProps={{
              align: 'right',
              variant: 'h6',
              color: 'textPrimary',
            }}
          />
          <CardMedia
            title='Glacier Social Mobile'
            component={() =>
              vidGif({ src: glacierGifVid, poster: glacierSocialPoster })
            }
          />
          <CardContent>
            <Typography variant='subtitle2' style={{ color: 'white' }}>
              Mobile application designed to enable greater user engagement with
              Glacier National Park via real time trail blazing usig the user's
              location.
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton
              href='https://github.com/dro0o/777p2'
              className={classes.iconButton}
              target='_blank'
            >
              <GitHubIcon className={classes.iconLinks} />
            </IconButton>
            <IconButton
              href='https://youtu.be/JSRohgUvyhY'
              className={classes.iconButton}
              target='_blank'
              style={{ marginLeft: -2 }}
            >
              <YouTubeIcon className={classes.iconLinks} />
            </IconButton>
            <IconButton
              href='https://github.com/dro0o/777p2/blob/master/media/777Project2_FinalReport_AndrewPittman.pdf'
              className={classes.iconButton}
              target='_blank'
              style={{ marginLeft: -2 }}
            >
              <DescriptionIcon className={classes.iconLinks} />
            </IconButton>
            <div className={classes.space} />
            <Avatar
              alt='React Native'
              variant='square'
              src={rn}
              className={classes.avatar}
            />
            <Avatar
              alt='Mongo DB'
              variant='square'
              src={mongo}
              className={classes.avatar}
            />
            <Avatar
              alt='Express'
              variant='square'
              src={express}
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
            title='Nitrate & Cancer Spatial Analysis'
            titleTypographyProps={{
              align: 'right',
              variant: 'h6',
              color: 'textPrimary',
            }}
          />
          <CardMedia
            title='Nitrate & Cancer Spatial Analysis'
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
              target='_blank'
              style={{ marginLeft: -2 }}
            >
              <GitHubIcon className={classes.iconLinks} />
            </IconButton>
            <IconButton
              href='https://youtu.be/fQldeX4Gc7E'
              className={classes.iconButton}
              target='_blank'
              style={{ marginLeft: -2 }}
            >
              <YouTubeIcon className={classes.iconLinks} />
            </IconButton>
            <IconButton
              href='https://github.com/dro0o/777p1/blob/master/media/777Project1_FinalReport_AndrewPittman.pdf'
              className={classes.iconButton}
              target='_blank'
              style={{ marginLeft: -2 }}
            >
              <DescriptionIcon className={classes.iconLinks} />
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
              target='_blank'
            >
              <NearMeIcon className={classes.iconLinks} />
            </IconButton>
            <IconButton
              href='https://github.com/adp6729/d3-coordinated-viz'
              className={classes.iconButton}
              style={{ marginLeft: -2 }}
              target='_blank'
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
              target='_blank'
            >
              <NearMeIcon className={classes.iconLinks} />
            </IconButton>
            <IconButton
              href='https://github.com/adp6729/fifaCorruption'
              className={classes.iconButton}
              style={{ marginLeft: -2 }}
              target='_blank'
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
              href='https://www.icloud.com/iclouddrive/00M0uTHDqWSncYeRAojhiYdfQ#FeminineGeekIsTechnicallyChic'
              className={classes.iconButton}
              target='_blank'
            >
              <DescriptionIcon className={classes.iconLinks} />
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
              href='https://www.icloud.com/iclouddrive/0ravphL3SnhyVSVgpCJcToTcw#TheSouthAfricanCyclocross'
              className={classes.iconButton}
              target='_blank'
            >
              <DescriptionIcon className={classes.iconLinks} />
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
            title='Medical Marijuana Geodatabase Design'
            titleTypographyProps={{
              align: 'right',
              variant: 'h6',
              color: 'textPrimary',
            }}
          />
          <CardMedia
            title='Medical Marijuana Geodatabase Design'
            component={() => vidGif({ src: mjGifVid, poster: mjPoster })}
          />
          <CardContent>
            <Typography variant='subtitle2' style={{ color: 'white' }}>
              Group research paper focusing on design and development of a
              geodatabase and geoqueries that will assist the North Dakotan
              state government correctly permit medical marijuana growers and
              distributors.
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton
              href='https://www.icloud.com/iclouddrive/0L_xi7Wus35S2DycBfhxqTRcg#MedicalMarijuanaRegulatoryDatabase%5FGEO574%5FFinalProjectReport'
              className={classes.iconButton}
              target='_blank'
            >
              <DescriptionIcon className={classes.iconLinks} />
            </IconButton>
            <div className={classes.space} />
            <Avatar
              alt='postgres'
              src={postgres}
              variant='square'
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
              href='https://www.icloud.com/iclouddrive/0Yvf8MKtgDgLLWPdmh4dJRKNA#IS_UAP_4974_Final_Paper_Andrew_Pittman'
              className={classes.iconButton}
              target='_blank'
            >
              <DescriptionIcon className={classes.iconLinks} />
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
