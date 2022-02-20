import React from "react";

import "./styles.css";

class Suggest extends React.Component {
  render() {
    console.log(this.props.suggest);
    return (
      <div className="suggest">
        <p >{this.props.suggest}</p>
      </div>
    );
  }
}

export default Suggest;
