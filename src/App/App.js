import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Home from '../Home/Home';
import PFooter from '../PFooter/PFooter';
import About from '../About/About';
import Contact from '../Contact/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Providers from '../Providers/Providers';
import Filter from '../Filter/Filter';


class App extends React.Component {

  render () {
    return (
      <div>
      <Router>
        <Header />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/home" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/providers" component={Providers} />
            <Route path="/filter" component={Filter} />
        </Switch>
        <PFooter/>
      </Router>
    </div>
    )
  };
}


export default App;
