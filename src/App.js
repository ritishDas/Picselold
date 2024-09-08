import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./Components/Navbar";
import ShowEvents from "./pages/ShowEvents";

import AboutN from "./pages/AboutN";
import Gallery from "./pages/Gallery";
/*import CreateEventN from "./pages/CreateEventN";

import EventDetails from "./pages/EventDetails";
import PrivateRouts from "./Components/auth/PrivateRouts";
import MemberDetails from "./pages/MemberDetails";
import ContactUs from "./pages/ContactUs";
// import MemberDetailsN from "./pages/MemberDetailsN";
// import About from "./pages/About";
// import { ContactUsN } from "./pages/ContactUsN";
*/
function App() {
  return (
    <div className=" w-full bg-gray-900">
      <Navbar />
	
	  <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/events/ShowEvent" element={<ShowEvents/>}></Route>
        <Route path="/events/gallery" element={<Gallery/>}></Route>
        <Route path="/about" element={<AboutN/>}></Route>
	  {/*<Route path="event/:eventId" element={<EventDetails />} />
        <Route path="member/:memberId" element={<MemberDetails/>} />
        */}
        
      </Routes>
    </div>
  );
}

export default App;
