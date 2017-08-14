import React, {Component} from 'react';
import './App.css';
import HexMap from './components/HexMap';

class App extends Component {
    render() {
        return (
            <div className="App">
                <HexMap width="800" height="800" shape="rect" radius="6" hexHeight="15" hexWidth="10"/>
            </div>
        );
    }
}

export default App;
