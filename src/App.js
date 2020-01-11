import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import routes from "./routes";
import AdminLayout from './layout/Admin'
import About from "./views/About";
import Contact from "./views/Contact";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin" component={AdminLayout}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/home" component={Home}/>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
export default App;
