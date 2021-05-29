const vedio=document.querySelector(".videos");
vedio.addEventListener("hover",()=>{
    if(vedio.getAttribute("controls"))
       vedio.removeAttribute("controls");
    else{
        vedio.setAttribute("controls");
    }   
})
