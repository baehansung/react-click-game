import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

class App extends Component {
  // Set this.state
  state = {
    friends,
    currentScore: 0,
    highScore: 0,
    status: "",
    clickedCharacters: [],
  };

  shuffleExecute = () => {
    let shuffled = shuffle(friends);
    this.setState({ friends: shuffled });
  };

  click = id => {
    if (this.state.clickedCharacters.indexOf(id) === -1) {
      this.updateScore();
      this.setState({ clickedCharacters: this.state.clickedCharacters.concat(id) });
    } else {
      this.resetScore();
    }
  };

  updateScore = () => {
    const scoreUpdate = this.state.currentScore + 1;
    this.setState({
      currentScore: scoreUpdate,
      status: "WAHOO!"
    });
    if (scoreUpdate >= this.state.highScore) {
      this.setState({ highScore: scoreUpdate });
    }
    else if (scoreUpdate === 12) {
      this.setState({ status: "YOU WIN!" });
    }
    
    this.shuffleExecute();
  };

  resetScore = () => {
    this.setState({
      currentScore: 0,
      highScore: this.state.highScore,
      status: "DOHHHH!...",
      clickedCharacters: []
    });
    this.shuffleExecute();
  };

  render() {
    return (
      <Wrapper>
        <Nav
          title="The Simpsons Click Game"
          highScore={this.state.highScore}
          status={this.state.status}
          score={this.state.currentScore}
        />

        <Title>
            Click on the characters to increment the score, BUT be careful not to click any characters more than once or you lose!
        </Title>
            {this.state.friends.map(friend => (
                <FriendCard
                  key={friend.id}
                  click={this.click}
                  updateScore={this.updateScore}
                  resetScore={this.resetScore}
                  shuffleExecute={this.shuffleExecute}
                  id={friend.id}
                  image={friend.image}
                />
            ))}
      </Wrapper>
    );
  }
}

export default App;