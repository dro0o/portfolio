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
  IconButton
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import NearMeIcon from '@material-ui/icons/NearMe'
import GitHubIcon from '@material-ui/icons/GitHub'
import FindInPageIcon from '@material-ui/icons/FindInPage'
import YouTubeIcon from '@material-ui/icons/YouTube'

import logo from '../img/adp.png'
import afcp from '../img/AfricanCorruption.png'

const useStyles = makeStyles(theme => ({
  mainGrid: {
    width: '100%'
  },
  cardRoot: {
    margin: theme.spacing(3),
    // marginLeft: theme.spacing(3),
    // marginTop: theme.spacing(3),
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
  iconLinks: {
    color: 'white',
    fontSize: 65
  }
}))

export default function Projects() {
  const classes = useStyles()
  return (
    <Grid container spacing={2} className={classes.mainGrid}>
      <Grid item xs={12} sm={9} md={6}>
        <Card className={classes.cardRoot}>
          <CardHeader
            avatar={
              <img
                src={logo}
                alt='logo'
                style={{ height: 20, paddingRight: 20 }}
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
            <Typography style={{ color: 'white' }}>
              Interactive web application using D3, Bootstrap, HTML5 and CSS3
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton href='https://adp6729.github.io/d3-coordinated-viz/'>
              <NearMeIcon className={classes.iconLinks} />
            </IconButton>
            <IconButton href='https://github.com/adp6729/d3-coordinated-viz'>
              <GitHubIcon className={classes.iconLinks} />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={9} md={6}>
        <Card className={classes.cardRoot}>
          <CardHeader
            avatar={
              <img
                src={logo}
                alt='logo'
                style={{ height: 20, paddingRight: 20 }}
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
            <Typography style={{ color: 'white' }}>
              Interactive web application using D3, Bootstrap, HTML5 and CSS3
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton href='https://adp6729.github.io/d3-coordinated-viz/'>
              <NearMeIcon className={classes.iconLinks} />
            </IconButton>
            <IconButton href='https://github.com/adp6729/d3-coordinated-viz'>
              <GitHubIcon className={classes.iconLinks} />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
    </Grid>

    // <div>
    //   <Grid className='projects-grid'>
    //     <Cell col={4} style={{ margin: 'auto' }}>
    //       <Card shadow={5} style={{ midWidth: '450', margin: 'auto' }}>
    //         <CardTitle
    //           style={{
    //             color: '#fff',
    //             height: '200px',
    //             background:
    //               'url(' +
    //               require('../img/AfricanCorruption.png') +
    //               ') center / cover'
    //           }}
    //         >
    //           African Corruption & Wealth
    //         </CardTitle>
    //         <CardText>
    //           Interactive web application using D3, Bootstrap, HTML5 and CSS3
    //         </CardText>
    //         <CardActions border>
    //           <Button colored>
    //             <a
    //               target='_blank'
    //               rel='noopener noreferrer'
    //               className='live-links'
    //               href='https://adp6729.github.io/d3-coordinated-viz/'
    //             >
    //               Live
    //             </a>
    //           </Button>
    //           <Button colored>
    //             <a
    //               target='_blank'
    //               rel='noopener noreferrer'
    //               className='git-links'
    //               href='https://github.com/adp6729/d3-coordinated-viz'
    //             >
    //               Github
    //             </a>
    //           </Button>
    //         </CardActions>
    //         <CardMenu style={{ color: '#fff' }}>
    //           <IconButton name='share' />
    //         </CardMenu>
    //       </Card>
    //     </Cell>
    //     <Cell col={4}>
    //       <Card shadow={5} style={{ midWidth: '450', margin: 'auto' }}>
    //         <CardTitle
    //           style={{
    //             color: '#fff',
    //             fontWeight: 'bold',
    //             height: '200px',
    //             background:
    //               'url(' + require('../img/FIFAcrop.png') + ') center / cover'
    //           }}
    //         >
    //           FIFA Success & Governance
    //         </CardTitle>
    //         <CardText>
    //           Interactive web application using D3, Bootstrap, HTML5 and CSS3
    //         </CardText>
    //         <CardActions border>
    //           <Button colored>
    //             <a
    //               target='_blank'
    //               rel='noopener noreferrer'
    //               className='live-links'
    //               href='https://adp6729.github.io/fifaCorruption/'
    //             >
    //               Live
    //             </a>
    //           </Button>
    //           <Button colored>
    //             <a
    //               target='_blank'
    //               rel='noopener noreferrer'
    //               className='git-links'
    //               href='https://github.com/adp6729/fifaCorruption'
    //             >
    //               Github
    //             </a>
    //           </Button>
    //         </CardActions>
    //         <CardMenu style={{ color: '#fff' }}>
    //           <IconButton name='share' />
    //         </CardMenu>
    //       </Card>
    //     </Cell>
    //     <Cell col={4}>
    //       <Card shadow={5} style={{ midWidth: '450', margin: 'auto' }}>
    //         <CardTitle
    //           style={{
    //             color: 'black',
    //             fontWeight: 'bold',
    //             height: '200px',
    //             background:
    //               'url(' +
    //               require('../img/LongformInfo.png') +
    //               ') center / cover'
    //           }}
    //         >
    //           Women in Technology Infographic
    //         </CardTitle>
    //         <CardText>
    //           Static infographic created using ESRI ArcMap and Adobe InDesign
    //         </CardText>
    //         <CardActions border>
    //           <Button colored>
    //             <a
    //               target='_blank'
    //               rel='noopener noreferrer'
    //               className='live-links'
    //               href='https://www.dropbox.com/s/msiewayzo506pom/Feminine_Geek_is_Technically_Chic.pdf?dl=0'
    //             >
    //               Preview
    //             </a>
    //           </Button>
    //         </CardActions>
    //         <CardMenu style={{ color: 'black' }}>
    //           <IconButton name='share' />
    //         </CardMenu>
    //       </Card>
    //     </Cell>
    //     <Cell col={4}>
    //       <Card shadow={5} style={{ midWidth: '450', margin: 'auto' }}>
    //         <CardTitle
    //           style={{
    //             color: '#fff',
    //             fontWeight: 'bold',
    //             height: '200px',
    //             background:
    //               'url(' +
    //               require('../img/ShadedRelief.png') +
    //               ') center / cover'
    //           }}
    //         >
    //           Cyclocross Shaded Relief
    //         </CardTitle>
    //         <CardText>
    //           Static infographic created using ESRI ArcMap, Adobe Photoshop and
    //           Adobe InDesign
    //         </CardText>
    //         <CardActions border>
    //           <Button colored>
    //             <a
    //               target='_blank'
    //               rel='noopener noreferrer'
    //               className='live-links'
    //               href='https://www.dropbox.com/s/v54l1kol6r4eclu/South_African_Cyclocross.pdf?dl=0'
    //             >
    //               Preview
    //             </a>
    //           </Button>
    //         </CardActions>
    //         <CardMenu style={{ color: '#fff' }}>
    //           <IconButton name='share' />
    //         </CardMenu>
    //       </Card>
    //     </Cell>
    //     <Cell col={4}>
    //       <Card shadow={5} style={{ midWidth: '450', margin: 'auto' }}>
    //         <CardTitle
    //           style={{
    //             color: 'black',
    //             fontWeight: 'bold',
    //             height: '200px',
    //             background:
    //               'url(' +
    //               require('../img/RenewableEnergy.png') +
    //               ') center / cover'
    //           }}
    //         >
    //           Third World Renewable Energy Research
    //         </CardTitle>
    //         <CardText>
    //           Independent research paper focussing on renewable energy options
    //           in the third world
    //         </CardText>
    //         <CardActions border>
    //           <Button colored>
    //             <a
    //               target='_blank'
    //               rel='noopener noreferrer'
    //               className='live-links'
    //               href='https://www.dropbox.com/home/Public?preview=IS+UAP+4974+Final+Paper+Andrew+Pittman.pdf'
    //             >
    //               Preview
    //             </a>
    //           </Button>
    //         </CardActions>
    //         <CardMenu style={{ color: 'black' }}>
    //           <IconButton name='share' />
    //         </CardMenu>
    //       </Card>
    //     </Cell>
    //   </Grid>
    // </div>
  )
}
