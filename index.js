const menu = document.querySelector("#menu")
const cancel = document.querySelector("#cancel")
const hiddenMenu = document.querySelector("#hidden_menu")
const client = document.querySelectorAll(".client")
const loader = document.querySelector(".preload")

window.addEventListener("load", ()=>{
    loader.style.display = "none";
})

menu.addEventListener("click", setMenu)
cancel.addEventListener("click", setMenu)

function setMenu(){
    menu.classList.toggle("hidden");
    cancel.classList.toggle("hidden");
    hiddenMenu.classList.toggle("hidden");
}

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("slide")
        }
    })

})

client.forEach((element)=>{
    observer.observe(element);
})