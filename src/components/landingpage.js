import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto', paddingTop: '15vh'}}>
                <Grid className="landing-grid"> 
                    <Cell col={12}>
                        <div className="banner-text">
                            <h1>Beyond Geospatial</h1>
                            <p>CREATIVITY    |    ENGINEERING    |    ANALYTICS    |    SERVICE</p>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;