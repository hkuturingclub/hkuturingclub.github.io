import React from 'react';
import logo from '../../logo.svg'


class Team extends React.Component{
    render(){
        return(
            <div>
                <center>
                    <h1> Meet The Team</h1>
                    <table>
                        <tr>
                            <td><img src={logo} /> Manya </td>
                            <td><img src={logo} /> Waqas </td>
                            <td><img src={logo} /> Ubaid </td>
                            <td><img src={logo} /> Pranav </td>
                        </tr>
                    </table>
                </center>
            </div>
        )
    }
}

export default Team 
