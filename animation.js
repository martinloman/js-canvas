let canvas = document.getElementById("canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight

let context = canvas.getContext("2d")

context.fillStyle = "black"
context.fillRect(10, 10, canvas.width, canvas.height)

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
function updatePosition(rect) {
  rect.posX += speedX
  // Denna if-sats kontrollerar om rutan nått botten och vänder i så fall på
  // hastigheten, i y-led, så den riktas uppåt.
  if (rect.posY + speedY + rect.height > canvas.height) {
    speedY = -speedY
  }

  rect.posY += speedY
}

// Denna funktion "tömmer" canvasen genom att måla den svart.
function clearCanvas() {
  context.fillStyle = "black"
  context.fillRect(10, 10, canvas.width, canvas.height)
}

// Det här är huvudfunktionen som kör funktioner för att animeringen ska fungera.
function update() {
  clearCanvas()
  updatePosition(square)
  drawRect(square)
}

// setInterval kör en funktion med jämna mellanrum.
// Argument 1 är funktionen som ska köras.
// Argument 2 är hur många millisekunder det ska vara mellan körningarna.
setInterval(update, 10)
