import React, {Component} from 'react';
import {Stage, Layer} from 'react-konva';
import Hexagon, {hexToPixel} from './Hexagon';

export default class HexMap extends Component {
    render() {
        let ret = [];

        for (let x = -5; x <= 5; x++) {
            const y1 = Math.max(-5, -x - 5);
            const y2 = Math.min(5, -x + 5);
            for (let y = y1; y < y2; y++) {
                ret.push(hexToPixel(x, y));
            }
        }

        return (
            <Stage width={this.props.width} height={this.props.height}>
                <Layer>
                    {ret.map(pair =>
                        <Hexagon x={pair.x} y={pair.y}/>
                    )}
                </Layer>
            </Stage>
        );
    }
}
