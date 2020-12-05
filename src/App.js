
import './App.css';
import React, { Component } from 'react'
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

class App extends Component {
  constructor() {
    super();
    this.state = {
      heroes: [],
      searchField: ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ heroes: users }));
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }
  render() {
    const { heroes, searchField } = this.state;
    const filterdHeroes = heroes.filter(hero =>
      hero.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1 className='hero-h1'>Heros Ground</h1>
        <SearchBox
          placeholder='search heros'
          handleChange={this.handleChange} />
        <CardList heroes={filterdHeroes}>
        </CardList>
      </div>
    )
  }
}



export default App;
