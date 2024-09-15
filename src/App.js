import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout"; // Main layout with Sidebar and Navbar
import Dashboard from "./pages/dashboard/Dashboard";
import Client from "./pages/client/Client";
import Offers from "./pages/offers/Offers";
import Messages from "./pages/messages/Messages";
import Settings from "./pages/settings/Settings";
import SignupStepOne from "./pages/signup/SignupStepOne";
import SignupTutor from "./pages/signup/SignupTutor";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="flex font-inter">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="flex flex-col flex-1">
          <Navbar toggleSidebar={toggleSidebar} />
          {/* Main content area where the routes will render */}
          <div className="">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/clients" element={<Client />} />
              <Route path="/offers" element={<Offers />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
