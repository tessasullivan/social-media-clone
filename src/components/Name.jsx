import React from 'react';

function Name() {
  var topBar = {
    height: "120px",
    width: "240px",
    backgroundColor: "#1DA1F2",
    border: "2px solid lightgray"
  }
  var imgStyle = {
    zIndex: "1",
    marginTop: "-65px",
    marginLeft: "20px",
    border: "1px solid lightgray",
    borderRadius: "25px"
  }
  var nameStyle = {
    verticalAlign: "top",
    marginLeft: "5px",
    fontWeight: "bold"
  }
  var linkStyle = {
    textDecoration: "none",
    color: "gray",
  }
  var linkListStyle = {
    padding: "20px",
    display: "flex",
    justifyContent: "space-between"
    
  }
  var bodyStyle = {
    border: "2px solid lightgray",
    width: "242px"
  }
  return (
    <div style={bodyStyle}>
      <div style={topBar} ></div>
      <img style={imgStyle} src="https://picsum.photos/100" />
      <span style={nameStyle}>Han Solo</span>
      <div style={linkListStyle}>
        <a style={linkStyle} href="/tweets">Tweets</a>
        <a style={linkStyle} href="/following">Following</a>
        <a style={linkStyle} href="/followers">Followers</a>
      </div>
    </div>
  )
}
export default Name;