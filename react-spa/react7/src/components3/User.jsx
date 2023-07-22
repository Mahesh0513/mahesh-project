import React from "react"
import Emp from "./Emp"

class User extends React.Component{
    U_Id=101;
    u_Name="mahesh";
    U_avail="true";
    u_loc=["New Delhi","banglore"];
    U_Details={sal:45000,email:"mahesh@gmail.com"}

    render(){

        return  <div>
            <h2>User Component</h2>

            <hr />

            <Emp id={this.U_Id} name={this.u_Name} avail={this.U_avail} loc={this.u_loc[1]} details={this.U_Details}/>

        </div>

        }

    }



export default User