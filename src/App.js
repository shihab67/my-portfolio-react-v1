import React from "react";
//import Nav from "./pages/Nav";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Nav2 from "./pages/Nav2";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

function App() {
  const options = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_RIGHT,
    timeout: 5000,
    // you can also just use 'scale'
    transition: transitions.FADE,
    containerStyle: {
      zIndex: 1000,
      fontSize: '12px',
      
    }
  };
  return (
    <Router>
      <div className="App">
        <Nav2 />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/skills" exact>
            <Skills />
          </Route>
          <Route path="/contact" exact>
            <AlertProvider template={AlertTemplate} {...options}>
              <Contact />
            </AlertProvider>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
