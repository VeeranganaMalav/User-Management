import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Signup, Login, User, UpdateUser } from './Containers';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userDetails" element={<User />} />
        <Route path="/updateUserDetails" element={<UpdateUser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
