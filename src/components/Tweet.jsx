import React from "react";

function Tweet() {
  var imgStyle = {
    zIndex: "1",
    marginTop: "10px",
    marginLeft: "10px"
  };
  var h1Style = {
    fontSize: "1.2em",
    marginLeft: "10px",
    transform: "translateY(-7px)"
  };
  var tweet = {
    display: "flex"
  };
  var pgStyle = {
    marginLeft: "63px",
    transform: "translateY(-30px)",
    marginBottom: "-15px"
  }
  var hrStyle = {
    border: "1px solid lightgray"
  }
  return (
    <div>
      <div style={tweet}>
        <img style={imgStyle} src="https://picsum.photos/43" />
        <h1 style={h1Style}>Lorem Ipsum</h1>
      </div>
      <p style={pgStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <hr style={hrStyle}/>
    </div>
  );
}
export default Tweet;
