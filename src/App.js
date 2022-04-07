import "./App.css";
import Navbar from "./Navbar";
// import Top from './components.js/Top';
import TextForm from "./components.js/TextForm";
// import About from './components.js/About';
import { useState } from "react";
import Alert from "./Alert";
import About from "./components.js/About";
import { ReactDOM } from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [gmode, setGmode] = useState("light");

  //to add alert, used a state
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    //set alert disables after 1seconds
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  const togleGmode = () => {
    if (gmode === "light") {
      setGmode("red");
    } else {
      setGmode("light");
    }
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils- DarkMode";
      setInterval(() => {
        document.title = "TextUtils is amazing DarkMode";
      }, 2000);
      setInterval(() => {
        document.title = "TextUtils download";
      }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils- LightMode";
    }
  };
  return (
    <>
      
    <BrowserRouter>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}  />
    <Alert alert={alert}/>
    <div className="container my-3">
    <switch>
    
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>
          </Route>
    </switch>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
