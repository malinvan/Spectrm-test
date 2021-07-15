import React from "react";
import { Donut } from "./Donut";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import MoreVertIcon from "@material-ui/icons/MoreVert";

// Styled Components
import styled from "styled-components/macro";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const CardContainer = styled(Card)`
  border: 1px solid red;
  margin: 20px;
  // width: 50vw;
`;
export const ChartWidget = ({
  data
}) => {
  console.log(data);

  // Material UI
  const classes = useStyles();

  return (
      <CardContainer className={classes.root}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <Donut data={data}/>
          </Typography>
        </CardContent>
        <CardActions disableSpacing></CardActions>
      </CardContainer>
  );
};
