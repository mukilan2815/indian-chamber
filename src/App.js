import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MembershipForm from "./page/MembershipForm";
import MyComponent from "./page/Home";
import Lifemembership from "./page/Lifemembership";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyComponent />} />
        <Route path="/membership" element={<MembershipForm />} />
        <Route path="/membershipapplication" element={<Lifemembership />} />
      </Routes>
    </Router>
  );
}

export default App;
