import React from 'react'
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { charts } from './reducers/charts';

const reducer = combineReducers({
  charts: charts.reducer
})

const store = configureStore({ reducer })

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        Hellooooo
      </div>
    </Provider>
  );
}

export default App;
