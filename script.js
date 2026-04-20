function startSurprise(){

document.getElementById("birthday").style.display="block"

document.getElementById("title").style.display="none"

document.querySelector("button").style.display="none"

document.getElementById("music").play()

confetti()

}

function confetti(){

for(let i=0;i<80;i++){

let conf=document.createElement("div")

conf.style.position="fixed"
conf.style.width="10px"
conf.style.height="10px"
conf.style.background="white"

conf.style.left=Math.random()*100+"vw"
conf.style.top="-10px"

document.body.appendChild(conf)

let fall=Math.random()*3+2

conf.animate([
{transform:"translateY(0)"},
{transform:"translateY(100vh)"}
],{
duration:fall*1000,
iterations:1
})

}
}