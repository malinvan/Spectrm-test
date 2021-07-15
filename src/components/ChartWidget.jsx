import React from "react";
import { useSelector, useDispatch } from "react-redux";

// Internatl files
import { Donut } from "./Donut";

// Material UI - Card
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";

// Material UI - Menu
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

// Styled Components
import styled from "styled-components/macro";

// Styles for Material UI
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

// Styling for Container
const CardContainer = styled(Card)`
  margin: 20px;
  width: 100vw;
`;

export const ChartWidget = ({ data }) => {
  const duplicated = useSelector((store) => store.charts.duplicated);

  // Material UI
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log("Hello");
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <CardContainer className={classes.root}>
      <CardHeader
        action={
          <>
            {!duplicated &&
            <>
              <IconButton
              aria-controls="simple-menu"
              aria-haspopup="true"
              aria-label="settings"
              onClick={handleClick}
            >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Dublicate</MenuItem>
              </Menu>
            </>
            }
          </>
        }
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <Donut data={data} />
        </Typography>
      </CardContent>
      <CardActions disableSpacing></CardActions>
    </CardContainer>
  );
};
