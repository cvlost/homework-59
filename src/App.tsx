import React from 'react';
import './App.css';
import MovieTracker from "./containers/MovieTracker/MovieTracker";

class App extends React.Component {


  render() {
    return (
      <div className="App">
        <div className="App-col">
          <MovieTracker/>
        </div>
        <div className="App-col">

        </div>
      </div>
    );
  }
}

export default App;
