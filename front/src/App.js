import logo from "./logo.svg";
import "./App.css";
import "./index.css"; // Adjust the path as necessary
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Alert from "./components/pages/Alert";
import Service from "./components/Service";
import About from "./components/pages/About";
import AlertDetails from "./components/pages/AlertDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Alert></Alert>} />
        <Route path="/riskAreas" element={<About></About>} />
        <Route path="/services" element={<Service></Service>} />
        <Route path="/alertDetails" element={<AlertDetails></AlertDetails>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
