
let like1 = document.querySelector('#like1'); 
let like2= document.querySelector('#like2'); 
let like3= document.querySelector('#like3'); 
let input1= document.querySelector('#input1'); 
let input2= document.querySelector('#input2'); 
let input3= document.querySelector('#input3'); 

like1.addEventListener('click',()=>{
    input1.value = parseInt(input1.value) +1;
})

like2.addEventListener('click',()=>{
    input2.value = parseInt(input2.value) +1;
})

like3.addEventListener('click',()=>{
    input3.value = parseInt(input3.value) +1;
})

like4.addEventListener('click',()=>{
    input4.value = parseInt(input4.value) +1;
})




