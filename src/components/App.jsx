import React from "react";
import Header from "./Header";
import Body from "./Body";
import StatusUpdate from './StatusUpdate';
import Friends from "./Friends";

function App(){
  var grid = {
    display: "grid",
    gridTemplate: "auto/ 1fr 241px 351px 301px 1fr",
    gridGap: "25px"
  }
  var headerGrid = {
    display: "grid",
    gridTemplate: "auto/ 1fr 925px 1fr",
    gridGap: "25px"
  }
  return (
    <div>
      <div style={headerGrid}>
      <div></div>
        <Header/>
        <div></div>
      </div>
      <div style={grid}>
      <div></div>
       <Body/>
       <StatusUpdate/>
       <Friends/>
      </div>
    </div>
  );
}

export default App;