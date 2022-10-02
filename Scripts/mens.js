// go to women's page
document.querySelector("#middle>div>span:first-child").addEventListener("click", womenPage);

function womenPage(event){
    event.preventDefault();
    window.location.href="womens.html";
}

// go to n21 product
document.querySelector("#n21").addEventListener("click", goInside);

function goInside(event){
    event.preventDefault()
    window.location.href="product.html";
}
// after login-user name
let loginData=JSON.parse(localStorage.getItem("login-data"));
let regData=JSON.parse(localStorage.getItem("person_data"));
if(loginData.log_email&&loginData.log_pass){
   document.querySelector("#top>div:last-child").innerHTML=null;
   let div=document.createElement("div");
   div.style.width="30%"
   let i=document.createElement("i");
   i.className="fa-solid fa-user";
   let a=document.createElement("a");
   a.innerText=regData.firstName;
   a.style.textTransform="uppercase";
   div.append(i,a)
   let div2=document.createElement("div");
   div2.style.width="40%"
   let i2=document.createElement("i");
   i2.className="fa-solid fa-lock";
   let a2=document.createElement("a");
   a2.href="login.html"
   a2.innerText="LOGOUT";
   div2.append(i2,a2)
   document.querySelector("#top>div:last-child").append(div,div2);
}

document.querySelector("#top>div:last-child>div:last-child").addEventListener("click",removeLogData);

function removeLogData(event){
    localStorage.removeItem("login-data")
}