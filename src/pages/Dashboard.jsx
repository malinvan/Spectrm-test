// React-Redux
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Styled Components
import styled from "styled-components";

// Internal files
import { getCharts } from "../reducers/charts";
import { ChartWidget } from "../components/ChartWidget";

// Flexboxing
const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Dashboard = () => {
  const chartsArray = useSelector((store) => store.charts.chartArray);

  const dispatch = useDispatch();

  // useEffect for dispatching the thunk with the fetch
  useEffect(() => {
    dispatch(getCharts());
  }, [dispatch]);

  // Map over the array containing the charts to render each chart and sending the props of each chart
  return (
    <Container>
      {chartsArray &&
        chartsArray.map((chart) => {
          return <ChartWidget data={chart} key={chart.id} />;
        })}
    </Container>
  );
};
