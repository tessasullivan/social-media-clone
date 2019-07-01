import React from 'react';

function NavBar() {
  var navStyles = {
    textDecoration: "none",
    border: "2px solid lightgray",
    height: "15px",
    padding: "5px",
    color: "gray",
  }
  var navPostion = {
    marginTop: "20px"
  }
  return (
    <div style={navPostion}>
      <a style={navStyles} href="/">Home</a>
      <a style={navStyles} href="/notifications">Notifications</a>
      <a style={navStyles} href="/messages">Messages</a>
    </div>
  )
}

export default NavBar;