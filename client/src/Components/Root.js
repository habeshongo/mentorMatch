import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
const Root = () => {
    return (
        <div>
            <Navbar />
            <main>
                <Outlet />
            </main>

        </div>
    );
};

export default Root;