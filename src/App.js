import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import NewsItemPage from "./components/pages/NewsItemPage.tsx";
import Chapters from "./components/pages/Universe/Chapters/Chapters";
import Articles from "./components/pages/Universe/Articles/Articles";
import About from "./components/pages/About/About";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} /> 
          <Route path="/news/:id" exact component={NewsItemPage} />
          <Route path="/chapters" exact component={Chapters} /> 
          <Route path="/articles" exact component={Articles} /> 
          <Route path="/about" exact component={About} /> 
        </Switch>
      </Router>
    </>
  );
}

export default App;
