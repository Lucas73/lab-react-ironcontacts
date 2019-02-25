import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import contacts from '../src/contacts.json';

class App extends Component {
  render() {
    return (
      <Header />
    );
  }
}

export default App;
