import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TwitterPanel from './twitter/views/TwitterPanel';
import Tweet from './twitter/views/Tweet';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders Tweet', () => {
  const tweetInfo = {};
  tweetInfo['full_text'] = 'this is just a sample test';
  tweetInfo.user = {};
  tweetInfo.user['screen_name'] = 'Iron man';
  tweetInfo.user['profile_image_url_https'] = 'target link';
  const div = document.createElement('div');
  ReactDOM.render(<Tweet searchData={tweetInfo} />, div);
});

it('renders TwitterPanel', () => {
  const searchData = {};
  searchData.statuses = [];
  const tweetInfo = {};
  tweetInfo['full_text'] = 'this is just a sample test';
  tweetInfo.user = {};
  tweetInfo.user['screen_name'] = 'Iron man';
  tweetInfo.user['profile_image_url_https'] = 'target link';
  searchData.statuses.push(tweetInfo);
  const div = document.createElement('div');
  ReactDOM.render(<TwitterPanel searchData={searchData} />, div);
});
