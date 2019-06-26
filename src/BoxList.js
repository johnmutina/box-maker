import React, { Component } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import "./BoxList.css";
import uuid from "uuid";

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: []
        };
        this.addBox = this.addBox.bind(this);
    }

    addBox(box) {
        this.setState(state => ({
            boxes: [...state.boxes, box]
        }));
    }

    render() {
        return (
            <div>
                <NewBoxForm addBox={this.addBox} />
                <div className="BoxList-container">
                    {this.state.boxes.map(box => (
                        <Box
                            height={box.height}
                            width={box.width}
                            color={box.backgroundColor}
                            key={uuid()}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default BoxList;
