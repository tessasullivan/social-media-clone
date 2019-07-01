import React from "react";
import Friend from './Friend';

function Friends(){

  var bodyStyle = {
    border: "2px solid lightgray",
    height: "350px",
    padding: "20px",
    width: "300px"
  }
  var h1Style = {
    fontSize: "1.2em",
    marginBottom: "35px"
  }
  var friendStyle = {
    margin: "-100px"
  }
  return(
    <div style={bodyStyle}>
      <h1 style={h1Style}>Lorem, ipsum.</h1>
      <Friend style={friendStyle}/>
      <Friend style={friendStyle}/>
      <Friend style={friendStyle}/>
    </div>
  )
}
export default Friends;