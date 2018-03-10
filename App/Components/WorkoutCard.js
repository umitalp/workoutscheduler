import React from "react";
import { Image, BackHandler } from "react-native";
import {
	Card,
	CardItem,
	Text,
	Button,
	Icon,
} from "native-base";
import { connect } from "react-redux";
import images from '../Themes/Images'

class WorkoutCard extends React.Component {

    onParticipate = (tag) => {

    }

	render() {
        const { title, tag } = this.props
		return (
			<Card style={{ flex: 0 }}>
                <CardItem>
                    <Text>{title}</Text>
                </CardItem>
                <CardItem>
                    <Image
                        style={{ resizeMode: "cover", height: 200, flex: 1 }}
                        source={images.aerobic}
                    />
                </CardItem>
                <CardItem>
                    <Button transparent  >
                        <Text>Participate</Text>
                        <Icon name="arrow-forward" />
                    </Button>
                </CardItem>
            </Card>
		);
	}
}

const mapDispatchToProps = state => {
    return {
        
    }
};
  
  export default connect(null, mapDispatchToProps)(WorkoutCard);
