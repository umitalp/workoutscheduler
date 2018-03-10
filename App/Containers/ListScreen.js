import React from "react";
import { connect } from "react-redux";
import { FlatList } from "react-native";
import { List, ListItem, Text, View, Container, Header, Title, Button, Left, Right, Body, Icon } from "native-base";

class ListScreen extends React.Component {
  render() {
    const { selectedWorkout } = this.props
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body style={{ flex: 3 }}>
            <Title>{selectedWorkout} Participants</Title>
          </Body>
          <Right />
        </Header>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedWorkout: state.workout.selectedWorkout
})

export default connect(mapStateToProps)(ListScreen);
