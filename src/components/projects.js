import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, CardMenu, Button, IconButton } from 'react-mdl';
// import { url } from 'inspector';


class Projects extends Component {
    render() {
        return(
            <div>
                <Grid className='projects-grid'>
                    <Cell col={4} style={{margin: 'auto'}}>
                        <Card shadow={5} style={{midWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color:'#fff', height:'200px', 
                            background:'url(' + require('../img/AfricanCorruption.png') +') center / cover'}} >African Corruption & Wealth</CardTitle>
                            <CardText>
                                Interactive web application using D3, Bootstrap, HTML5 and CSS3
                            </CardText>
                            <CardActions border>
                                <Button colored>
                                    <a target="_blank" rel="noopener noreferrer" className="live-links" 
                                    href="https://adp6729.github.io/d3-coordinated-viz/">Live</a>
                                </Button>
                                <Button colored>
                                    <a target="_blank" rel="noopener noreferrer" className="git-links" 
                                    href="https://github.com/adp6729/d3-coordinated-viz">Github</a>
                                </Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Cell>  
                    <Cell col={4}>
                        <Card shadow={5} style={{midWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color:'#fff', fontWeight:'bold', height:'200px', 
                            background:'url(' + require('../img/FIFAcrop.png') +') center / cover'}} >FIFA Success & Governance</CardTitle>
                            <CardText>
                                Interactive web application using D3, Bootstrap, HTML5 and CSS3
                            </CardText>
                            <CardActions border>
                                <Button colored>
                                    <a target="_blank" rel="noopener noreferrer" className="live-links" 
                                    href="https://adp6729.github.io/fifaCorruption/">Live</a>
                                </Button>
                                <Button colored>
                                    <a target="_blank" rel="noopener noreferrer" className="git-links" 
                                    href="https://github.com/adp6729/fifaCorruption">Github</a>
                                </Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Cell>
                    <Cell col={4}>
                        <Card shadow={5} style={{midWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color:'black', fontWeight:'bold', height:'200px', 
                            background:'url(' + require('../img/LongformInfo.png') +') center / cover'}} >Women in Technology Infographic</CardTitle>
                            <CardText>
                                Static infographic created using ESRI ArcMap and Adobe InDesign
                            </CardText>
                            <CardActions border>
                                <Button colored>
                                    <a target="_blank" rel="noopener noreferrer" className="live-links" 
                                    href="https://www.dropbox.com/s/msiewayzo506pom/Feminine_Geek_is_Technically_Chic.pdf?dl=0">Preview</a>
                                </Button>
                            </CardActions>
                            <CardMenu style={{color: 'black'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Cell>
                    <Cell col={4}>
                        <Card shadow={5} style={{midWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color:'#fff', fontWeight:'bold', height:'200px', 
                            background:'url(' + require('../img/ShadedRelief.png') +') center / cover'}} >Cyclocross Shaded Relief</CardTitle>
                            <CardText>
                                Static infographic created using ESRI ArcMap, Adobe Photoshop and Adobe InDesign
                            </CardText>
                            <CardActions border>
                                <Button colored>
                                    <a target="_blank" rel="noopener noreferrer" className="live-links" 
                                    href="https://www.dropbox.com/s/v54l1kol6r4eclu/South_African_Cyclocross.pdf?dl=0">Preview</a>
                                </Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Cell>
                    <Cell col={4}>
                        <Card shadow={5} style={{midWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color:'black', fontWeight:'bold', height:'200px', 
                            background:'url(' + require('../img/RenewableEnergy.png') +') center / cover'}} >Third World Renewable Energy Research</CardTitle>
                            <CardText>
                                Independent research paper focussing on renewable energy options in the third world
                            </CardText>
                            <CardActions border>
                                <Button colored>
                                    <a target="_blank" rel="noopener noreferrer" className="live-links" 
                                    href="https://www.dropbox.com/home/Public?preview=IS+UAP+4974+Final+Paper+Andrew+Pittman.pdf">Preview</a>
                                </Button>
                            </CardActions>
                            <CardMenu style={{color: 'black'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;