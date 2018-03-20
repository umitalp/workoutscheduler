import React from "react";
import {
    Form,
    Item,
    Input,
    Label,
    Button,
    Text
} from "native-base";
import { connect } from "react-redux";
import { View } from 'react-native'
import { addParticipant } from '../Redux/actions'

class NameForm extends React.Component {

    state = {
        name: null
    }

    _onPress = () => {
      const { name } = this.state
      const { addParticipant, selectedWorkout } = this.props
      if( name ) {
        addParticipant(name, selectedWorkout.tag)
      }
    }

	render() {
		return (
      <View style={{
        margin: 10,
        padding: 5,
        backgroundColor: 'white',
        borderColor: 'transparent',
        borderRadius: 10,
        borderWidth: 1
      }} >
        <Form>
          <Item inlineLabel last>
            <Input
              placeholder="Name"
              onChangeText={name => this.setState({name})}
              value={this.state.name}
            />
          </Item>
        </Form>
        <Button style={{ margin: 5 }}  onPress={() => {this._onPress()}} block>
            <Text>Add</Text>
        </Button>
      </View>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
    addParticipant: (name, workout) => dispatch(addParticipant(name, workout))
})

const mapStateToProps = (state) => ({
    selectedWorkout: state.workout.selectedWorkout
})
  
export default connect(mapStateToProps, mapDispatchToProps)(NameForm);


