import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Layout from "./components/Layout/Layouts";
import BurgerBuilder from "./containers/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import Finalized from "./OrderFinalized/Finalized";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Layout>
            <Switch>
              <Route path='/' exact component={BurgerBuilder} />
              <Route
                path='/checkout/contact-data/finalized'
                component={Finalized}
              />
              <Route path='/checkout' component={Checkout} />
              <Redirect from='*' to='/' />
            </Switch>
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;
