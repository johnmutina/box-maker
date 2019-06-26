import React, { Component } from "react";
import "./NewBoxForm.css";

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
        console.log(evt.target.value);
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.addBox(this.state);
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
