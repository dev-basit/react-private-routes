import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </Router>
  );
}

export default App;

function Home() {
  return <div>Home Page</div>;
}

function User() {
  return <div>User Page</div>;
}
function Admin() {
  return <div>Admin Page</div>;
}
