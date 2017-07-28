import React, {Component} from 'react';
import {RegularPolygon} from 'react-konva';

export default class Hexagon extends Component {
    render() {
        return (
            <RegularPolygon x="200" y="200" sides="6" radius="30" stroke="black" rotation="30"/>
        );
    }
}