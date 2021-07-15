import { createSlice, current, original } from "@reduxjs/toolkit";

// Library for cloning
import clone from "just-clone";

const API_URL = "https://api.jsonbin.io/b/60efe797c1256a01cb6f94d9/1";

export const charts = createSlice({
  name: "charts",
  initialState: {
    chartArray: [],
  },
  reducers: {
    setCharts: (store, action) => {
      store.chartArray = action.payload;
    },
    duplicate: (store, action) => {
      const chart = store.chartArray.find(
        (chart) => chart.id === action.payload
      );
      chart.duplicated = true;
      console.log(action.payload, chart);
      console.log(current(store, chart));
      const duplication = clone(chart);
      store.chartArray = [...store.chartArray, duplication];
    },
  },
});

export const getCharts = () => {
  return (dispatch) => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((chart) => {
        dispatch(charts.actions.setCharts(chart.profiles));
        console.log(chart);
      });
  };
};
