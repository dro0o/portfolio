import React from 'react'
import {
  Grid,
  Typography,
  IconButton,
  Avatar,
  Card,
  CardContent
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import uw from '../img/uw.png'
import vt from '../img/vt.png'
import quev from '../img/qlogo.jpeg'
import booz from '../img/bah.jpeg'

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
    backgroundColor: 'rgba(12, 12, 12, 0.6)',
    borderRadius: 15,
    boxShadow: '0 4px 6px 2px rgba(235, 235, 235, .3)'
  },
  innerGrid: {
    marginBottom: 15
  },
  title: {
    fontSize: 26,
    marginBottom: 10
  },
  header: {
    fontSize: 18,
    fontWeight: 600,
    marginLeft: 10,
    marginBottom: 5
  },
  content1: {
    marginLeft: 20
  },
  avatar: {
    height: 60,
    width: 60
  },
  list: {
    fontFamily: '"Roboto", sans-serif'
  }
}))

export default function Resume() {
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
                  University of Wisconsin at Madison, May 2020 graduation (4.0
                  GPA)
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
                  Blacksburg, VA
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
                  ArcGIS Desktop (ArcMap), ArcGIS Extensions (Spatial Analyst,
                  3D Analyst, Geostatistical Analyst), ArcGIS Online,
                  ArcInsights, QGIS, Mapbox Studio, Google Earth Pro
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
                  Python (GDAL / OGR, ArcPy, NumPy, Elasticsearch), Java (Java
                  Servlet, JSP, JDBC, Android), JavaScript (D3, React), mapping
                  APIs (Mapbox GL JS, Google Maps JS, Leaflet, ArcGIS JS), React
                  Native, AWS (S3, EC2, Lambda), Elasticsearch, Kibana, Bash,
                  Batch
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
                  PostgreSQL / PostGIS, Presto, MySQL, MongoDB, Firebase, Nifi,
                  SQL & NoSQL Query Languages, Geoquerying
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
                      Executed data science focused development utilizing
                      python, elasticsearch, presto, and docker
                    </li>
                    <li>
                      Built and tested spatial analysis aggregation tool in
                      support of ongoing python tool development
                    </li>
                    <li>
                      Provide GIS data science analysis and development
                      expertise as needed
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
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

{
  /* <div className='resume-body'>
<Grid className='resume-grid'>
    <Cell col={12} className="resume-section">
        <h3>EDUCATION</h3>                        
    </Cell>
    <Cell col={9}>                            
        <h4><strong>M.Sc. GIS & Web Map Programming</strong> (current GPA 4.0)</h4>
        <p className="resume-subtitle">University of Wisconsin at Madison, expected graduation May 2020 </p>                            
    </Cell>
    <Cell col={3}>
        <img src={uwphoto} alt="UW-Madison" class="schoolimg" id="uwimg"/>
    </Cell>
    <Cell col={9}>                            
        <h4><strong>B.Sc. Industrial Systems Engineering</strong></h4>
        <p className="resume-subtitle">Virginia Polytechnic Institute and State University, Blacksburg, VA</p>                            
    </Cell>
    <Cell col={3}>
        <img src={vtphoto} alt="VT" class="schoolimg" id="vtimg"/>
    </Cell>
    <Cell col={12} className="resume-section">
        <hr/>
        <h3>TECHNICAL SKILLS</h3>                        
    </Cell>
    <Cell col={12}>                            
        <p className="skills"><strong>GIS:</strong> ArcGIS Desktop (ArcMap), ArcGIS Extensions (Spatial Analyst, 3D Analyst, Geostatistical Analyst), ArcGIS Online, ArcInsights, QGIS, Mapbox Studio, Google Earth Pro</p>                      
    </Cell>
    <Cell col={12}>                            
        <p className="skills"><strong>Development:</strong> Python (GDAL / OGR, ArcPy, NumPy, Elasticsearch), Java (Java Servlet, JSP, JDBC, Android), JavaScript (D3, React, jQuery), mapping APIs (Mapbox GL JS, Google Maps JS, Leaflet, ArcGIS JS), Elasticsearch, Bash, Batch</p>    
    </Cell>
    <Cell col={12}>                            
        <p className="skills"><strong>Databases:</strong> PostgreSQL / PostGIS, Presto, MySQL, MongoDB, SQL & NoSQL Queries</p>
    </Cell>
    <Cell col={12}>                            
        <p className="skills"><strong>Design:</strong> HTML5, CSS3, Bootstrap, Material Design, Adobe Illustrator, Photoshop</p>     
    </Cell>
    <Cell col={12} className="resume-section">
        <hr/>
        <h3>EXPERIENCE</h3>                        
    </Cell>
    <Cell col={9}>                            
        <h4><strong>Geospatial Software Engineer</strong></h4>
        <p className="resume-subtitle">Quevera, 2018 - Present </p>
        <ul>
            <li>Executed data science focused development utilizing python, elasticsearch, presto, and docker</li>
            <li>Built and tested spatial analysis aggregation tool in support of ongoing python tool development</li>
            <li>Provide GIS data science analysis and development expertise as needed</li>
        </ul>                  
    </Cell>
    <Cell col={3}>
        <img src={qphoto} alt="Quevera" class="schoolimg" id="qimg"/>
    </Cell>
    <Cell col={9}>                            
        <h4><strong>Systems and Software Engineer</strong></h4>
        <p className="resume-subtitle">Booz Allen Hamilton, 2017 - 2018</p>
        <ul>
            <li>Supported research and development efforts to create innovative geospatial applications utilizing custom 2D and 3D modeling algorigthms and visualizations, accomplishing weeks of analyst effort in minutes</li>
            <li>Developed data visualization applications that assist analysts efforts to make sense of large amounts of data, integrating various data sources seamlessly and increasing analyst productivity 800%</li>
            <li>Executed complex analysis, design, development, testing and debugging of computer software in support of distinct product hardware or technical service lines of business within an Agile team environment</li>
            <li>Developed software applications utilizing Python, Java, PostgreSQL with PostGIS, HTML5, JavaScript, REST, microservice based architecture, ArcInsights, PowerBI, Tableau, AWS</li>
            <li>Programatically assessed multi-INT collection and integration strategies, various weapons and sensor capabilities, and relevant policy concerns via custom MATLAB simulation program, Raptor simulation tool, MIST tool suite, and Wargaming methodology</li>
        </ul>                                           
    </Cell>
    <Cell col={3}>
        <img src={bahphoto} alt="BAH" class="schoolimg" id="bahimg"/>
    </Cell>

</Grid>
<div className="spacer2"></div>
</div> */
}
