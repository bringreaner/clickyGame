import React, { Component } from 'react';
import Header from "./components/header"
import Wrapper from "./components/wrapper"
import spacedChars from "./spacedChars.json"
import charProf from "./components/charProf"

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    spacedChar: spacedChars
  }

  //need function to change score
  //need function to change the characters' props

  render() {
    return (
      <div className="App">
        <Header 
          currentScore={this.state.score}
          topScore={this.state.topScore}
        />
        <Wrapper>
          {this.state.spacedChar.map(character => (
          <charProf
            clickedOn={this.clickedOn}
            id={spacedChars.id}
            //need moar props
        />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
