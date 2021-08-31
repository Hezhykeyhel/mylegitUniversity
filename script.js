let header= document.querySelector(".promo-title p");
header.innerHTML= 
header.innerText.split("").map(function(char){
    if (char == " "){
        char= "&nbsp;";
    }
    return "<span>"+char+"</span>";
}).join("");

anime.timeline({loop:true})
.add({
    targets:".promo-title p span",
    scale:[5, 1],
    duration:4500,
    opacity:[0, 1],
    delay:function(element, i){
        return i*50;
    }
});