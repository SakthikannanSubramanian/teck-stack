import React from "react";
import ".././App.css";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import $ from "jquery";
import ChildrenContainer from "./ChildrenContainer";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      openChildPanelStatus: false,
      style: {
        width: "90%",
        padding: "3%",
        margin: "auto",
        bottom: "0",
        borderRadius: "10px",
        background: "transparent",
        transition: "all .5s",
        transform: "",
      },
    };
  }

  openChildPanel() {
    const scale = 0.4;
    $("#homePyramidContainer").css({
      transform: "scale(" + scale + ")translateX(-75%) translateY(-70%)",
    });
  }

  render() {
    return (
      <div>
        <motion.div
          style={this.state.style}
          initial={{ y: "100vw" }}
          animate={{ y: "0" }}
          transition={{ delay: 0.7 }}
          id="homePyramidContainer"
        >
          <div className="Home-pyramid">
            <div className="Home-pyramid-one">
              <NavLink
                style={{
                  fontFamily: "Times New Roman",
                  fontSize: "150%",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
                onClick={this.openChildPanel}
              >
                {this.props.initialStateObj.firstSegment}
              </NavLink>
            </div>
            <br></br>
            <div className="Home-pyramid-two">
              <NavLink
                style={{
                  fontFamily: "Times New Roman",
                  fontSize: "150%",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
                onClick={this.openChildPanel}
              >
                {this.props.initialStateObj.secondSegment}
              </NavLink>
            </div>
            <br></br>
            <div className="Home-pyramid-three">
              <NavLink
                style={{
                  fontFamily: "Times New Roman",
                  fontSize: "150%",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
                onClick={this.openChildPanel}
              >
                {this.props.initialStateObj.thirdSegment}
              </NavLink>
            </div>
            <br></br>
            <div className="Home-pyramid-four">
              <NavLink
                style={{
                  fontFamily: "Times New Roman",
                  fontSize: "150%",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
                onClick={this.openChildPanel}
              >
                {this.props.initialStateObj.fourthSegment}
              </NavLink>
            </div>
            <br></br>
            <div className="Home-pyramid-five">
              <NavLink
                style={{
                  fontFamily: "Times New Roman",
                  fontSize: "150%",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
                onClick={this.openChildPanel}
              >
                {this.props.initialStateObj.fifthSegment}
              </NavLink>
            </div>
            <br></br>
            <div className="Home-pyramid-six">
              <NavLink
                to="/testing"
                style={{
                  fontFamily: "Times New Roman",
                  fontSize: "150%",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
                onClick={this.openChildPanel}
              >
                {this.props.initialStateObj.sixthSegment}
              </NavLink>
            </div>
          </div>
        </motion.div>
        {this.state.openChildPanelStatus && <ChildrenContainer />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialStateObj: state.initialStateObj,
  };
};
export default connect(mapStateToProps)(Home);
