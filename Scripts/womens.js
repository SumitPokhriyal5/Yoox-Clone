// go to mens page
document.querySelector("#middle>div>span:nth-child(2)").addEventListener("click", mensPage);

function mensPage(event){
    console.log("im in mens page")
    // event.preventDefault();
    window.location.href="mens.html";
}