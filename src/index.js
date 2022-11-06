import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import HomePyramidReducer from './redux/reducers/HomePyramidReducer';

const store = createStore(HomePyramidReducer);
console.log(store.getState().initialStateObj);

const root = ReactDOM.createRoot(document.getElementById('root'));
const RootApp = () => (
   <Provider store={store}>
      <App />
   </Provider>
);
root.render(
   <RootApp />
);
