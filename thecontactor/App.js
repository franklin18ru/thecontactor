import React, { Component} from 'react';
import AppContainer from './src/routes/index';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducer from './src/components/reducers/index';

export default class App extends Component {
  render() {
    return <Provider store={createStore(Reducer)}><AppContainer /></Provider>;
  }
}

