function login(name, status) {

    if (status == true) {
        return "login successfully";
    }
    else {

        return "login failed";
    }

}

let value = login("rahul", false);
console.log(value)

let v1 = login("sonia", true);
console.log(v1)