import React, {Component} from 'react';
import {RegularPolygon} from 'react-konva';

export default class Hexagon extends Component {
    render() {
        return (
            <RegularPolygon x={this.props.x} y={this.props.y} sides="6" radius="30" stroke="black"
                            rotation="30"/>
        );
    }
}