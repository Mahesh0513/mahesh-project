import React from "react"
import employees from "./Empdata"
class Empsal extends React.Component {

  render() {
    return <div>
      <h1>Employee details</h1>
      <pre>(JSON.stringify(employees))</pre>
      <table border={3}>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>sal</th>
          </tr>

        </thead>
        <tbody>
          {
            employees.map((emp, index) =>{

              return <tr key={index}>
                <td>(emp.id)</td>
                <td>(emp.name)</td>
                <td>(emp.sal)</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  }


}

export default Empsal