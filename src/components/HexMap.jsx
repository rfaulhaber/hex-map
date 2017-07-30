import React, {Component} from 'react';
import {Stage, Layer} from 'react-konva';
import Hexagon, {hexToPixel} from './Hexagon';

export default class HexMap extends Component {
    render() {

        let ret = [];

        for (let x = 0; x < 5; x++) {
            for (let y = 0; y < 5; y++) {
                ret.push(hexToPixel(x, y))
            }
        }

        console.log(ret);

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

function hexColumn(columnCenter) {
    const plus = columnCenter + 60;
    const minus = columnCenter - 60;
    const zero = columnCenter;

    if (columnCenter & 1) {
        return [
            set(plus,  zero), set(plus, minus), set(zero, minus),
                set(minus, minus), set(minus,  zero), set(zero, plus),
            set(zero, zero)
        ];
    } else {
        return [
            set(plus, plus), set(plus,  zero), set(zero, minus),
                set(minus,  zero), set(minus, plus), set(zero, plus), set(zero, zero)
        ];
    }
}

function magnitude(amount, scale) {
    const mag = 30;
    return amount + (scale * mag);
}

function set(x, y) {
    const q = x * 2/3 / 30;
    const r = (-x / 3 + Math.sqrt(3)/3 * y) / 30;
    return {x: q, y: r};
}
