import Alert from './Components/ALert';
import Form from './Components/Form';
import Navbar from './Components/Navbar';
import About from './Components/About';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Json from './Components/Json';

function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState("light");

  const showAlert = (message) => {
    setAlert(message);
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggle = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode enabled!");
      document.title = "Text Utility - Dark Mode";
    } else {
      setMode('light');
      document.body.style.backgroundColor = "#ffffff";
      showAlert("Light mode enabled!");
      document.title = "Text Utility - Light Mode";
    }
  };

  return (
    <Router>
      {/* Navbar */}
      <Navbar name="TextConverter" mode={mode} toggle={toggle} />

      {/* Alert Message */}
      <div style={{ height: "30px" }}>
        <Alert alert={alert} />
      </div>

      {/* Main Container */}
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<Form mode={mode} />} />
          <Route path="/about" element={<About mode={mode} />} />
          <Route path="/json" element={<Json mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
