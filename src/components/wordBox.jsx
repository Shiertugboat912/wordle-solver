import React, { useState } from "react";
import "./styles.css";

class Wordbox extends React.Component {
  value = "xyz";
  constructor() {
    super();
    this.colours = ["grey", "green", "yellow"];
    this.state = {
      colour: "transparent",
    };
  }

  cycle() {
    console.log("called");
    this.setState({
      colour:
        this.colours[
          (this.colours.indexOf(this.state.colour) + 1) % this.colours.length
        ],
    });
  }

  render() {
    console.log("called");
    return (
      <div className="box">
        <input
        id = {this.props.id}
          type="text"
          maxLength={1}
          style={{ backgroundColor: this.state.colour }}
          onClick={this.cycle.bind(this)}
        ></input>
      </div>
    );
  }
}

export default Wordbox;
