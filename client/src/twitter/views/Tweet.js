import React, { Component } from 'react';

class Tweet extends Component {


  render() {
    return (
      <div className="App">
      {this.props.displayText}
      </div>
    );
  }
}

export default Tweet;
