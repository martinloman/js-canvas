let canvas = document.getElementById("canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight - 10 // -10 eftersom canvasen blir liiite för stor annars ¯\_(ツ)_/¯

let context = canvas.getContext("2d")

//Ett objekt som håller information om en ruta som ska ritas
let square = {
  color: "red",
  width: 30,
  height: 30,
  posX: 10,
  posY: 10,
}

// Variabler för att styra hastigheten på rutan
let speedX = 2
let speedY = 2

//Ritar ut en ruta med sin färg, på den position den befinner sig.
function drawRect(rect) {
  context.fillStyle = rect.color
  context.fillRect(rect.posX, rect.posY, rect.width, rect.height)
}

//Uppdaterar postionen på en ruta, beror av speedX och speedY
function updatePosition(rect) {}

// Denna funktion "tömmer" canvasen genom att måla den svart.
function clearCanvas() {
  context.fillStyle = "black"
  context.fillRect(0, 0, canvas.width, canvas.height)
}

// Det här är huvudfunktionen som kör funktioner för att animeringen ska fungera.
function update() {
  updatePosition(square)
  clearCanvas()
  drawRect(square)
  requestAnimationFrame(update) //Kör den här funktionen igen. Det här skapar en "oändlig loop".
}

// requestAnimationFrame(funktion) kör en funktion en gång. Funktionen körs på ett sätt
// som är optimerat för att animera i en webbläsare.
requestAnimationFrame(update)
