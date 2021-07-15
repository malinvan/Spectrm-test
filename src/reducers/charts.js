import { createSlice } from "@reduxjs/toolkit";

const API_URL = "https://api.jsonbin.io/b/60efe797c1256a01cb6f94d9";

export const charts = createSlice({
  name: "charts",
  initialState: {
    chartArray: [],
    duplicated: false,
  },
  reducers: {
    setCharts: (store, action) => {
      store.chartArray = action.payload;
    },
    setDuplication: (store, action) => {
      store.duplicated = action.payload;
    }
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
