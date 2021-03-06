import React, { Component } from "react";
import "./NewBoxForm.css";
import uuid from "uuid";

class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: "",
            width: "",
            backgroundColor: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleSubmit(evt) {
        evt.preventDefault();
        const newBox = { ...this.state, id: uuid() };
        this.props.addBox(newBox);
        this.setState({
            height: "",
            width: "",
            backgroundColor: ""
        });
    }

    render() {
        return (
            <div className="NewBoxForm">
                <form onSubmit={this.handleSubmit}>
                    <div className="NewBoxForm-container">
                        <label htmlFor="height">Height</label>
                        <input
                            name="height"
                            id="height"
                            type="text"
                            value={this.state.height}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="NewBoxForm-container">
                        <label htmlFor="width">Width</label>
                        <input
                            name="width"
                            id="width"
                            type="text"
                            value={this.state.width}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="NewBoxForm-container">
                        <label htmlFor="backgroundColor">Color</label>
                        <input
                            name="backgroundColor"
                            id="backgroundColor"
                            type="text"
                            value={this.state.backgroundColor}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button className="NewBoxForm-btn">Add box</button>
                </form>
            </div>
        );
    }
}

export default NewBoxForm;
