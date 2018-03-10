import React from "react";
import { Image, BackHandler } from "react-native";
import {
	Card,
	CardItem,
	Text,
	Button,
	Icon,
} from "native-base";

export default class WorkoutCard extends React.Component {
	render() {
		return (
			<Card style={{ flex: 0 }}>
                <CardItem>
                    <Image
                        style={{ resizeMode: "cover", height: 200, flex: 1 }}
                        source={{ uri: "https://assets-cdn.github.com/images/modules/logos_page/Octocat.png" }}
                    />
                </CardItem>
                <CardItem>
                    <Button transparent>
                        <Icon name="logo-github" />
                        <Text>15,021 stars</Text>
                    </Button>
                </CardItem>
            </Card>
		);
	}
}
