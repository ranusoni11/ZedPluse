import React, { useState, useEffect } from 'react'
import './sidebar.css'
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/solid';

const Sidebar = () => {
const [AdminName, setAdminName] = useState();

    useEffect(() => {
        setAdminName("Shubham")
      }, []);

    const [dropdowns, setDropdowns] = useState({
        ddi1: true,
        ddi2: false,
        ddi3: false,
    });

    const toggleDropdown = (dropdownId) => {
        setDropdowns((prevDropdowns) => ({
            ...prevDropdowns,
            [dropdownId]: !prevDropdowns[dropdownId],
        }));
    };

    return (
        <div>
            <div className='sidebar-body'>
                <div className='sidebar-card'>
                    <div className='adminwlc'>
                        <h4>Welcom {AdminName}</h4>
                    </div>
                    <div className='sidebar-items'>
                        <div className='item-1'>
                            <div className="sidebarul">
                                <ul className="dropItems">

                                    <li onClick={() => toggleDropdown("ddi1")} className="sidebarul-item">
                                        <div className="sidebar-item-header">
                                            <span>User</span>
                                            {dropdowns.ddi1 ? <ChevronDownIcon className="icon" /> : <ChevronRightIcon className="icon" />}
                                        </div>
                                        {dropdowns.ddi1 && (
                                            <ul className="Sidebardropdown">
                                                <li className="Sidebardropdown-item">Add User</li>
                                                <li className="Sidebardropdown-item">Manage User</li>
                                            </ul>
                                        )}
                                    </li>

                                    <li onClick={() => toggleDropdown("ddi2")} className="sidebarul-item">
                                        <div className="sidebar-item-header">
                                            <span>Dashboard</span>
                                            {dropdowns.ddi2 ? <ChevronDownIcon className="icon" /> : <ChevronRightIcon className="icon" />}
                                        </div>
                                        {dropdowns.ddi2 && (
                                            <ul className="Sidebardropdown">
                                                <li className="Sidebardropdown-item">Overview</li>
                                                <li className="Sidebardropdown-item">Analytics</li>
                                            </ul>
                                        )}
                                    </li>

                                    <li onClick={() => toggleDropdown("ddi3")} className="sidebarul-item">
                                        <div className="sidebar-item-header">
                                            <span>Settings</span>
                                            {dropdowns.ddi3 ? <ChevronDownIcon className="icon" /> : <ChevronRightIcon className="icon" />}
                                        </div>
                                        {dropdowns.ddi3 && (
                                            <ul className="Sidebardropdown">
                                                <li className="Sidebardropdown-item">Account Settings</li>
                                                <li className="Sidebardropdown-item">Security</li>
                                            </ul>
                                        )}
                                    </li>

                                    <li className="sidebarul-item">Logout</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
