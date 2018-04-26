import React, { Component } from 'react';

class ExpandedTweet extends Component {

  render() {

    const userName = this.props.userName;
    const profileImage = this.props.profileImage;
    return (
      <section className='expandedTweet__model'>
        <img src = {profileImage}/>
        {userName}
        <div>Work in Progress</div>
      </section>
    );
  }
}

export default ExpandedTweet;
