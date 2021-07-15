import React from "react";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
// import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import MoreVertIcon from "@material-ui/icons/MoreVert";

// APEXXHARTS
// import ApexCharts from "apexcharts";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export const ChartWidget = ({
  data
}) => {
  console.log(data);
  // const chartsArray = useSelector((store) => store.charts.chartArray);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getCharts());
  // }, [dispatch]);

  // Material UI
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
        />
        <CardMedia
          className={classes.media}
          image="/static/images/cards/paella.jpg"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Helloo
          </Typography>
        </CardContent>
        <CardActions disableSpacing></CardActions>
      </Card>
    </>
  );
};
