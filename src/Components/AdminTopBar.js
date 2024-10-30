import React from 'react'
import logo from '../images/ZED_PLUS__1_-removebg-preview.png'
import './admintopbar.css';

const AdminTopBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary navbody" style={{"borderBottom":"1px solid rgb(199, 198, 198)"}}>
                <div className="container-fluid ">
                    <div className='logosection'>
                        <div>
                            <img src={logo} className='logo' alt='logo' />
                        </div>
                        <div className='logotext d-flex aligen-item-end'>
                            <h4 className='colorcss'>ZED</h4>
                            <h4 className='colorcss1'>PLUS</h4>
                        </div>
                    </div>
                    <div>
                        {/* <a className="navbar-brand" href="/">Hidden brand</a> */}
                        {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href='/' aria-disabled="true">Disabled</a>
                            </li>
                        </ul> */}
                        <div className="btn-group">
                            <button type="button" className="btn btn-primary admininfo dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                                A
                            </button>
                            <ul className="dropdown-menu dropdown-menu-lg-end profile">
                                <li className='liItems'><a className="dropdown-item" href="/"><i className="fa fa-user-circle-o mx-2" ></i>My Profile</a></li>
                                <li className='liItems'><a className="dropdown-item" href="/"><i className="fa fa-cog mx-2"></i>Edit Profile</a></li>
                                <li className='liItems'><a className="dropdown-item" href="/"><i className="fa fa-inbox mx-2"></i>Inbox</a></li>
                                <li className='liItems'><a className="dropdown-item" href="/"><i className="fa fa-info-circle mx-2"></i>Help</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li className='liItems' style={{ "borderTop": "1px solid white", "marginTop": "2px"}}><a className="dropdown-item" href="/"><i className="fa fa-power-off mx-2"></i>Sign Out</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default AdminTopBar
