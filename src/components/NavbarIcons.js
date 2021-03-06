/* eslint-disable no-undef */
import React from "react";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";

class NavbarIcon extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <IconButton aria-label="Icon">
        <Icon
          style={{
            color: "white",
            fontSize: "30px"
          }}
          className="hvr-bounce-in"
        >
          {this.props.icon}
        </Icon>
      </IconButton>
    );
  }
}
export default NavbarIcon;
