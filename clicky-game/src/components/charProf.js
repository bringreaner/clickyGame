import React, {Component} from 'react';
import "./charProf.css"

class CharProf extends Component {
    state = {
        clickedOn: false
    }

    handleClick = () => {
        if (!this.state.clickedOn) {
            this.setState({clickedOn: true})
            this.props.shuffle();
            this.props.incrementScore();
        }
        else {
            this.props.gameOver();
            this.setState({clickedOn: false})
        }
    }

    render(){
        return (
            <div className="col-md-3 photo" onClick={this.handleClick}>
                <img className="character-image" src={this.props.char.image}/>
            </div>
        )
    }
}

export default CharProf;