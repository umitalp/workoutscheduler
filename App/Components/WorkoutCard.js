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
import { selectWorkout } from '../Redux/WorkoutRedux'

class WorkoutCard extends React.Component {

    onParticipate = (title) => {
        this.props.selectWorkout(title)
        this.props.navigation.navigate("ListScreen")
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
                    <Button onPress={() => this.onParticipate(title)} transparent>
                        <Text>Participate</Text>
                        <Icon name="arrow-forward" />
                    </Button>
                </CardItem>
            </Card>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
    selectWorkout: (workout) => dispatch(selectWorkout(workout))
})

export default connect(null, mapDispatchToProps)(WorkoutCard);

