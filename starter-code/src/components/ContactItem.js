import React, { Component } from "react";


const ContactItem = props => {
  return (
    <tr>
      <td>
        <img src={ props.pictureUrl } alt="img" className="img-thumbnail" />
      </td>
      <td>{ props.name } </td>
      <td>{ props.popularity } </td>
    </tr>
  );
};

export default ContactItem;
