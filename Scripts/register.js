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
    window.location.href="index.html";
}

//catch data
document.querySelector("form").addEventListener("submit",regDataFun);

function regDataFun(event){
    event.preventDefault();
    let obj={
        firstName:document.querySelector("#fstName>input").value,
        lastName:document.querySelector("#lstName>input").value,
        prs_email:document.querySelector("#email>input").value,
        prs_password:document.querySelector("#password>input").value,
        // prs_gender:document.querySelector("#gender input").value,
        prs_DOB:document.querySelector("#DOB>input").value,
    }
    localStorage.setItem("person_data",JSON.stringify(obj));
    alert("Registed Successfully")
    window.location.href="login.html"
}