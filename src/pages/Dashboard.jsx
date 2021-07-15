// React-Redux
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Styled Components
import styled from "styled-components/macro";

// Internal files
import { getCharts } from "../reducers/charts";
import { ChartWidget } from "../components/ChartWidget";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Dashboard = () => {
  const chartsArray = useSelector((store) => store.charts.chartArray);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharts());
  }, [dispatch]);

  return (
    <Container>
      {chartsArray &&
        chartsArray.map((chart) => {
          return <ChartWidget data={chart} key={chart.title} />;
        })}
    </Container>
  );
};
