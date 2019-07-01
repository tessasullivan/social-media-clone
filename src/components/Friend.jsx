import React from 'react';

function Friend(){
  var bodyStyle = {
    margin: "-45px",
  }
  
  var imgStyle = {
    transform: "translateX(40px)"
  }
  var h3Style = {
    fontSize: "1em",
    transform: "translateX(110px) translateY(33px)",
  }
  var buttonStyle = {
    transform: "translateX(55px) translateY(-10px)",
    backgroundColor: "rgb(65, 113, 179)",
    color: "white",
    height: "25px",
    width: "80px",
    fontSize: ""
  }
  return(
    <div style={bodyStyle}>
      <h3 style={h3Style}>Lorem, ipsum dolor.</h3>
      <img style={imgStyle} src="https://picsum.photos/55" />
      <button style={buttonStyle} type="submit">Button</button>
    </div>
  )
}
export default Friend;