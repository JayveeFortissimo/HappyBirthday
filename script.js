const Child = document.querySelector(".Child");
const upper = document.querySelector(".Child .Master");
const Buttom = document.querySelector(".Child .Buttom");
const hbd = document.querySelector(".hbd");
const modal = document.querySelector(".Modal");
const Button = document.querySelector(".BTN button");

let closer = true

Child.addEventListener("click",(e)=>{
e.preventDefault();
if(closer){
    upper.style.position = "relative";
    upper.style.top= "-120px";
hbd.style.visibility = "visible"
}else{
    upper.style.position = "relative";
    upper.style.top= "0";
hbd.style.visibility = "hidden"
}
 closer = !closer;

})

hbd.addEventListener("click",(e)=>{
e.preventDefault()
modal.style.visibility = 'visible'
})

Button.addEventListener("click",(e)=>{
e.preventDefault()
modal.style.visibility = 'hidden'
})

