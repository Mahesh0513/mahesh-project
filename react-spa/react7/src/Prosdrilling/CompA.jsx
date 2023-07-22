import React from "react"
import CompB from './CompB'

class CompA extends React.Component{

    ename="mahesh"

    render(){

        return( <div>
            <h1>Component A</h1>
            <pre>Employee name:{this.ename}</pre>
            <hr />
            <CompB name1={this.ename}/>
        </div>
        )
    
}
}

export default CompA