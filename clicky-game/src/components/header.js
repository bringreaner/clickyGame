import React from 'react';

const Header = (props) => {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <h1 className="navbar-brand">Clicky Game</h1>
  <h2 className="userGuess">You guessed...</h2>
  <h2 className="currentScore">Score: {props.currentScore} | Top Score: {props.topScore}</h2>
</nav>
  )};
  
export default Header;