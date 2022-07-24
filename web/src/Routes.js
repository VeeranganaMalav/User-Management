import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Signup, Login, DisplayUser, UpdateUser } from './Containers';

const AppRoutes = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/updateUserDetails" element={<UpdateUser {...props} />} />
        <Route path="/userDetails" element={<DisplayUser {...props} />} />
        <Route path="/signup" element={<Signup {...props} />} />
        <Route path="/login" element={<Login {...props} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
