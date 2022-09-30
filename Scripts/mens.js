// go to women's page
document.querySelector("#middle>div>span:first-child").addEventListener("click", womenPage);

function womenPage(event){
    event.preventDefault();
    window.location.href="womens.html";
}