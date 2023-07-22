import React from 'react'
import CompC from './CompC'
class CompB extends React.Component {
    render() {
        return (
            <div>
                <h1>CompB</h1>
                <pre>{JSON.stringify(this.props)}</pre>

                <hr />
                <CompC name2={this.props.name1}/>
            </div>
        )
    }
}

export default CompB
