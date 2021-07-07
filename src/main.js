import App from './components/App.js';

document.getElementById("seven").style.display = "none";
document.getElementById("blockFive").style.display = "none";
document.getElementById('buttonPlay').addEventListener("click", () => {

    document.getElementById("container").replaceChild(App(), document.getElementById("blockOne"));
    document.getElementById("copyright").style.display = "none"
    document.getElementById("blockThree").style.display = "block";
});

document.getElementById("help").addEventListener("click", () => {
    document.getElementById("container").style.display = "none";
    document.getElementById("seven").style.display = "block";
});

document.getElementById("helpInformation").addEventListener("click", () => {
    document.getElementById("container").style.display = "none";
    document.getElementById("seven").style.display = "block";
});


document.getElementById("close").addEventListener("click", () => {
    location.reload();
});

document.getElementById("home").addEventListener("click", () => {
    location.reload();
});

document.getElementById("undo").addEventListener("click", () => {
    alert("Botón no funcional"); //Requiere una ruta
});

document.getElementById("homeResults").addEventListener("click", () => {
    location.reload();
});

document.getElementById("undoResults").addEventListener("click", () => {
    alert("Botón no funcional"); //Requiere una ruta
});

                