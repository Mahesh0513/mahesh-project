import React from "react"

class Emp extends React.Component{

    render(){

        return <div>
            <h2>Employee Component</h2>
            <pre>{JSON.stringify(this.props)}</pre>

            <h3>Emp Name:{this.props.name}</h3>
            <h3>Emp loc:{this.props.loc[0]}</h3>
            <h3>Emp sal:{this.props.details.sal}</h3>
            </div>
        
    }
}

export default Emp