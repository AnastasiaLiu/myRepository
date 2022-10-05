import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Welcome from "./pages/Welcome";
import Second from "./pages/Second";
import Third from "./pages/Third";
import Fourth from "./pages/Forth";
import Dashboard from "./pages/Dashboard";
import firebase from "./firebase/config"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
