import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth } from './redux/authslice';
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./utils/PrivateRoute"

import Homepage from './views/homepage'
import Register from './views/register'
import LoginPage from './views/loginpage'
import Dashboard from './views/dashboard'

function App() {

  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
    
      <Router>
        <Routes>
          <Route path ='/' element = {<LoginPage/>} />
          </Routes>
      </Router>
      <ToastContainer />
    
    </>
  );
}

export default App;



