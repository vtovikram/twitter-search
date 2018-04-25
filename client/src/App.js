import React, { Component } from 'react';

import logo from './logo.svg';

import './App.css';
import TwitterPanel from './twitter/views/TwitterPanel';

class App extends Component {

  constructor(props) {
      super(props);
      this.state = {value: ''};
      this.state = {response: ''};

      this.handleChange = this.handleChange.bind(this);
    }

  callApi = async () => {
    const response = await fetch(`/api/hello?test=${this.state.value}`);
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  onClickButton = () =>{
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  handleChange(event) {
      this.setState({value: event.target.value});
    }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button onClick={this.onClickButton}>Test</button>
        <TwitterPanel searchData={this.state.response}></TwitterPanel>
      </div>
    );
  }
}

export default App;
