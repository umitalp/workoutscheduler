import React, { PropTypes } from "react";
import { View, ScrollView, TextInput, TouchableOpacity, Image, Keyboard, LayoutAnimation } from "react-native";
import { connect } from "react-redux";
import { Images, Metrics } from "../Themes";
import LoginActions from "../Redux/LoginRedux";
import { Header, Body, Title, Button, Text, Contant, Form, Item, Input, Label } from "native-base";

class LandingScreenView extends React.Component {
	render() {
		return (
			<ScrollView
				contentContainerStyle={{ justifyContent: "center" }}
				keyboardShouldPersistTaps="always"
			>
				<Header>
					<Body style={{ flex: 1 }}>
						<Title>Welcome Screen</Title>
					</Body>
				</Header>
			</ScrollView>
		);
	}
}

const mapStateToProps = state => {
	return {

	}
}

const mapDispatchToProps = dispatch => {
	return {

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingScreenView);
