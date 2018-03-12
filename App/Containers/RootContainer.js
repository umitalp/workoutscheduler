import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import ReduxNavigation from "../Navigation/ReduxNavigation";
import { connect } from "react-redux";
import StartupActions from "../Redux/StartupRedux";
import ReduxPersist from "../Config/ReduxPersist";
import { socket, connectToSocket, disconnectFromSocket } from '../Services/Socket'

import styles from "./Styles/RootContainerStyles";
import { addParticipantToRedux, removeParticipantFromRedux, setupSocketToRedux } from "../Redux/WorkoutRedux";

class RootContainer extends Component {
	constructor(props)
	{
		super(props)
		connectToSocket()

		// Send avaliable data to Redux
		// socket.on('initial', data => {
		// 	dispatch(loadSocketDataToRedux(data))
		// })
		
		// Tell Redux that we have new participant
		socket.on('participantAdded', data => {
			this.props.addParticipantToRedux(data.name, data.workout)
		})

		// Tell Redux that a participant was removed
		socket.on('participantRemoved', data => {
			this.props.removeParticipantToRedux(data.name, data.workout)
		})

	}

	componentDidMount() {
		// if redux persist is not active fire startup action
		if (!ReduxPersist.active) {
			this.props.startup();
		}
		
	}

	componentWillUnmount() {
		disconnectFromSocket()
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
	addParticipantToRedux: (name, workout) => dispatch(addParticipantToRedux(name, workout)),
	removeParticipantFromRedux: (name, workout) => dispatch( removeParticipantFromRedux(name, workout))
});

const mapStateToProps = (state = {}) => {
    return {...state};
};

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
