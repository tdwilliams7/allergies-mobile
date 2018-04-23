import React, { Component } from 'react';
import Header from '../components/Header';
import { Text } from 'react-native';
import { Container, Content, List, ListItem } from 'native-base';
import styled from 'styled-components';

class ProfileScreen extends Component {
  state = {
    allergies: ['bees', 'bears', 'Beats', 'battle star galatica'],
    contacts: ['Mom', 'Dad'],
    doctors: ['Dr. Cool', 'Dr. Sweet', 'Dr. Awesome']
  };
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Title>Allergies</Title>
          <List>
            {this.state.allergies.map((allergy, i) => {
              return (
                <ListItem key={i}>
                  <Text>{allergy}</Text>
                </ListItem>
              );
            })}
          </List>
          <Title>Emergeny Contacts</Title>
          <List>
            {this.state.contacts.map((contact, i) => {
              return (
                <ListItem key={i}>
                  <Text>{contact}</Text>
                </ListItem>
              );
            })}
          </List>
          <Title>Doctors</Title>
          <List>
            {this.state.doctors.map((doctor, i) => {
              return (
                <ListItem key={i}>
                  <Text>{doctor}</Text>
                </ListItem>
              );
            })}
          </List>
        </Content>
      </Container>
    );
  }
}

const Title = styled(Text)`
  font-size: 20px;
  color: rgb(88, 146, 146);
`;
export default ProfileScreen;
