import React from 'react';

const TrackDetails = (props) => {
  if (!props.track) return null;
  return (
    <div>
      <h1>{props.track.feed.entry.title.label}</h1>
      <p>Label: {props.track.feed.entry.rights.label}</p>
      <p>Cost: {props.track.feed.entry.label}</p>
      <p>Flag: <img className = "cover" src={props.track.feed.entry.label} alt={'Album cover for ${props.track.feed.entry.title.label}'}/></p>
    </div>
  )
}

export default TrackDetails;
