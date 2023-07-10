class Emp{

    id="101"

    get_Details(){
        console.log("Emp Details method")

    }

    set_Details(name){
        this.name=name

    }

}

let e1=new Emp()
let e2=new Emp()
let e3=new Emp()
console.log(e1.id)
e1.get_Details()
e1.set_Details("rahul")
console.log(e1)

console.log(e2)
e3.set_Details("mahesh")
console.log(e3)