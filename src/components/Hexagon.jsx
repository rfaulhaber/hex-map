import React, {Component} from 'react';
import {RegularPolygon} from 'react-konva';

const radius = 30;

export default class Hexagon extends Component {
    render() {
        return (
            <RegularPolygon x={this.props.x} y={this.props.y} sides="6" radius={radius} stroke="black"
                            rotation="30"/>
        );
    }
}

export function hexToPixel(q, r) {
    const [f0, f1, f2, f3] = layoutFlat;

    const x = (f0 * q + f1 * r) * Layout.size.x;
    const y = (f2 * q + f3 * r) * Layout.size.y;

    return point(x + Layout.origin.x, y + Layout.origin.y);
}

const Layout = {
    size: point(radius, radius),
    origin: point(30, 30)
};

const layoutFlat = [
    3.0 / 2.0, 0.0, Math.sqrt(3.0) / 2.0, Math.sqrt(3.0),
    2.0 / 3.0, 0.0, -1.0 / 3.0, Math.sqrt(3.0) / 3.0,
    0.0
];

function point(x, y) {
    return {x, y};
}