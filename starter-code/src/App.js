import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import ContactItem from './components/ContactItem'
import contacts from '../src/contacts.json';

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <table>
        <tbody>
      <ContactItem />
      </tbody>
      </table>
      </div>
    );
  }
}

export default App;
