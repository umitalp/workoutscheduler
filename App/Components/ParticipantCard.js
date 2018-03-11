import React from "react";
import {
    Card,
    CardItem,
    Text,
    Icon,
    Right,
    Left,
    Body
} from "native-base";

export default class ParticipantCard extends React.Component {

	render() {
        const { name } = this.props
		return (
		<Card style={{ flex: 0 }}>
            <CardItem>
                <Left>
                    <Icon name="person"/>
                    <Body>
                        <Text>{name}</Text>
                    </Body>
                </Left>
            </CardItem>
        </Card>
		);
	}
}


