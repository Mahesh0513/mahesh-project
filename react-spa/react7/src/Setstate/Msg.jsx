import React from "react"

class Msg extends React.Component{
 
    state={msg:"mahesh"}

    gmhandler=()=>{
        this.setState({
            msg: "Good Morning",
        });
    }
    gnhandler=()=>{
        this.setState({

            msg: "Good Night",
        });
    }
    

render(){
    return <div>
        <h1>msg:{this.state.msg}</h1>
        <button onClick={this.gmhandler}>GM</button>
        <button onClick={this.gnhandler}>GN</button>
    </div>
}
}

export default Msg