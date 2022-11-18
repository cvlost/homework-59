import React from 'react';
import './App.css';
import MovieTracker from "./containers/MovieTracker/MovieTracker";
import MovieTrackerFunc from "./containers/MovieTracker/MovieTrackerFunc";
import JokeBox from "./containers/JokeBox/JokeBox";

function App() {
  return (
    <div className="App">
      <div className="App-top">
        <h2 className="App-title">Jokes</h2>
        <div className="App-joke-wrapper">
          <JokeBox/>
        </div>
      </div>
      <div className="App-bottom">
        <h2 className="App-title">Movie Tracker</h2>
        <div className="App-cols">
          <div className="App-col">
            <p>*Class components</p>
            <MovieTracker/>
          </div>
          <div className="App-col">
            <p>*Functional components</p>
            <MovieTrackerFunc/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
