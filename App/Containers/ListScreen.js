import React from "react";
import { connect } from "react-redux";
import { FlatList, ScrollView } from "react-native";
import ParticipantCard from '../Components/ParticipantCard'
import { List, ListItem, Text, View, Container, Content, Header, Title, Button, Left, Right, Body, Icon } from "native-base";
import NameForm from "../Components/NameForm";

class ListScreen extends React.Component {
  _renderItem = ({ item }) => {
    return (
      <ParticipantCard name={item.name} />
    );
  };

  render() {
    const { selectedWorkout, workout } = this.props
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body style={{ flex: 3 }}>
            <Title>{selectedWorkout.Title} Participants</Title>
          </Body>
          <Right>
          </Right>
        </Header>
        <Content>
          <NameForm />
            <ScrollView>
              {workout[selectedWorkout.tag].map((e, index) =>  <ParticipantCard key={index} name={e.name} />)}
            </ScrollView>
          {/* <FlatList 
            data={workout[selectedWorkout.tag]}
            keyExtractor={item => item.name}
            renderItem={this._renderItem}
          /> */}
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedWorkout: state.workout.selectedWorkout,
  workout: state.workout
})

export default connect(mapStateToProps)(ListScreen);
