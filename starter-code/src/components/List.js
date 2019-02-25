import React, { Compponents } from 'react';

import '../contacts.json'

export default class List extends Component {

  constructor (props){
    super(props);
    this.state = {
      contacts: this.props.contacts
    }
  }


  

}