// script.js
// Happy Birthday Crystal 💎
// Shared animations for all pages


// ---------- Page Fade Effect ----------

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});

function goPage(page){

document.body.classList.add("fadeOut");

setTimeout(()=>{

window.location.href=page;

},1200);

}


// ---------- Create Stars ----------

function createStars(){

for(let i=0;i<150;i++){

let star=document.createElement("div");

star.className="star";

star.style.position="fixed";

star.style.width=Math.random()*3+"px";

star.style.height=star.style.width;

star.style.background="white";

star.style.borderRadius="50%";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.opacity=Math.random();

star.style.animation=
"twinkle "+(2+Math.random()*4)+"s infinite";

document.body.appendChild(star);

}

}

createStars();


// ---------- Floating Hearts ----------

function createHearts(){

for(let i=0;i<25;i++){

let heart=document.createElement("div");

heart.innerHTML="💙";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.bottom="-50px";

heart.style.fontSize=
(15+Math.random()*30)+"px";

heart.style.animation=
"heartMove "+(8+Math.random()*8)+"s linear infinite";

heart.style.animationDelay=
Math.random()*5+"s";

document.body.appendChild(heart);

}

}

createHearts();


// ---------- Type Writer ----------

function typeText(element,text,speed=80){

let i=0;

element.innerHTML="";

let timer=setInterval(()=>{

element.innerHTML+=text.charAt(i);

i++;

if(i>=text.length){

clearInterval(timer);

}

},speed);

}


// ---------- Fireworks ----------

function fireworks(){

for(let i=0;i<200;i++){

let spark=document.createElement("div");

spark.style.position="fixed";

spark.style.width="7px";

spark.style.height="7px";

spark.style.borderRadius="50%";

spark.style.background=
`hsl(${Math.random()*360},100%,60%)`;

spark.style.left="50%";

spark.style.top="50%";

document.body.appendChild(spark);


let x=(Math.random()-0.5)*1000;

let y=(Math.random()-0.5)*800;


spark.animate([

{
transform:"translate(0,0)",
opacity:1
},

{
transform:
`translate(${x}px,${y}px)`,
opacity:0
}

],{

duration:2000,
easing:"ease-out"

});


setTimeout(()=>{

spark.remove();

},2000);

}

}


// ---------- Confetti ----------

function confetti(){

for(let i=0;i<250;i++){

let piece=document.createElement("div");

piece.style.position="fixed";

piece.style.width="10px";

piece.style.height="10px";

piece.style.background=
`hsl(${Math.random()*360},100%,50%)`;

piece.style.left=
Math.random()*100+"vw";

piece.style.top="-20px";

piece.style.borderRadius="50%";

document.body.appendChild(piece);


let fall=setInterval(()=>{

piece.style.top=
(piece.offsetTop+5)+"px";

if(piece.offsetTop>window.innerHeight){

clearInterval(fall);

piece.remove();

}

},20);

}

}


// ---------- Music Control ----------

function playMusic(){

let music=document.getElementById("music");

if(music){

music.play();

}

}


// ---------- Button Surprise ----------

function surprise(){

fireworks();

confetti();

}


// ---------- Add Enter Animation ----------

document.querySelectorAll(".glass,.glass-card")
.forEach(card=>{

card.style.opacity="0";

setTimeout(()=>{

card.style.opacity="1";

},500);

});


// ---------- Auto Start Music ----------

document.addEventListener("click",()=>{

let audio=document.querySelector("audio");

if(audio){

audio.play().catch(()=>{});

}

},{once:true});