import React, { Component } from 'react';
import Header from "./components/header"
import GameBoard from "./components/gameBoard"


class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    // spacedChar: spacedChars
  }
  
  handleGameOver = () => {
    this.setState({score: 0})
  }

  //need function to change score
  incrementScore = () => {
    let {score, topScore} = this.state;
    score = score +1;
    // onsole.log("using incrementScore")
    this.setState({score: score})
    
    if (score > topScore) {
      this.setState({topScore: score})
    }
  }
  //need function to keep topScore

  render() {
    return (
      <div className="App">
        <Header
          currentScore={this.state.score}
          topScore={this.state.topScore}/>
        {/* <Header 
          currentScore={this.state.score}
          topScore={this.state.topScore}
        /> */}
        <GameBoard
          gameOver={() => this.handleGameOver()}
          incrementScore={() => this.incrementScore()}
          />
      </div>
    );
  }
}

export default App;