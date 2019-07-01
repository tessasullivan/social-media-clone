import React from 'react';

function Bio() {
  var bioStyle = {
    height: "300px",
    width: "222px",
    border: "2px solid lightgray",
    padding: "10px",
    marginTop: "20px"
  }
  return (
    <div style={bioStyle}>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan iaculis elementum. Suspendisse euismod, nibh in fermentum porttitor, lacus velit varius nunc, in dapibus libero lacus a nisl. 
      </p>
      <p>
       Vivamus porta elit pharetra, tincidunt urna ut, euismod metus. Integer a turpis orci. Ut et lacinia leo. Fusce dui neque, tempor id augue et, elementum lacinia elit. 
      </p>
    </div>
  )
}
export default Bio;