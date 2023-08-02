import React from "react";

class Msgbind extends React.Component{

    constructor(props){
        super(props)
        console.log('first const')
        this.state={
            msg:"heloo"

        }
    }

    gmHandler=()=>{
        this.setState({msg:"good morning"})
    }

    gaHandler=()=>{
        this.setState({msg:"good afternoon"})
    }

    geHandler=()=>{
        this.setState({msg:"good evening"})
    }

    gnHandler=()=>{
        this.setState({msg:"good night"})
    }

    render(){
         console.log("second-render method")
        return(
            <div>
                <h1>Msgbind</h1>
                <h2>msg:{this.state.msg}</h2>
                <button className="btn btn-success" onClick={this.gmHandler}>GM</button>
                <hr />
                <button className="btn btn-primary" onClick={this.gaHandler}>GA</button>
                <hr />
                <button className="btn btn-info" onClick={this.geHandler}>GE</button>
                <hr />
                <button className="btn btn-secondary" onClick={this.gnHandler}>GN</button>
            </div>
        )
    }
}


export default Msgbind