const plusBtn=document.getElementById("plus-btn")
const minusBtn=document.getElementById("minus-btn")
const bolBtn=document.getElementById("bol-btn")
const kopBtn=document.getElementById("kop-btn")
const son1=document.getElementById("son1")
const son2=document.getElementById("son2")
const result=document.getElementById("result")
import {qoshish,ayirish,kop,bol} from "./calc.js";
plusBtn.addEventListener("click",()=>{
    result.textContent="Result: "+ qoshish(+son1.value, +son2.value)
})
minusBtn.addEventListener("click",()=>{
    result.textContent="Result: "+ ayirish(+son1.value, +son2.value)
})
kopBtn.addEventListener("click",()=>{
    result.textContent="Result: "+ kop(+son1.value, +son2.value)
})
bolBtn.addEventListener("click",()=>{
    result.textContent="Result: "+ bol(+son1.value, +son2.value)
})
