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

// select image 

let arr=[
    document.querySelector("#topLeft>div:nth-child(2)>img"),
    document.querySelector("#topLeft>div:nth-child(3)>img"),
    document.querySelector("#topLeft>div:nth-child(4)>img"),
    document.querySelector("#topLeft>div:nth-child(5)>img")
]
arr.filter(function(el){
    el.addEventListener("click",changeImg)
    function changeImg(event){
        event.preventDefault()
        let mainImg=document.querySelector("#topLeft>div:first-child>img");
        mainImg.src=el.src
    } 
     
})
