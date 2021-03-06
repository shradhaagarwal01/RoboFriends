import React,{ Component } from 'react';
import { robots } from './robots';
import CardList from './CardList';
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
        document.title = 'RoboFriends'

    const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <div>
                    <input className='f6 link ba bw1 ph3 pv2 mb2 dib black' type="text" value={this.state.searchfield} onChange = {this.onSearchChange}/>
                    <button className='f6 link ba bw1 ph3 pv2 mb2 dib black' type="submit" onClick={this.submitHandler}>🔍</button>
                </div>
                <CardList robots = {filteredRobots}/>
            </div>
        );

    }
}

export default App 