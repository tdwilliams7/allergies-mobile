import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Content } from 'native-base';

// Components
import TopBar from './components/Header';
import Main from './components/Main';
import ProfileScreen from './screens/profile';

export default class App extends Component {
  render() {
    return (
      <Container>
        <ProfileScreen />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
