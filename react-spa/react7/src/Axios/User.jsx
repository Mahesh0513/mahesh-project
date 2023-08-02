import React from "react"
import Axios from "axios"

class User extends React.Component {
    state;
    constructor(props) {
        super(props)
        this.state = {
            User: {}
        }

    }
    componentDidMount() {
        Axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                console.log(response)
                this.setState({
                    User: response.data
                })

            })

            .catch(() => {

            })
    }
    render() {

        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                    <h1>User Component</h1>
                    <pre>{JSON.stringify(this.state.User)}</pre>
                        <table className="table">
                            <thead className="bg-success text-white">
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Home-city</th>
                                    <th>Work-city</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Object.keys(this.state.User).length>0?
                                    <>
                                    {
                                        this.state.User.map((User) => {
                                            return <tr>
                                                <td>{User.id }</td>
                                                <td>{User.name }</td>
                                                <td>{User.address.city }</td>
                                                <td>{User.company.address.city}</td>

                                            </tr>
                                        })
                                    }
                                </>:<h3>no data</h3>

                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default User
