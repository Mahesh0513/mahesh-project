import React from "react"
import  Axios from "axios"

class Product extends React.Component{

    constructor(props){
        super(props)
        console.log("First cosnt")
        this.state={
            Users:[]
        }
    }

    componentDidMount(){
        console.log("After Render method")
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            console.log(response)
            this.setState({
                Users:response.data
            })
        })

        .catch((err)=>{
            
        })
    }

    render(){
        console.log("Second Render method")
        return <div>
            <h1>User details</h1>
            <pre>{JSON.stringify(this.state.Users)}</pre>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <table className="table">
                            <thead className="bg-dark text-white">
                                <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Zipcode</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.Users.map((User,index)=>{
                                        return <tr key={index}>
                                            <td>{User.id}</td>
                                            <td>{User.name}</td>
                                            <td>{User.email}</td>
                                            <td>{User.phone}</td>
                                            <td>{User.address.zipcode}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    }
}
export default Product