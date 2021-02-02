import React from "react";
import { Provider } from "react-redux";
import { Contact } from "./components/contacts/contact";
import { Navbar } from "./components/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {store} from './store'
import {Addcontact} from './components/contacts/Addcontact'
import { Editcontact } from "./components/contacts/Editcontact";
import {MemeGenerator} from "./components/memegenerator/MemeGenerator"

//! Wrapping the components of our app inside a provider is to specifically tell React-Redux what store we want to use in our components.
//! We do this by rendering a <Provider> component around our entire <App> components, and passing the Redux store as a prop to <Provider>.
//! After we do this once, every component in the application will be able to access the Redux store if it needs to.
//! Also we need to wrap our components inside of router and inside use switch to determine the route of those components

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <div className="py-3">
              <Switch>
                <Route exact path="/" component={Contact} />
                <Route exact path="/contacts/add" component={Addcontact} />
                <Route exact path="/contacts/edit/:id" component={Editcontact} />
                <Route exact path="/memegen" component={MemeGenerator} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
