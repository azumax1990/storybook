import React from 'react';
import { Provider } from 'react-redux';
import store from './lib/redux';

import InboxScreen from './components/InboxScreen';

import './index.css';
function App() {
  return (
    <>
      <div>aaaaaaa</div>
      {/* <h1>bbbbbbbbbb</h1> */}
      <p>cccccccccccc</p>
      <p>dddddddddddd</p>
      <p>eeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
      <Provider store={store}>
        <InboxScreen />
      </Provider>
    </>
  );
}
export default App;