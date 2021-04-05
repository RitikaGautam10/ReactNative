import React, {Component} from 'react';
import {Provider} from 'mobx-react';
import ToDoStore from './src/store/ToDoStore';
import Navigation from './src/screen/Navigation';
class App extends Component {
  render() {
    return (
      <Provider store={ToDoStore}>
        <Navigation />
      </Provider>
    );
  }
}
export default App;
