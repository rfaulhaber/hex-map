import React, {Component} from 'react';
import {Stage, Layer} from 'react-konva';
import Hexagon, {hexToPixel} from './Hexagon';

export default class HexMap extends Component {
    render() {
        let ret = generateShape(this.props.shape, {
            radius: Number(this.props.radius),
            width: Number(this.props.hexWidth),
            height: Number(this.props.hexHeight)
        });

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

function generateShape(shape, properties) {
    if (shape === 'hex') {
        return calculateHexGrid(properties.radius);
    } else if (shape === 'rect') {
        return calculateRectGrid(properties);
    } else {
        return calculateHexGrid(properties.radius);
    }
}

function calculateHexGrid(radius) {
    const ret = [];

    for (let x = -radius; x <= radius; x++) {
        const y1 = Math.max(-radius, -x - radius);
        const y2 = Math.min(radius, -x + radius);
        for (let y = y1; y < y2; y++) {
            ret.push(hexToPixel(x, y));
        }
    }

    return ret;
}

function calculateRectGrid({width, height}) {
    const ret = [];

    for (let q = 0; q < height; q++) {
        const offset = q >> 1;

        for (let s = -offset; s < width - offset; s++) {
            ret.push(hexToPixel(q, s));
        }
    }

    return ret;
}
