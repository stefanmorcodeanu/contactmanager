import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./component/layout/Header";
import Abount from "./component/pages/About";
import Contacts from "./component/contacts/Contacts";
import Provider from "./context";
import AddContact from "./component/contacts/AddContact";
import NotFound from "./component/pages/NotFound";
import Test from "./component/test/Test";
import EditContact from "./component/contacts/EditContact";

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/contact/edit/:id" component={EditContact} />
              <Route exact path="/about" component={Abount} />
              <Route exact path="/test" component={Test} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
