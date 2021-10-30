import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import NewsItemPage from "./components/pages/NewsItemPage.tsx";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/news/:id" exact component={NewsItemPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
