import React from "react";
import HomePage from "./components/home/HomePage";
import VisitingUser from "./api/visiting-users";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import GuideHome from "./components/guide/GuideHome";

function App() {
  React.useEffect(() => {
    VisitingUser.postIpAddress();
  }, []);
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/new-to-coding" component={GuideHome}  />
      </Switch>
    </Router>
  );
}

export default App;
