import React from 'react';
import NavBar from '../Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';

const MainLayout = () => {
    return (
        <div>
            <NavBar/>
          <Outlet/>
          <Footer/>
        </div>
    );
};

export default MainLayout;