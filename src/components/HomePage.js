import React from "react";
import Navbar from "./Navbar";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import SocialBar from "./SocialBar";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: true,
      isLoding: true
    };

    this.closeComponent = ev => {
      ev.preventDefault();

      this.setState({
        isVisible: false
      });

      setTimeout(() => {
        this.props.history.push("/");
      }, 600);
    };
  }

  componentDidMount() {
    this.setState({ isLoding: false });
  }
  render() {
    const { loading } = this.state.isLoding;

    if (loading) {
      return null;
    }
    return (
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={600}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={200}
        transitionName={
          this.props.match.params === "/login"
            ? "loadComponent"
            : "leaveComponent"
        }
      >
        {this.state.isVisible ? (
          <div className="home">
            <SocialBar />

            <div className="div-title-home">
              <Grid container direction="column">
                <Grid item>
                  <h1 className="title-home">ALEXANDRU COTIN</h1>
                </Grid>
                <Grid item style={{ paddingBottom: "2rem" }}>
                  <Button variant="contained">
                    Contact Me
                    <Icon style={{ marginLeft: 10 }}>send</Icon>
                  </Button>
                </Grid>
              </Grid>
            </div>
            <Navbar />
          </div>
        ) : null}
      </ReactCSSTransitionGroup>
    );
  }
}

export default Home;
