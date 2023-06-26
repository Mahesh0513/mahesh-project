let validate_Data = () => {
    //alert("GM")
    let name = document.getElementById("uName").value;
    let password=document.getElementById("upassword").value;

    if(name==""||name.lenght<4){
        document.getElementById("uNamemessege").innerHTML="please enter name"

    }

    if(password==""||password.lenght<6){

        document.getElementById("passwordmessege").innerHTML="please enter password"
    }

    return false
}