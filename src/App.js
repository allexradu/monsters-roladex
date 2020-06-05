import React, {Component} from 'react';
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box";
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            monsters: [],
            searchField: ''
        }

        // this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({monsters: users}
            ))
    }

    handleChange = (syntheticEvent) => {
        this.setState({searchField: syntheticEvent.target.value})
    }

    render() {
        const {monsters, searchField} = this.state
        const filteredMonsters =
            monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
        return (
            <div className = "App">
                <h1 className = "Title"> Monsters Roladex</h1>
                <h2 className = "author">by Allex Radu</h2>
                <SearchBox
                    placeholder = 'search monsters'
                    handleChange = {this.handleChange}
                />
                <CardList monsters = {filteredMonsters}/>

            </div>
        )
    }
}

export default App
