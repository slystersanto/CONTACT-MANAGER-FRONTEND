import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
      <div className='container'>
        <Link to='/contactlist' className='navbar-brand'>
          <i className='bx bx-mobile text-warning' /> Contact <span className='text-warning'>Manager</span>
        </Link>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link to='/contactlist' className='nav-link'>
                Contacts
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/addcontact' className='nav-link'>
                Add Contact
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/login' className='nav-link'>
                Login
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/register' className='nav-link'>
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
