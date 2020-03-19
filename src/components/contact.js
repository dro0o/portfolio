import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

import profphoto from '../img/prof_photo.png'

class Contact extends Component {
    render() {
        return(
            <div className='contact-body'>
                <Grid className="contact-grid">
                    <Cell col={12}> 
                        <img 
                            src={profphoto}
                            alt="profphoto"
                            className='prof-photo'
                            />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                        </p>
                        <div className='contact-list'>
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/> (703) 350-3056
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-envelope" aria-hidden="true"/>apittman2@wisc.edu
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/> 
                                    <a href="https://www.linkedin.com/in/andrew-pittman-a1618922"> andrew-pittman-a1618922</a>
                                    </ListItemContent>
                                </ListItem>
                            </List>                        
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;