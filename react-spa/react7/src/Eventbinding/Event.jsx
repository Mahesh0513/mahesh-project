import React from "react";

class Event extends React.Component {

    constructor(props) {
        super(props)

        console.log("First Const")

        this.state = {
            msg: "heloo"
        }

        this.UpdateHandler = (value) => {

            this.setState({msg:value})
        }
    }

    render() {
        console.log("Second - render method")
        return (
            <div>
                <h1>Event Binding</h1>
                <h2>Event value:{this.state.msg}</h2>
                <button onClick={this.UpdateHandler.bind(this, "goodmorning")}>GM</button>
                <button onClick={this.UpdateHandler.bind(this, "goodafternoon")}>GA</button>
                <button onClick={this.UpdateHandler.bind(this, "goodevening")}>GV</button>
                <button onClick={this.UpdateHandler.bind(this, "goodnight")}>GN</button>
            </div>
        )
    }
}


export default Event