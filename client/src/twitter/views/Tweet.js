import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import ExpandedTweet from './ExpandedTweet';

class Tweet extends Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    const displayText = this.props.searchData['full_text'].replace(/(?:https?|ftp):\/\/[\n\S]+/g, '');
    const userName = this.props.searchData.user['screen_name'];
    const profileImage = this.props.searchData.user['profile_image_url_https'];

    return (
      <section className="App-tweet-panel-tweet" onClick={this.onOpenModal}>
        <a target="_blank" href={`https://twitter.com/${userName}`}>
          <img src = {profileImage}/>
          {userName}
        </a>
        <div>{displayText}</div>
      </section>
    );
  }
}

export default Tweet;
