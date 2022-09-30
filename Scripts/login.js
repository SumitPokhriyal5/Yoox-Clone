// go to mens page
document.querySelector("#middle>div>span:nth-child(2)").addEventListener("click", mensPage);

function mensPage(event){
    console.log("im in mens page")
    // event.preventDefault();
    window.location.href="mens.html";
}
// go to women's page
document.querySelector("#middle>div>span:first-child").addEventListener("click", womenPage);

function womenPage(event){
    event.preventDefault();
    window.location.href="womens.html";
}

//login data
document.querySelector("form").addEventListener("submit",loginFun);
let details=JSON.parse(localStorage.getItem("person_data"));
function loginFun(event){
    event.preventDefault();
    let obj={
        log_email:document.querySelector("#email>input").value,
        log_pass:document.querySelector("#password>input").value
    }
    if(details.prs_email==obj.log_email&&details.prs_password==obj.log_pass){
        alert("Login Successful");
        window.location.href="mens.html";
    }
    else{
        alert("Email and Password not matching")
    }
}