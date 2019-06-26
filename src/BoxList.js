import React, { Component } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import "./BoxList.css";

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: []
        };
        this.addBox = this.addBox.bind(this);
        this.removeBox = this.removeBox.bind(this);
    }

    addBox(box) {
        this.setState({
            boxes: [...this.state.boxes, box]
        });
    }

    removeBox(id) {
        this.setState({
            boxes: this.state.boxes.filter(box => box.id !== id)
        });
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
                            key={box.id}
                            id={box.id}
                            removeBox={() => this.removeBox(box.id)}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default BoxList;
