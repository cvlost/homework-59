import React from 'react';
import './App.css';
import MovieTracker from "./containers/MovieTracker/MovieTracker";
import MovieTrackerFunc from "./containers/MovieTracker/MovieTrackerFunc";

function App() {
  return (
    <div className="App">
      <div className="App-col">
        <p>Class components</p>
        <MovieTracker/>
      </div>
      <div className="App-col">
        <p>Functional components</p>
        <MovieTrackerFunc/>
      </div>
    </div>
  );
}

export default App;
