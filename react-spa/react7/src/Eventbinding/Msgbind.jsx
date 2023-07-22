import React from "react";

class Msgbind extends React.Component{

    constructor(props){
        super(props)
        console.log('first const')
        this.state={
            msg:"helo"
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
                <button onClick={this.gmHandler}>GM</button>
                <button onClick={this.gaHandler}>GA</button>
                <button onClick={this.geHandler}>GE</button>
                <button onClick={this.gnHandler}>GN</button>
            </div>
        )
    }
}


export default Msgbind