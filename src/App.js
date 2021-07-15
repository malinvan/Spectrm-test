// React-Redux
import React from "react";
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

// Internal files
import { charts } from './reducers/charts';
import { Dashboard } from './pages/Dashboard';

const reducer = combineReducers({
  charts: charts.reducer
})

const store = configureStore({ reducer })

function App() {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
}

export default App;