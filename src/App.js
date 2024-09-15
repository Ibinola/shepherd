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
  return (
    <Router>
      <Routes>
        {/* Routes without Sidebar and Navbar */}
        <Route path="/" element={<SignupStepOne />} />
        <Route path="/tutor" element={<SignupTutor />} />

        {/* Routes with Sidebar and Navbar */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="clients" element={<Client />} />
          <Route path="offers" element={<Offers />} />
          <Route path="messages" element={<Messages />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
