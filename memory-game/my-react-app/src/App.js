import React, { Component } from "react";
import CharacterCard from "./components/Character-Card";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";
import "./App.css";

function shuffleFriends(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
  state = {
    characters,
    currentScore: 0,
    highScore: 0,
    message: "",
    clicked: [],
  };

  handleClick = (id) => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      message: "You Guessed Right, Have Another!!",
    });
    if (newScore >= this.state.highScore) {
      this.setState({ highScore: newScore });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      highScore: this.state.highScore,
      message: "Have You Been Drinking?",
      clicked: [],
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledFriends = shuffleFriends(characters);
    this.setState({ characters: shuffledFriends });
  };

  render() {
    return (
      <Wrapper>
        <Title>Beer Can Clicky Game</Title>

        <Nav score={this.state.currentScore} highScore={this.state.highScore} />
        <Title>
          <h3 className="navMessage">{this.state.message}</h3>
          Click on a Beer to score points, but don't click the same beer twice
          you might spill!!
        </Title>
        {this.state.characters.map((character) => (
          <CharacterCard
            key={character.id}
            handleClick={this.handleClick}
            handleIncrement={this.handleIncrement}
            handleReset={this.handleReset}
            handleShuffle={this.handleShuffle}
            id={character.id}
            image={character.image}
          />
        ))}
      </Wrapper>
    );
  }
}
export default App;
