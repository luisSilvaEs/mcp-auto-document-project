import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginForm from "../pages/login";
import Home from "../pages/home";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
