import React from "react";
import Nav from "./pages/Nav";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
