const input=document.querySelector('#input-field');
const uppercase=document.querySelector('.uppercase');
const lowercase=document.querySelector('.lowercase');
const capitalize=document.querySelector('.capitalize');
const bold=document.querySelector('.bold');
const italic=document.querySelector('.italic');
const underline=document.querySelector('.underline');
let output=document.querySelector('#output-field');

uppercase.addEventListener('click',()=>{
    let value=input.value;
    output.innerHTML=value;
    output.innerHTML=value.toUpperCase();
})

lowercase.addEventListener('click',()=>{
    let value=input.value;
    output.innerHTML=value.toLowerCase();
})

capitalize.addEventListener('click',()=>{
    let value=input.value;
    output.innerHTML=value;
    output.style.textTransform = "capitalize";
})

bold.addEventListener('click',()=>{
    let value=input.value;
    output.innerHTML=value.bold();
})

italic.addEventListener('click',()=>{
    let value=input.value;
    output.innerHTML=value.italics();
})
underline.addEventListener('click',()=>{
    let value=input.value;
    output.innerHTML=value;
    output.style.textDecoration = "underline";
})