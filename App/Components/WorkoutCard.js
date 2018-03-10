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
import { selectWorkout } from '../Redux/WorkoutRedux'

class WorkoutCard extends React.Component {

  onParticipate = (title) => {
    console.tron.display({
      name: 'Props',
      value: {
        props: this.props
      }
    })
    this.props.selectWorkout(title)
    this.props.navigation.navigate("ListScreen")
  }

	render() {
        const { title, tag, image } = this.props
		return (
			<Card style={{ flex: 0 }}>
        <CardItem>
          <Left>
            <Icon name="pulse"/>
            <Body>
              <Text>{title} Class</Text>
              <Text note>by John</Text>
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
                <Text>100 participant</Text>
            </Left>
            <Body />
            <Right>
              <Button iconRight onPress={() => this.onParticipate(title)} transparent>
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
    selectWorkout: (workout) => dispatch(selectWorkout(workout))
})

export default connect(null, mapDispatchToProps)(WorkoutCard);

