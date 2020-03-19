import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

import profphoto from '../img/prof_photo.png'


class About extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid>
                    <Cell col={12}>
                        <img 
                            src={profphoto}
                            alt="profphoto"
                            className='prof-photo'
                            />
                    </Cell>
                    <Cell col={12}>
                        <img 
                            src={profphoto}
                            alt="profphoto"
                            className='prof-photo'
                            />
                    </Cell>
                    <Cell col={12}>
                        <img 
                            src={profphoto}
                            alt="profphoto"
                            className='prof-photo'
                            />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;