import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import ReduxNavigation from "../Navigation/ReduxNavigation";
import { connect } from "react-redux";
import StartupActions from "../Redux/StartupRedux";
import ReduxPersist from "../Config/ReduxPersist";
import io from 'socket.io-client';

import styles from "./Styles/RootContainerStyles";
import { addParticipantToRedux, removeParticipantFromRedux } from "../Redux/WorkoutRedux";

let socket

class RootContainer extends Component {
	constructor(props)
	{
		super(props)
		const {dispatch} = this.props
		
		socket = io.connect("http://localhost:3030")
		
		// Send avaliable data to Redux
		socket.on('initial', data => {
			dispatch(loadSocketDataToRedux(data))
		})
		
		// Tell Redux that we have new participant
		socket.on('participantAdded', data => {
			const participant = {
				name: data.name,
				workout: data.workout
			}

			dispatch(addParticipantToRedux(participant))
		})

		// Tell Redux that a participant was removed
		socket.on('participantRemoved', data => {
			const participant = {
				name: data.name,
				workout: data.workout
			}

			dispatch(removeParticipantFromRedux(participant))
		})
	}

	componentDidMount() {
		// if redux persist is not active fire startup action
		if (!ReduxPersist.active) {
			this.props.startup();
		}
		
	}

	componentWillUnmount() {
		socket.disconnect()
	}

	render() {
		return (
			<View style={styles.applicationView}>
				<StatusBar barStyle="light-content" />
				<ReduxNavigation />
			</View>
		);
	}
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = dispatch => ({
	startup: () => dispatch(StartupActions.startup()),
});

const mapStateToProps = (state = {}) => {
    return {...state};
};

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
