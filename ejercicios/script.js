// Ej 1
document.getElementById("btnAlerta").addEventListener("click", function () {
    alert("Hola mundo");
});


// Ej 2
document.getElementById("btnConsola").addEventListener("click", function () {
    console.log("Hola mundo");
});


// Ej 3
document.getElementById("btnDOM").addEventListener("click", function () {
    document.getElementById("contenido").innerHTML =
        "El texto ha cambiado";
});


// Ej 4
document.getElementById("btnWrite").addEventListener("click", function () {
    document.write("<h1>Hola mundo</h1>");
});
