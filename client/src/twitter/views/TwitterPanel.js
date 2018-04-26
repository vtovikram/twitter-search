import React, { Component } from 'react';
import Tweet from './Tweet';


class TwitterPanel extends Component {

  constructor(props) {
    super(props)
    this.state = {
      searchData: props.searchData
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ searchData: nextProps.searchData })
  }

  render() {
    let tweet = '';

    if(this.state.searchData !== ''){
      tweet = this.state.searchData.statuses.map((t, i) => {
          return (<Tweet searchData={t} key={i} />);
      });

    }

    return (
      <div className="App-tweet-panel">
      {this.state.searchData && tweet}
      </div>
    );
  }
}

export default TwitterPanel;
