import React,{ Component } from 'react';
import { robots } from './robots';
import CardList from './CardList';
// import SearchBox from './SearchBox';
import './App.css';

class App extends Component{
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
    submitHandler = (event) => {
        alert(`${this.state.searchfield}`)
        event.preventDefault()
    }

    

    render() {
    const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
        return (
            <div className='tc'>
                <h1 className='f1'>Our Robot Friends</h1>
                <div>
                    <input type="text" value={this.state.searchfield} onChange = {this.onSearchChange}/>
                    <button type="submit" onClick={this.submitHandler}>Search</button>
                </div>
                <CardList robots = {filteredRobots}/>
                
            </div>
        );

    }
}

export default App 
