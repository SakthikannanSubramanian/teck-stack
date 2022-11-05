import React from "react";
import '.././App.css';

export default class Home extends React.Component {

    constructor(){
        super();
        this.state = {
            layer1:'UAT',
            layer2:'E2E',
            layer3:'Non Functional',
            layer4:'Integration Testing',
            layer5:'System Testing',
            layer6:'Unit Testing',
            openBackDrop:false,
        }
    }

    openPanel=()=>{
        this.setState({openBackDrop:true});
    }

    render() {
        return (
            <div className="Home-pyramid" onClick={this.openPanel}>
                <div className="Home-pyramid-one">
                    <p style={{fontFamily: "Times New Roman",fontSize:"150%", fontWeight:"bold"}}>{this.state.layer1}</p>
                </div>
                <div className="Home-pyramid-two">
                    <p style={{fontFamily: "Times New Roman",fontSize:"150%", fontWeight:"bold"}}>{this.state.layer2}</p>
                </div>
                <div className="Home-pyramid-three">
                    <p style={{fontFamily: "Times New Roman",fontSize:"150%", fontWeight:"bold"}}>{this.state.layer3}</p>
                </div>
                <div className="Home-pyramid-four">
                    <p style={{fontFamily: "Times New Roman",fontSize:"150%", fontWeight:"bold"}}>{this.state.layer4}</p>
                </div>
                <div className="Home-pyramid-five">
                    <p style={{fontFamily: "Times New Roman",fontSize:"150%", fontWeight:"bold"}}>{this.state.layer5}</p>
                </div>
                <div className="Home-pyramid-six">
                    <p style={{fontFamily: "Times New Roman",fontSize:"150%", fontWeight:"bold"}}>{this.state.layer6}</p>
                </div>
            </div>

        );
    }
}