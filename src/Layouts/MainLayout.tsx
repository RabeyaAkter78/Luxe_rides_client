import React from 'react';
import NavBar from '../Shared/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <NavBar/>
          <Outlet/>
        </div>
    );
};

export default MainLayout;