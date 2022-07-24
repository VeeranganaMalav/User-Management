import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';

const DisplayUser = (props) => {
  const { user } = props;
  const { firstName, lastName, email, address} = user;

  let navigate = useNavigate();

  const handleClick = event => {
    event.preventDefault();
    navigate("/updateUserDetails", { replace: true, state: user });
  }

  return (
    <div>
      <h3>User Details</h3>
      <Button onClick={e => handleClick(e)}>Edit User</Button>
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
