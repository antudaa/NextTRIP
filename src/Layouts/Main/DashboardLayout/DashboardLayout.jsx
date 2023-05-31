import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardTopHeader from '../../../Components/DashboardComponents/DashboardTopHeader';
import DashboardSideNav from '../../../Components/DashboardComponents/DashboardSideNav';

const DashboardLayout = () => {
    return (
        <div>
            <DashboardTopHeader />
            <DashboardSideNav />
            <Outlet />
        </div>
    );
};

export default DashboardLayout;