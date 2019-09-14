import React, { Component } from 'react';
import './App.css';
import BoardSection from  './components/BoardSection';

class App extends Component {
  render() {
    return (
      <div>
        <h2 className="header"> Retro Board</h2>
        <div class> Double click on card text to edit card</div>
        <BoardSection></BoardSection>
      </div>
    );
  }
}

export default App;
