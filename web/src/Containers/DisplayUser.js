import React from "react";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';

const DisplayUser = (props) => {
  const { user } = props;
  const { firstName, lastName, email, address} = user;

  const handleClick = () => {
    console.log('clicked edit user in display user');
  }

  return (
    <div>
      <h3>User Details</h3>
      <Link to={`/updateUserDetails`}>
        <Button onClick={handleClick}>Edit User</Button>
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{email}</td>
            <td>{address}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default DisplayUser;
