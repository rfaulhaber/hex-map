import React, {Component} from 'react';
import './App.css';
import HexMap from './components/HexMap';

class App extends Component {
    render() {
        return (
            <div className="App">
                <HexMap width="800" height="800"/>
            </div>
        );
    }
}

export default App;
