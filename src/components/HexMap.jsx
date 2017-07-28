import React, {Component} from 'react';
import {Stage, Layer} from 'react-konva';
import Hexagon from './Hexagon';

export default class HexMap extends Component {
    render() {
        return (
            <Stage width="400" height="400">
                <Layer>
                    <Hexagon/>
                </Layer>
            </Stage>
        );
    }
}
