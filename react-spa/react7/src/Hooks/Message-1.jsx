import React from "react";

let Message = () => {
    let[msg,setMsg]=React.useState("Hello");

    return <div>
        <h1>Message command</h1>
        <pre>Message:{msg}</pre>

        <button onClick={()=>{
            setMsg("Good morning")
        }}>GM</button>
        <button onClick={()=>{
            setMsg("good night")
        }}>GN</button>
    </div>
}

export default Message