import React from 'react';
import TrackSelector from '../components/TrackSelector';
import TrackDetails from '../components/TrackDetails';

class MusicBox extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tracks: []
    }
    this.handleTrackSelect = this.handleTrackSelect.bind(this);
  }

  componentDidMount(){
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    const request = new XMLHttpRequest();
    request.open('GET', url)
    request.addEventListener('load', () => {
      if (request.status !== 200) return;
      const tracks = JSON.parse(request.response);
      this.setState({tracks: tracks})
    })
    request.send();
  }

  handleTrackSelect(event){
    const trackIndex = event.target.value;
    const track = this.state.tracks[trackIndex];
    this.setState({selectedTrack: track})
    console.log("Track selected: ", track);
  }

  render(){
    return(
      <div>
        <TrackSelector tracks={this.state.tracks.feed} onSelect={this.handleTrackSelect} />
        <TrackDetails track={this.state.selectedTrack}/>
      </div>
    )
  }
}

export default MusicBox;
