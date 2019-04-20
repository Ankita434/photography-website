import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    width: "100%",
    maxWidth: "100%"
  },
  title: {
    color: "white"
  }
};

function Title(props) {
  const { classes } = props;

  return (
    <Typography component="h2" variant="h1" className={classes.title}>
      ALEXANDRU COTIN
    </Typography>
  );
}

Title.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Title);
