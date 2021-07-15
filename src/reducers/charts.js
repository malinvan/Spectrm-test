import { createSlice } from "@reduxjs/toolkit";

const API_URL = "https://gitlab.com/-/snippets/2149167/raw/main/data.json";

export const charts = createSlice({
  name: "charts",
  initialState: {
    chartArray: [],
  },
  reducers: {
    setCharts: (store, action) => {
      store.chartArray = action.payload;
  }
  },
});

export const getCharts = () => {
  return (dispatch, getState) => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((chart) => {
        dispatch(charts.action.setCharts(chart))
        console.log(chart);
      })
  }
}