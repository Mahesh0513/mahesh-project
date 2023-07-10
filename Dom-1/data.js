let employees = [{ id: 101, name: "Rahlul", salary: 45000 },
{ id: 102, name: "Sonia", salary: 55000 },
{ id: 103, name: "Priyanka", salary: 65000 },
{ id: 104, name: "Modi", salary: 95000 }]

let displayData = () => {
    //alert("Test Case 123")
    let rows = ""
    employees.map((emp)=> {
        rows = rows + `<tr>
            <td> ${emp.id} </td >
            <td> ${emp.name} </td >
            <td> ${emp.salary} </td >
        </tr >`
    })
    //document.getElementById('abc').innerHTML = "GM"
    document.getElementById('abc').innerHTML = rows
}
