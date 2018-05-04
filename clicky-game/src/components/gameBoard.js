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
        this.props.incrementScore();
    }

        //need shuffling logic - in board

        //need function to change the update if it was clicked on

        //onclick for card logic should be in card itself
    
    // componentDidMount() {
    //     this.setState({ imgSrc: this.updateImages(this.state.images) })
    // };

    // updateImages() {

    // }
    render() {
        const chars =         
            this.state.spacedChars.map(char => {
            return <CharProf
                key={char.key}
                char={char}
                gameOver={ () => this.props.gameOver()}
                shuffle={ () => this.shuffle()}
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