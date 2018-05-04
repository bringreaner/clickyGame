import React, { Component } from 'react';
import Characters from "../spacedChars.json"
import CharProf from "./charProf"

class GameBoard extends Component {
    state ={
        spacedChars: Characters
    }

    shuffle = () => {
        console.log("shuffle")
        let a = this.state.spacedChars;
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        this.setState({spacedChars: a})
    }

    // unclickEverything = () => {
    // }
    
    clickedOn = (charID) => {
        let b = this.state.spacedChars
        b.map( b.clicked = false);
        // this.state.spacedChars.forEach((characterCard) => {
        //     this.setState({characterCard.state.clickedOn: false})
        // } )
        // trying to loop through character array and set clicked on to false   
        };
    

    render() {
        const chars =      
            this.state.spacedChars.map(char => {
            return <CharProf
                key={char.key}
                char={char}
                gameOver={ () => this.props.gameOver()}
                shuffle={ () => this.shuffle()}
                incrementScore={ () => this.props.incrementScore()}
                clickedOn={ () => this.props.clickedOn()}
            />
        })

        return (    
            <div className="container">
                <div className="row">
                    {chars}
                </div>
            </div>
        )
    }
}
export default GameBoard;