/**
 * Created by maluramichael on 25/08/16.
 */
import React, { Component } from 'react';
import {
	Text,
	View
} from 'react-native';
import Style from './style';

export default class Dashboard extends Component {
	render() {
		return (
			<View style={Style.container}>
			</View>
		)
	}

	static navigationBarVisible() {
		return true;
	}

	static navigationBarColor() {
		return '#777';
	}
}