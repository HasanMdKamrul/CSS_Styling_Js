import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
          <h1>
            <Link to='/login'>LogIn</Link>
            <Link to='/register'>Register</Link>
            </h1>  
            <Outlet/>
        </div>
    );
};

export default Main;