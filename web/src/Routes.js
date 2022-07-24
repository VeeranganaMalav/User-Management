import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Signup, Login, DisplayUser, UpdateUser } from './Containers';

const AppRoutes = ({ setUser, user }) => {
  console.log(`render app routes`);
  console.log(`render app routes ${JSON.stringify(user)}`);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/userDetails" element={<DisplayUser setUser={setUser} user={user} />} />
        <Route path="/updateUserDetails" element={<UpdateUser setUser={setUser} user={user} />} />
        <Route path="/signup" element={<Signup setUser={setUser} user={user} />} />
        <Route path="/login" element={<Login setUser={setUser} user={user} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
