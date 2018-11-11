import React from 'react';
import logo from '../../logo.svg'

class About extends React.Component{
    render(){
        return(
            <div>
             <center>
                <h1> About Chi Sun Turing Club</h1>
                <img src={logo} class="App-logo" alt="Logo"/> 
                <p> Chi Sun Turing Club is a technology focused student initiative at Chi Sun College of University of Hong Kong aiing to improve student life using technology.</p>
             </center>
            </div>
        )
    }
}

export default About;
