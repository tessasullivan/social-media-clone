import React from 'react';
import TweetSearch from './TweetSearch';
import Tweet from './Tweet';

function StatusUpdate(){
  var bodyStyle = {
    border: "1px solid lightgray",
    width: "350px"
  }
  return (
    <div style={bodyStyle}>
      <TweetSearch />
      <Tweet/>
      <Tweet/>
      <Tweet/>
      <Tweet/>
    </div>
  )
}
export default StatusUpdate;