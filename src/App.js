import React, {Component} from 'react';
import './App.css';
import HexMap from './components/HexMap';

class App extends Component {
    render() {
        return (
            <div className="App">
                <HexMap width={window.innerWidth} height={window.innerHeight}/>
            </div>
        );
    }
}

export default App;
