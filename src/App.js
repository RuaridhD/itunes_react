import React, { Component } from 'react';
import './App.css';
import MusicBox from './containers/MusicBox'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iosapps/itunes/apple-music-gift-card-flat.png" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to iTunes</h1>
        </header>
        <p className="App-intro">
          <MusicBox />
        </p>
      </div>
    );
  }
}

export default App;
