import React from "react";
import { connect } from "react-redux";
import { FlatList } from "react-native";
import { List, ListItem, Text, View, Container, Header, Title, Button, Left, Right, Body, Icon } from "native-base";

import WorkoutCard from '../Components/WorkoutCard'

const dataObjects = [
  { title: "Aerobic", tag: 'aerobic', image: require("../Images/aerobic.jpg") },
  { title: "Gym", tag: 'gym', image: require("../Images/gym.jpg")  },
  { title: "Pilates", tag: 'pilates', image: require("../Images/pilates.jpg")  },
  { title: "Runing", tag: 'run', image: require("../Images/run.png")  },
  { title: "Yoga", tag: 'yoga', image: require("../Images/yoga.jpg")  }
];

export default class WorkoutListScreen extends React.Component {

  _renderItem = ({ item }) => {
    return (
      <WorkoutCard
        title={item.title}
        tag={item.tag}
        image={item.image}
        navigation={this.props.navigation}
      />
    );
  };

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body style={{ flex: 3 }}>
            <Title>Avaliable Workouts</Title>
          </Body>
          <Right />
        </Header>
        <FlatList data={dataObjects} keyExtractor={item => item.title} renderItem={this._renderItem} />
      </Container>
    );
  }
}
