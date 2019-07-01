import React from "react";
import Header from "./Header";
import Body from "./Body";
import StatusUpdate from './StatusUpdate';

function App(){
  var grid = {
    display: "grid",
    gridTemplate: "auto/ 1fr 1fr 1fr"
  }
  return (
    <div>
      <Header/>
      <div style={grid}>
       <Body/>
        <StatusUpdate/>
      </div>
    </div>
  );
}

export default App;