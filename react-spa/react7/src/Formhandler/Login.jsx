import React from "react";

class Login extends React.Component{
      state={
        Email:"",
        Password:""
      }

      emailHandler=(event)=>{
            this.setState({Email:event.target.value})
      }
      PasswordHandler=(event)=>{
            this.setState({Password:event.target.value })
      }
      submitHandler=(event)=>{
        event.preventDefault()
            console.log(this.state)
      }
    render(){
        return <div>
            <h1>Login From</h1>
            <pre>{JSON.stringify(this.state)}</pre>
            <hr />
            <form onSubmit={this.submitHandler}>
            <label>Email Id</label>
            <input type="text" onChange={this.emailHandler} /> <hr />
            <label>Password</label>
            <input type="text" onChange={this.PasswordHandler} /> <hr />
            <input type="submit" value="Login" />
            </form>
        </div>
    }
}

export default Login