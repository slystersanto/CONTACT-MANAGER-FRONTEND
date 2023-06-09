import React from 'react';
import 'boxicons/css/boxicons.min.css';
import { Routes, Route,Navigate } from 'react-router-dom';
import Navbar from './Compnents/Navbar';
import ContactList from './Compnents/ContactList';
import AddContact from './Compnents/AddContact';
import EditContact from './Compnents/EditContact';
import ViewContact from './Compnents/ViewContact';
import Spinner from './Compnents/Spinner';
import Login from './Compnents/Login';
import Register from './Compnents/Register';

const App = () => {
  return (
    <React.Fragment>
     
      <Navbar />
      <Routes>
  <Route path={"/"} element={<Navigate to={"/contactlist"}/>}/>
  <Route path={"/contactlist"} element={<ContactList />} />
  <Route path={"/addcontact"} element={<AddContact />} />
  <Route path={"/viewcontact/:contactId"} element={<ViewContact />} />
  <Route path={"/editcontact/:contactId"} element={<EditContact />} />
  <Route path={"/login"} element={<Login />} />
  <Route path={"/register"} element={<Register />} />
</Routes>


    </React.Fragment>
  );
}

export default App;
