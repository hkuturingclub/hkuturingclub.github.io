import React from "react";

class PersonCard extends React.Component{
  render(){
    const { name, image, major, team } = this.props;
    return(
      <div>
      <img src={image} height={100}/>
      <p>{name}</p>
      <p>{team}</p>
      <p>{major}</p>
      </div>
    )
  }
}
export default PersonCard
