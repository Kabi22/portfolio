import Projects from "./components/Projects";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import "./index.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Projects} path="/project" />
        {/* <Route component={About} path="/about" /> */}
      </Switch>
    </Router>
  );
}

export default App;
