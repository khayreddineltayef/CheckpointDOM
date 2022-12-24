var buttons = document.querySelectorAll(".plus")
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click",acc)
}
var button_supp=document.querySelectorAll(".delete")
//console.log(button_supp);
for (let i = 0; i < button_supp.length; i++) {
    button_supp[i].addEventListener("click",supp)
}


function supp(e){
   var clicked_supp=e.target
   var td_supp =clicked_supp.parentElement.parentElement.parentElement.parentElement
   //console.log(td_supp)
   var priceDEL = td_supp.querySelector(".price")
  priceDEL.innerHTML=0
   
   sum()
   td_supp.remove()
}
function acc(e) {
   var  clicked_button = e.target;
   //console.log(clicked_button);
   var div_container= clicked_button.parentElement;
   var td_container=div_container.parentElement;
   
 
// console.log(prix);
   //console.log(div_container);
   var para=div_container.querySelector("p");
   var value=Number(para.innerHTML);
   value++;
   para.innerHTML=value;
   var tr_container=td_container.parentElement; 
   var pr=tr_container.querySelector(".unitPrice")
var prixunitaire=Number(pr.innerHTML)
var prix=tr_container.querySelector(".price")
 prix.innerHTML= value*prixunitaire
 sum()
}

var buttons = document.querySelectorAll(".minus")
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click",decc)
}
function decc(e) {
   var  clicked_button = e.target;
   //console.log(clicked_button);
   var div_container= clicked_button.parentElement;
   //console.log(div_container);
   var para=div_container.querySelector("p");
   //console.log(para);
   var value = Number(para.innerHTML);
   //console.log(value);
  
   if (value>0) {
    value--;
    //console.log(value);
   }
   para.innerHTML=value;
   var td_container=div_container.parentElement;
   var tr_container=td_container.parentElement; 
   var pr=tr_container.querySelector(".unitPrice")
var prixunitaire=Number(pr.innerHTML)
var prix=tr_container.querySelector(".price")
 prix.innerHTML= value*prixunitaire

 sum()
}
function sum () {
   var somme=0
   var prices=document.querySelectorAll(".price")
   for (let i =0; i< prices.length;i++) {        
      somme+=Number(prices[i].innerHTML)
       var totale=document.querySelector("#total")
totale.innerHTML=somme
       
}
}
var tdcorbeille=document.querySelector(".delete")
//console.log(tdcorbeille);
var like_buttons=document.querySelectorAll(".like")
for (let i = 0;i < like_buttons.length;i++) {
   like_buttons[i].addEventListener("click",changeColor)
   
}
function changeColor(e) {
   var cible=e.target
   if (cible.style.color!="red") {
      cible.style.color ="red"
      
   }
   else cible.style.color="gray"
   
}