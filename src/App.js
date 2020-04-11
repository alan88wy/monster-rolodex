import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {CardList} from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then (response => response.json())
      .then (users => this.setState({monsters: users}));
  }

  onSearchChange() {

  }

  render() {

    const {monsters, searchField} = this.state;

    const filteredMonster = monsters.filter(
      monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
          <h1>Monsters Rolodex</h1>
          {/*
          <SearchBox onSearchChange = {this.onSearchChange} />
           */}
          <CardList monsters={this.state.monsters} />>





      </div>
    )
  }
}

export default App;
