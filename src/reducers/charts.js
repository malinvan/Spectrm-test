import { createSlice } from "@reduxjs/toolkit";

// Library for cloning
import clone from "just-clone";

const API_URL = "https://api.jsonbin.io/b/60efe797c1256a01cb6f94d9/1";

export const charts = createSlice({
  name: "charts",
  initialState: {
    chartArray: [],
  },
  reducers: {
    // To set the chartsArray to the charts of the JSON
    setCharts: (store, action) => {
      store.chartArray = action.payload;
    },
    // To duplicate a chart:
    // first find by id and compare it to the payload
    // set duplicated to true
    // using the library Just-Clone to clone the chart
    // adding the duplicated chart to the chartArray by spreading it and then adding it
    duplicate: (store, action) => {
      const chart = store.chartArray.find(
        (chart) => chart.id === action.payload
      );
      chart.duplicated = true;
      const duplication = clone(chart);
      store.chartArray = [...store.chartArray, duplication];
    },
  },
});

// Thunk for fetching the API and setting the charts to the Redux state
export const getCharts = () => {
  return (dispatch) => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((chart) => {
        dispatch(charts.actions.setCharts(chart.profiles));
      });
  };
};
