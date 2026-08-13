const words=[
"Frontend Developer",
"Python Developer",
"Web Designer",
"Programmer"
];

let i=0;
let j=0;
let current="";
let isDeleting=false;

function typing(){

current=words[i];

if(isDeleting){

document.getElementById("typing").textContent=current.substring(0,j--);

if(j<0){

isDeleting=false;
i++;

if(i==words.length){
i=0;
}

}

}else{

document.getElementById("typing").textContent=current.substring(0,j++);

if(j>current.length+1){

isDeleting=true;

}

}

setTimeout(typing,120);

}

typing();

document.getElementById("theme-btn").onclick=function(){

document.body.classList.toggle("dark");

head.style.color="white";
}

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

})

})

document.querySelectorAll(".fade").forEach(el=>observer.observe(el));

const menu=document.querySelector(".menu");
const nav=document.querySelector(".nav-links");

menu.onclick=()=>{

nav.classList.toggle("active");

}