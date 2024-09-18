import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout"; // Main layout with Sidebar and Navbar
import Dashboard from "./pages/dashboard/Dashboard";
import Client from "./pages/client/Client";
import Offers from "./pages/offers/Offers";
import Messages from "./pages/messages/Messages";
import Settings from "./pages/settings/Settings";
import SignUp from "./pages/signup/SignUp";
// import { UserContextProvider } from "./context/UserContext";

function App() {
  return (
    // <UserContextProvider>
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />

        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/clients" element={<Client />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
    // </UserContextProvider>
  );
}

export default App;
