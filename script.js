var tema = document.getElementById("modo-btn");

if (localStorage.getItem("modo") === "oscuro"){
    document.body.classList.add("modo-oscuro");
}

tema.onclick = function(){
    document.body.classList.toggle("modo-oscuro");

    if (document.body.classList.contains("modo-oscuro")){
        localStorage.setItem("modo", "oscuro")
    }

    else{
        localStorage.setItem("modo", "claro");
    }
}