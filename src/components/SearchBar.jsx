import React from "react";

function SearchBar(){
  var search = {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "-15px",
  }
  var button = {
    borderRadius: "25px",
    border: "2px solid #1DA1F2",
    padding: "5px",
    marginRight: "15px",
    fontSize: "15px"
  }
  return (
    <form style={search} className="search-form">
      <input style={button} type="text" placeholder="Search"/>
      <button style={button} type="submit">Tweet</button>
    </form>
  )
}

export default SearchBar;