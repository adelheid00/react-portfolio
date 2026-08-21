import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ContactPageComponent from "../components/contact-page-component/ContactPageComponent";
import HomePageComponent from "../components/home-page-component/HomePageComponent";
import NavigationBarComponent from "../components/navigation-bar-component/NavigationBarComponent";

export default function AppRoutes() {
  return (
    <Router>
      {/* Navigation bar always visible */}
      <NavigationBarComponent />

      {/* Define routes */}
      <Routes>
        <Route path="/home" element={<HomePageComponent />} />
        <Route path="/contact" element={<ContactPageComponent />} />
      </Routes>
    </Router>
  );
}
