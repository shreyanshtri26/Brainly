import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Button } from "./components/Button";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";
import { Card } from "./components/Card";
import { CreateModal } from "./components/CreateModal";
import { Sidebar } from "./components/Sidebar";
import { MenuIcon } from "./icons/MenuIcon";
import { Signin } from "./components/Signin";
import { Signup } from "./components/Signup";

// Main App component that requires authentication
function MainApp() {
  const [open, setOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className={`flex-1 p-4 sm:ml-72`}>
        <CreateModal open={open} onClose={() => setOpen(!open)} />
        <div className="flex justify-between items-center sm:justify-end gap-4">
          <button
            className="sm:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <MenuIcon />
          </button>
          <div className="flex gap-4">
            <Button
              varient="primary"
              text="Add Content"
              startIcon={<PlusIcon size="md" />}
              onClick={() => setOpen(!open)}
            />
            <Button
              varient="secondary"
              text="Share Brain"
              startIcon={<ShareIcon size="md" />}
            />
          </div>
        </div>
        <div className="flex-gap-4 flex flex-wrap justify-center gap-4 mt-4">
          <Card
            title="Brainly"
            type="image"
            link="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          />
          <Card
            title="yt"
            type="youtube"
            link="https://youtu.be/hN5X4kGhAtU?si=7b4kDzqe5qbTfk4J"
          />
          <Card
            title="tw"
            type="twitter"
            link="https://x.com/kirat_tw/status/1633685473821425666"
          />
        </div>
      </div>
    </div>
  );
}

// Main App component with routing
function App() {
  // You can add authentication state management here
  const isAuthenticated = false; // Change this based on your auth state

  return (
    <Router>
      <Routes>
        <Route path="/signin" element={isAuthenticated ? <Navigate to="/" /> : <Signin />} />
        <Route path="/signup" element={isAuthenticated ? <Navigate to="/" /> : <Signup />} />
        <Route 
          path="/" 
          element={isAuthenticated ? <MainApp /> : <Navigate to="/signin" />} 
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
