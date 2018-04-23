import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {
  Container,
  Icon,
  Button,
  Header,
  Left,
  Right,
  Body,
  Title,
  Thumbnail
} from 'native-base';
import styled from 'styled-components';

class TopBar extends Component {
  render() {
    const picURI =
      'https://s3-us-west-2.amazonaws.com/allergyfinder/ProfPic.jpg';
    return (
      <View>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>All Good</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>
      </View>
    );
  }
}

const StyledContainer = styled(Container)`
  background-color: rgb(88, 146, 146);
`;

export default TopBar;
