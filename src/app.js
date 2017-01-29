import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBeMXN2jdzeiMYYjU-jg011BZuxSRSdSUE',
      authDomain: 'auth-d1e95.firebaseapp.com',
      databaseURL: 'https://auth-d1e95.firebaseio.com',
      storageBucket: 'auth-d1e95.appspot.com',
      messagingSenderId: '289616627101'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
