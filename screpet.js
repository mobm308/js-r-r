let heart_btn=document.getElementsByClassName("heart_btn")
let plus_btn=document.getElementsByClassName("plus_btn")
let minus_btn=document.getElementsByClassName("minus_minus")
let Quant=document.getElementsByClassName("Quant")
let prices=[1379,179,249]
let finalPrice=document.getElementsByClassName("finalPrice")
for(let index = 0; index< heart_btn.length; index++){
    // heart like
    heart_btn[index].addEventListener("click",function(){
        if(heart_btn[index].style.color==="red"){
            heart_btn[index].style.color="black"
        }
        else{
            heart_btn[index].style.color="red"    
        }
    })
    // plus botton
    plus_btn[index].addEventListener("click,",function(){
        if (Quant[index].value=="1"){
            Quant[index].value=Number(Quant[index].value)+1

        }
    })
    // Minus botton
    minus_btn[index].addEventListener("click",function(){
        if (Quant[index].value!="1"){
            Quant[index].value=Number(Quant[index].value-1)
            finalPrice.value=Number(finalPrice.value)-prices[index]
        }
    })
    // delet Button
    delete_btn[index].addEventListener("click",function(){
        delete_btn[index].style.display='none'
        finalPrice.value=Number(finalPrice.value)-(prices[index]Number(Quant[index].value))
    })
}