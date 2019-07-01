import React from 'react';
import NavBar from './NavBar';
import SearchBar from './SearchBar';

function Header() {
  var hrStyle = {
    border: "1px solid lightgray"
  }
  return (
    <div>
      <NavBar/>
      <SearchBar/>
      <hr style={hrStyle}/>
    </div>
  )
}
export default Header;