import React from 'react'
import Avatar from 'react-avatar';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteContact } from '../../actions/contactaction';
//* Using the avatar method to create our contact avatar monogram
//*This are the table formats that will be returned in our map function and we pass props to our function to use the mapped index
//*Contacts will receive 2 props from contact.js
export const Contacts = ({ contact, SelectAll }) => {
  //*adding the dispatch method to call the action from our store
  const dispatch = useDispatch();
  //*destructuring our contact info into the following components
  const { name, phone, email, website, id } = contact;
  return (
    <tr>
      <th scope="row">
        <div className="custom-control custom-checkbox">
          <input checked={SelectAll} type="radio" className="custom-control-input" />
          <label className="custom-control-label" />
        </div>
      </th>
      <td>
        <Avatar className="me-3" name={name} size="40" round={true} />
        {name}
      </td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>{website}</td>
      <td>
        <Link to={`/contacts/edit/${id}`}>
          <span className="material-icons">edit</span>
        </Link>
        <Link to="/">
          <span
            className="material-icons"
            onClick={() => dispatch(deleteContact(id))}>
            delete_forever
          </span>
        </Link>
      </td>
    </tr>
  );
};
