import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';// Bootstrap CSS
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import PageNotFound from "./components/PageNotFound";
import SignUp from './components/SignUp';
import HOC from "./components/HOC"

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route path="/about" component={About} />
        <Route path="/signup" component={SignUp} />
        <Route path="/hoc" component={HOC} />
        {/* <Route path="/signup/:id" component={SignUp} /> */}
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
