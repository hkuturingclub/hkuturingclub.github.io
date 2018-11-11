import React from 'react';
import logo from '../../logo.svg';
import data from './data.js';
import PersonCard from './PersonCard';

class Team extends React.Component{
    render(){
        return(
            <div>
                <center>
                    <h1> Meet The Team</h1>
                        {
                          data.map(item => <PersonCard name={item.name} image={item.image} team={item.team} major={item.major}/>)
                        }
                </center>
            </div>
        )
    }
}

export default Team
