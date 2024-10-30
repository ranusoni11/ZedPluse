import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Product from './Components/Product';
import ParticlesComponent from './Components/ParticlesComponent';
import UserLogin from './Components/UserLogin';
import AdminLogin from './Components/AdminLogin';
import Orgnizationlogin from './Components/Orgnizationlogin';
import Registration from './Components/Registration';
// import CurrentStatus from './Components/CurrentStatus';
// import UnknownVehicle from './Components/UnknownVehicle';
import Admindashboard from './Components/Admindashboard';
import Forgotpassword from './Components/Forgotpassword';
// import Status from './Components/Status';
// import Rejected from './Components/Rejected';

// import ConditionalNavbarWrapper from './Components/ConditionalNavbarWrapper';

function App() {

  // const location = useLocation();
  // const noNavbarPaths = ["/user-login", "/admin-login", "admind-dashboard"];
  return (
    <Router>
      <div>
        <ParticlesComponent id="particles" />
        {/* <Navbar /> */}
        {/* {!noNavbarPaths.includes(location.pathname) && <Navbar />} */}
        <Routes>
          {/* <Route element={<ConditionalNavbarWrapper />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />

          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/organization" element={<Orgnizationlogin />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/fogpassword" element={<Forgotpassword />} />

          <Route path="/admind-dashboard" element={<Admindashboard />} />
          {/* <Route path="/current-status" element={<CurrentStatus/>} /> */}
          {/* <Route path="/rejected-vehicle" element={<Rejected/>} /> */}
          {/* <Route path="/unknown-vehicle" element={<UnknownVehicle />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
