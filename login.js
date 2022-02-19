function login(){
    console.log("Excuting login function");
    let username = $("#txtUsername").val();
    let password = $("#txtPassword").val();

    console.log(username)
    console.log(password)

    let users=readUsers();
    
    console.log(users)
    for(let i=0;i<users.length;i++){
        if(username===users[i].email && password===users[i].password){
            console.log("I found it")
        }
    }
}



function init(){
    console.log("Loging script")
    $("#btnLogin").click(login);
}

window.onload=init;