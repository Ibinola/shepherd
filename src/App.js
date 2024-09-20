import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/MainLayout"; // Main layout with Sidebar and Navbar
import Dashboard from "./pages/dashboard/Dashboard";
import Client from "./pages/client/Client";
import Offers from "./pages/offers/Offers";
import Messages from "./pages/messages/Messages";
import Settings from "./pages/settings/Settings";
import SignUp from "./pages/signup/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "clients",
        element: <Client />,
      },
      {
        path: "offers",
        element: <Offers />,
      },
      {
        path: "messages",
        element: <Messages />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);

console.log(router.routes)
function App() {
  return <RouterProvider router={router} />;
}

export default App;
