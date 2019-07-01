import React from 'react';
import { relative } from 'path';

function TweetSearch() {
  var bodyStyle = {
    backgroundColor: "rgb(176, 214, 238)",
    zIndex: "-2",
    width: "350px",
  }
  var inputStyle = {
    margin: "20px",
    fontSize: "15px",
    height: "35px",
    width: "250px"
  }
  var formStyle = {
    marginLeft: "60px",
  }
  var imgStyle = {
    zIndex: "1",
    transform: "translateY(36px) translateX(50px)",
    margin: "-30px"
  }
  return(
    <div style={bodyStyle}>
    <img style={imgStyle} src="https://picsum.photos/43" />
      <form style={formStyle}>
        <input style={inputStyle} type="text" placeholder="What's Happening?"></input>
      </form>
    </div>
  )
}
export default TweetSearch;