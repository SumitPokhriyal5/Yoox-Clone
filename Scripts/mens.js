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