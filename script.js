let text = "Wishing you happiness, success and lots of cake today! 🎂";

let i = 0;

function openGift(){

document.getElementById("giftScreen").style.display="none";
document.getElementById("mainContent").style.display="block";

typeText();
startFireworks();
}

function typeText(){

if(i < text.length){

document.getElementById("message").innerHTML += text.charAt(i);
i++;

setTimeout(typeText,80);

}

}

function startFireworks(){

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<100;i++){

particles.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*5,
speedY:Math.random()*3+1

});

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="yellow";

particles.forEach(p=>{

ctx.beginPath();
ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
ctx.fill();

p.y+=p.speedY;

if(p.y>canvas.height){
p.y=0;
}

});

requestAnimationFrame(animate);

}

animate();

}
