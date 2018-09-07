import React from 'react';
import { render } from 'react-dom';
import * as Redux from 'redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { home, enterproperty, loadproperty, editproperty } from "./screens";
import "./styles/app.css"

const initialState = {
	count: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {...state, count: state.count + 1};
		case 'INCREMENT5':
			return {...state, count: state.count + 5};
			case 'INCREMENT10':
				return {...state, count: state.count + 10};
    case 'DECREMENT':
			return {...state, count: state.count - 1};
    case 'RESET':
			return {...state, count: state.count = 0};
		default:
			return state;
  }
}

const {createStore} = Redux;
const store = createStore(reducer);

const Index = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" exact={true} component={home} />
        <Route path="/enterproperty" component={enterproperty} />
        <Route path="/loadProperty" component={loadproperty} />
        <Route path="/editproperty" component={editproperty} />
        </div>
    </Router>
  </Provider>
);

render(<Index />, document.getElementById('root'));
