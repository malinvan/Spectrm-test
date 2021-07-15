// React-Redux
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Internal files
import { getCharts } from "../reducers/charts";
import { ChartWidget } from "../components/ChartWidget";

export const Dashboard = () => {
  const chartsArray = useSelector((store) => store.charts.chartArray);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharts());
  }, [dispatch]);

  return (
    <>
      {chartsArray &&
        chartsArray.map((chart) => {
          return <ChartWidget data={chart} key={chart.title} />;
        })}
    </>
  );
};
