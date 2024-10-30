import React from 'react'
// import { Link, Outlet } from 'react-router-dom';
import AdminTopBar from './AdminTopBar';
import SideBar from './Sidebar'
// import Status from './Status';
import './admindashboard.css';
import CurrentStatus from './CurrentStatus';

const Admindashboard = () => {
    const currentDateTime = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDateTime.toLocaleDateString(undefined, options);

    return (
        <div className='dash-body'>
            <div className='admintopbar'>
                <AdminTopBar />
            </div>
            <div className='main-content'>
                <div className='adminsidebar'>
                    <SideBar />
                </div>
                <div className='status page'>
                    <div className='status-navbar'>
                        <div className='timezone'>
                            <p>{formattedDate}</p>
                        </div>
                        <div className='btn-grp'>
                            <button className='btn btn-secondary'>All Entries</button>
                            <button className='btn btn-success'>Successful</button>
                            <button className='btn btn-danger'>Rejected</button>
                            <button className='btn btn-primary'>Unknown</button>
                        </div>
                    </div>
                    <div className='status-contet'>
                        <CurrentStatus/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admindashboard
