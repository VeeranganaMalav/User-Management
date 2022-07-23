import React from "react";
import Button from "react-bootstrap/Button";

import Table from 'react-bootstrap/Table';


const User = (props) => {
  return (
    <div>
      <h3>User Details</h3>
      <Button>Edit User</Button>
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
            <td>Mark</td>
            <td>Otto</td>
            <td>tm@gmail.com</td>
            <td>123 Lane, City, State, Pin Code</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default User;
