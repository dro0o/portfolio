import React from 'react'
import {
  Grid,
  Typography,
  Avatar,
  Card,
  CardContent,
  Link
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import uw from '../img/resume/uw.png'
import vt from '../img/resume/vt.png'
import bluechip from '../img/resume/bluechip.png'
import quev from '../img/resume/qlogo.jpeg'
import booz from '../img/resume/bah.jpeg'
import saic from '../img/resume/saic.png'

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    width: '100%',
    flexGrow: 1,
    margin: 0,
    padding: 30,
  },
  cardRoot: {
    minHeight: 560,
    backgroundColor: 'rgba(12, 12, 12, 0.6)',
    borderRadius: 15,
    boxShadow: '0 4px 6px 2px rgba(235, 235, 235, .3)',
  },
  innerGrid: {
    marginBottom: 15,
  },
  title: {
    fontSize: 26,
    marginBottom: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: 600,
    marginLeft: 10,
    marginBottom: 5,
  },
  content1: {
    marginLeft: 20,
  },
  avatar: {
    height: 60,
    width: 60,
  },
  list: {
    fontFamily: '"Roboto", sans-serif',
  },
}))

export default function Resume() {
  const classes = useStyles()

  return (
    <Grid
      container
      justify='center'
      alignItems='center'
      spacing={0}
      className={classes.mainGrid}
    >
      <Grid item xs={12} md={9} lg={7} xl={5}>
        <Card className={classes.cardRoot}>
          <CardContent>
            <Grid
              container
              justify='flex-start'
              alignItems='center'
              className={classes.innerGrid}
            >
              <Grid item xs={12}>
                <Typography variant='h4' className={classes.title}>
                  Education
                </Typography>
              </Grid>
              <Grid item xs={2.5} md={1.5}>
                <Avatar alt='UW' src={uw} className={classes.avatar} />
              </Grid>
              <Grid item xs={9} md={10.5}>
                <Typography variant='subtitle2' className={classes.header}>
                  M.Sc. GIS & Web Map Programming
                </Typography>
                <Typography variant='subtitle2' className={classes.content1}>
                  University of Wisconsin at Madison, May 2020, 4.0 GPA
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              justify='flex-start'
              alignItems='center'
              className={classes.innerGrid}
            >
              <Grid item xs={2.5} md={1.5}>
                <Avatar alt='VT' src={vt} className={classes.avatar} />
              </Grid>
              <Grid item xs={9} md={10.5}>
                <Typography variant='subtitle2' className={classes.header}>
                  B.Sc. Industrial Systems Engineering
                </Typography>
                <Typography variant='subtitle2' className={classes.content1}>
                  Virginia Polytechnic Institute and State University,
                  Blacksburg, VA, December 2011
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              justify='flex-start'
              alignItems='center'
              className={classes.innerGrid}
            >
              <Grid item xs={12}>
                <Typography
                  variant='h4'
                  className={classes.title}
                  style={{ marginTop: 10 }}
                >
                  Technical Skills
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant='body1' className={classes.header}>
                  GIS:
                </Typography>
                <Typography variant='body1' className={classes.content1}>
                  Mapbox Studio, TurfJS, ArcGIS Desktop (ArcMap), ArcGIS
                  Extensions (Spatial Analyst, 3D Analyst, Geostatistical
                  Analyst), ArcGIS Online, ArcInsights, QGIS, Google Earth Pro
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant='body1'
                  className={classes.header}
                  style={{ marginTop: 10 }}
                >
                  Development:
                </Typography>
                <Typography variant='body1' className={classes.content1}>
                  Python (GDAL, OGR, ArcPy, NumPy, Elasticsearch), JavaScript
                  (D3, React, Turf, Electron, Express, Node), Java (Java
                  Servlet, JSP, JDBC, Android), mapping APIs (Mapbox GL JS,
                  Google Maps JS, Leaflet, ArcGIS JS), React Native (Expo,
                  Standard), AWS (S3, EC2, Lambda), search (Elasticsearch,
                  Kibana, Whoosh), business intelligence (Tableau, Power BI,
                  ArcInsights), command line (Bash, Batch), Linux, Windows, WSL
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant='body1'
                  className={classes.header}
                  style={{ marginTop: 10 }}
                >
                  Data Wrangling:
                </Typography>
                <Typography variant='body1' className={classes.content1}>
                  PostgreSQL / PostGIS, Presto, MySQL, MongoDB, Firebase /
                  Firestore, Nifi, SQL & NoSQL Query Languages, Geoquerying
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant='body1'
                  className={classes.header}
                  style={{ marginTop: 10 }}
                >
                  Design:
                </Typography>
                <Typography variant='body1' className={classes.content1}>
                  Material UI, Material Design, Bootstrap, HTML5, CSS3, Adobe
                  Illustrator, Photoshop
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              justify='flex-start'
              alignItems='center'
              className={classes.innerGrid}
            >
              <Grid item xs={12}>
                <Typography
                  variant='h4'
                  className={classes.title}
                  style={{ marginTop: 15, marginBottom: 15 }}
                >
                  Experience
                </Typography>
              </Grid>
              <Grid item xs={2.5} md={1.5}>
                  <Avatar alt='Bluechip' src={bluechip} href="http://www.bluechip.tech/#/"
                    variant='square' className={classes.avatar}>
                      <Link href="http://www.bluechip.tech/#/"></Link>
                  </Avatar>
                </Grid>
                <Grid item xs={9} md={10.5}>
                  <Typography variant='subtitle2' className={classes.header}>
                    Principal Software Engineer
                  </Typography>
                  <Typography variant='subtitle2' className={classes.content1}>
                    Bluechip Technologies, 2020 - Present
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <div className={classes.list}>
                    <ul>
                      <li>
                        Coming soon!
                      </li>
                    </ul>
                  </div>
                </Grid>
              </Grid>
            <Grid
              container
              justify='flex-start'
              alignItems='center'
              className={classes.innerGrid}
            >
              <Grid item xs={2.5} md={1.5}>
                <Avatar alt='Quevera' src={quev} className={classes.avatar} />
              </Grid>
              <Grid item xs={9} md={10.5}>
                <Typography variant='subtitle2' className={classes.header}>
                  Geospatial Software Engineer
                </Typography>
                <Typography variant='subtitle2' className={classes.content1}>
                  Quevera, 2018 - Present
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.list}>
                  <ul>
                    <li>
                      Increase data scientist workflow efficiency via plug and
                      play ETL workflows, easily assimilated user interfaces for
                      data analysis, and standardized python libraries for data
                      triage, search, and analysis
                    </li>
                    <li>
                      Generates rapid design/deploy software solutions for data
                      triage, exploration, visualization and correlation
                    </li>
                    <li>
                      Provides data scientist support via tactical design and
                      development efforts utilizing Python, NiFi, Hive,
                      Postgres, Elasticsearch, Kibana, Javascript (React,
                      Material UI)
                    </li>
                  </ul>
                </div>
              </Grid>
            </Grid>
            <Grid
              container
              justify='flex-start'
              alignItems='center'
              className={classes.innerGrid}
            >
              <Grid item xs={2.5} md={1.5}>
                <Avatar
                  alt='BAH'
                  src={booz}
                  variant='square'
                  className={classes.avatar}
                />
              </Grid>
              <Grid item xs={9} md={10.5}>
                <Typography variant='subtitle2' className={classes.header}>
                  Systems and Software Engineer
                </Typography>
                <Typography variant='subtitle2' className={classes.content1}>
                  Booz Allen Hamilton, 2017 - 2018
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.list}>
                  <ul>
                    <li>
                      Supported research and development efforts to create
                      innovative geospatial applications utilizing custom 2D and
                      3D modeling algorigthms and visualizations, accomplishing
                      weeks of analyst effort in minutes
                    </li>
                    <li>
                      Developed data visualization applications that assist
                      analysts efforts to make sense of large amounts of data,
                      integrating various data sources seamlessly and increasing
                      analyst productivity 800%
                    </li>
                    <li>
                      Executed complex analysis, design, development, testing
                      and debugging of computer software in support of distinct
                      product hardware or technical service lines of business
                      within an Agile team environment
                    </li>
                    <li>
                      Developed software applications utilizing Python, Java,
                      PostgreSQL with PostGIS, HTML5, JavaScript, REST,
                      microservice based architecture, ArcInsights, PowerBI,
                      Tableau, AWS
                    </li>
                    <li>
                      Programatically assessed multi-INT collection and
                      integration strategies, various weapons and sensor
                      capabilities, and relevant policy concerns via custom
                      MATLAB simulation program, Raptor simulation tool, MIST
                      tool suite, and Wargaming methodology
                    </li>
                  </ul>
                </div>
              </Grid>
            </Grid>
            <Grid
              container
              justify='flex-start'
              alignItems='center'
              className={classes.innerGrid}
            >
              <Grid item xs={2.5} md={1.5}>
                <Avatar
                  alt='SAIC'
                  src={saic}
                  variant='square'
                  className={classes.avatar}
                />
              </Grid>
              <Grid item xs={9} md={10.5}>
                <Typography variant='subtitle2' className={classes.header}>
                  Systems Engineer, Engineering Analyst
                </Typography>
                <Typography variant='subtitle2' className={classes.content1}>
                  Science Applications International Corporation, 2013 - 2017
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.list}>
                  <ul>
                    <li>
                      Increased analyst productivity as much as 300% via
                      development and implementation of MATLAB, Python, and
                      Visual Basic tools to assist in manipulation and
                      presentation of data related to in depth analysis of key
                      problem areas and preparation of new data for presentation
                      into existing software models
                    </li>
                    <li>
                      Performed geospatial 3D data representation with QGIS,
                      automated data preparation using Matlab scripting, and
                      built automated PowerPoint tools with Visual Basic
                    </li>
                    <li>
                      Selected for multiple DoD customer site roles involving
                      the organizational planning, leadership of analysis team,
                      engineering analysis preparation, and briefing
                      presentation to government customers
                    </li>
                    <li>
                      Coordinated and contributed to multiple small, specialized
                      teams performing simulation, software de-velopment and
                      engineering analysis supporting government customers
                    </li>
                    <li>
                      Generated concise, low latency study briefings capturing
                      system of systems performance designed to highlight
                      critical vulnerabilities and solutions requested by high
                      level decision makers
                    </li>
                    <li>
                      Generated concise, low latency study briefings capturing
                      system of systems performance designed to highlight
                      critical vulnerabilities and solutions requested by high
                      level decision makers
                    </li>
                    <li>
                      Manipulated various software tools and programming
                      languages to provide reliable, seamless, and concise
                      performance analysis of various complex systems;
                      tools/languages including MatLab, Mathematica, Linux, STK,
                      SIMDIS, EADSIM, as well as other custom tools specific to
                      the work
                    </li>
                    <li>
                      Created and maintained 3D plotting tools for SIMDIS (Navy
                      Graphical Tools) tool to create situational awareness for
                      high-level decision makers regarding urgent threats
                    </li>
                  </ul>
                </div>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
