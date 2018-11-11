import React from 'react';
import logo from '../../logo.svg'

class Home extends React.Component{
  state = {
    loading: true,
  }

  componentDidMount() {
    // Example for state change:
    // Wait 2 seconds and change loading to false
    setTimeout( () => this.setState(
      {
        loading: false
      }), 2000);
  }

  render(){
    const { loading } = this.state;
    return(
        <div>
         <center>
            <h1>Chi Sun Turing Club</h1>
            {
              // Show loading when page opens and loading is true
              loading && <h4>Loading...</h4>
            }
            {
              // Show image when loading is done and it's false
              !loading && <img src={logo} class="App-logo" alt="Logo"/>
            }
         </center>
        </div>
    )
  }
}

export default Home;
