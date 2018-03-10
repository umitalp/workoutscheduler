import React from "react";
import { ScrollView, Text, Image, View } from "react-native";
import { Button, Text as NBText } from "native-base";
import { Images } from "../Themes";

// Styles
import styles from "./Styles/LaunchScreenStyles";

export default class LaunchScreen extends React.Component {
	render() {
		return (
			<View style={styles.mainContainer}>
				<ScrollView style={styles.container}>
					<View style={styles.centered}>
						<Image source={Images.gym} style={styles.logo} />
					</View>

					<View style={styles.section}>
						<Text style={styles.sectionText}>
							{
								"This probably isn't what your app is going to look like. Unless your designer handed you this screen and, in that case, congrats! You're ready to ship. For everyone else, this is where you'll see a live preview of your fully functioning app using Ignite."
							}
						</Text>
					</View>
					<Button
						style={{ alignSelf: "center" }}
						onPress={() => this.props.navigation.navigate("ListScreen")}
					>
						<NBText>Explore!</NBText>
					</Button>
				</ScrollView>
			</View>
		);
	}
}
