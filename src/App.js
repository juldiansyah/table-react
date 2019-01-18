import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Table from './components/table/tableComponent';
import Popup from './components/popup/popupComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drivers: null,
      limit: 20,
      isLoad: false,
      popup: null
    };
  }

  onScroll () {
    if(window.pageYOffset + 1000 >= document.body.offsetHeight && !this.state.isLoad) {
      this.setState({isLoad : true});
      setTimeout(() => {
        let limit = this.state.limit + 20;
        this.setState({
          limit: limit,
          isLoad: false
        })
      }, 1000);
    }
  }

  openPopup (i) {
    this.setState({
      popup: <Popup driver={this.state.drivers[i]} closePopup={this.closePopup.bind(this)}/>
    })
  }

  closePopup () {
    this.setState({
      popup: null
    })
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll.bind(this));
  }

  componentWillMount() {
    fetch('/drivers.json')
      .then(r => r.json())
      .then(data => {
        this.setState({
          drivers: data.drivers
        })
      })
  }

  render() {
    return (
      <div className="App">
        { this.state.popup }
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Table drivers={this.state.drivers} limit={this.state.limit} notify={this.openPopup.bind(this)}/>
      </div>
    );
  }
}

export default App;
