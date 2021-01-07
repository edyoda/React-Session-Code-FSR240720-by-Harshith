import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';// Bootstrap CSS
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout"
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route render={() => <Layout title="Page Not Found" description="404 Error"></Layout>} />
      </Switch>
    </Router>

  );
}

export default App;
