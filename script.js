console.log("JavaScript fonctionne!");

const btnMessage = document.getElementById("btnMessage");
const message = document.getElementById("message");

btnMessage.addEventListener("click",function(){
    message.textContent = "Bravo, tu as clique sur le button !;"
});