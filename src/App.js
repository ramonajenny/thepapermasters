import React, {Component} from "react";
//import logo from './logo.svg';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
      let data = require("../src/users.json")
      this.setState({monsters: data});
  }

  handleChange = e => {
    this.setState({searchField: e.target.value});
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
        //<CardList monsters={filteredMonsters}/>
      return (
        <div className="App">
          <h1> The Papermasters, Inc. </h1>

        <div className="footer">
          <h5>2021 The Papermasters, Inc.</h5>
        </div>
        </div>
    );
  }
}

export default App;
