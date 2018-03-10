import React from "react";
import { connect } from "react-redux";
import { FlatList } from "react-native";
import { List, ListItem, Text, View, Container, Header, Title, Button, Left, Right, Body, Icon } from "native-base";
// import Icon from 'react-native-vector-icons/Ionicons'

import WorkoutCard from '../Components/WorkoutCard'
const dataObjects = [
    { title: "Aerobic", tag: 'aerobic' },
    { title: "Gym", tag: 'gym' },
    { title: "Pilates", tag: 'pilates' },
    { title: "Runing", tag: 'run' },
    { title: "Yoga", tag: 'yoga' }
  ];
export default class WorkoutListScreen extends React.Component {

  _renderItem = ({ item }) => {
    return (
      <WorkoutCard title={item.title} tag={item.tag} navigation={this.props.navigation} />
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
            <Title>List Example</Title>
          </Body>
          <Right />
        </Header>
        <FlatList data={dataObjects} keyExtractor={item => item.title} renderItem={this._renderItem} />
      </Container>
    );
  }
}
