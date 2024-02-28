import { useState } from "react";
import "./App.css";
import About from "./components/About.jsx";
import Navbar from "./components/Navbar.jsx";
import TextForm from "./components/TextForm.jsx";
import Alert from "./components/Alert.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      showAlert("Dark mode has been Enabled", "success");
      document.body.style.backgroundColor = 'black';
    }
    else {
      setMode('light');
      showAlert("Light mode has been Enabled", "success");
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About Us"
          toggleMode={toggleMode}
          mode={mode}
        />
        <div className="container">
          <Alert
            alert={alert}
          />
        </div>
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm heading="Enter the text to analyze below"
                showAlert={showAlert}
                mode={mode}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
