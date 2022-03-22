
 var input1 = document.querySelector(".vlr-1")

 var input2 = document.querySelector(".vlr-2")

 var v1 = parseFloat(v1)
 var v2 = parseFloat(v2)

function somar(){
    
    var v1 = input1.value
    var v2 = input2.value

    var add = parseFloat(v1) + parseFloat(v2)
    
    var resposta = document.querySelector(".asw")
    
    resposta.innerHTML = ": " + add 
}
function subtrair(){
    
    var v1 = input1.value
    var v2 = input2.value

    var add = parseFloat(v1) - parseFloat(v2)
    
    var resposta = document.querySelector(".asw")
    
    resposta.innerHTML = ": " + add 
}
function multiplicar(){
    
    var v1 = input1.value
    var v2 = input2.value

    var add = parseFloat(v1) * parseFloat(v2)
    
    var resposta = document.querySelector(".asw")
    
    resposta.innerHTML = ": " + add 
}
function dividir(){
    
    var v1 = input1.value
    var v2 = input2.value

    var add = parseFloat(v1) / parseFloat(v2)
    
    var resposta = document.querySelector(".asw")
    
    resposta.innerHTML = ": " + add 
}

const btn = document.querySelectorAll(".kbd")
for(const kbd of btn){
    kbd.addEventListener("click", function(){
        kbd.classList.toggle("select")
    })
}

