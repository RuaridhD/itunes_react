import React from 'react';

class TrackSelector extends React.Component {
  render(){
    const trackList = this.props.map((track, index) => (
      <option key={track.feed.entry.title.label} value={index}>{track.feed.entry.title.label}</option>
    ))
    return (
      <select onChange={this.props.onSelect}>
        <option>
          Select a track....
        </option>
        {trackList}
      </select>
    )
  }
}

export default TrackSelector;
