import React from "react";
import { Image, BackHandler } from "react-native";
import {
	Card,
	CardItem,
	Text,
	Button,
  Icon,
  Right,
  Left,
  Body
} from "native-base";
import { connect } from "react-redux";
import images from '../Themes/Images'
import { selectWorkout, addParticipantToRedux } from '../Redux/WorkoutRedux'

class WorkoutCard extends React.Component {

  onParticipate = (title, tag) => {
    this.props.selectWorkout(title, tag)
    this.props.navigation.navigate("ListScreen")
  }

	render() {
    const { title, tag, image, workoutList } = this.props
		return (
			<Card style={{ flex: 0 }}>
        <CardItem>
          <Left>
            <Icon name="pulse"/>
            <Body>
              <Text>{title} Class</Text>
              <Text note>{workoutList[tag].length} participant</Text>
            </Body>
          </Left>
        </CardItem>
          <CardItem>
            <Image
              style={{ borderWidth: 1, borderColor: 'transparent', borderRadius: 10, resizeMode: "cover", height: 200, flex: 1 }}
              source={image}
            />
          </CardItem>
          <CardItem>
            <Left>
            </Left>
            <Body>
            </Body>
            <Right>
              <Button iconRight onPress={() => this.onParticipate(title, tag)} transparent>
                <Text>Participate</Text>
                <Icon name="arrow-forward" />
              </Button>
            </Right>
          </CardItem>
      </Card>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
  selectWorkout: (title, tag) => dispatch(selectWorkout(title, tag)),
  addParticipant: (name, workout) => dispatch(addParticipantToRedux(name, workout))
})

const mapStateToProps = (state) => ({
  workoutList: state.workout
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutCard);

