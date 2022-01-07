var mouseevent = "empty"
var lastx, lasty
var currentx, currenty
var canvas = document.getElementById("mc")
var ctx = canvas.getContext("2d")


var color = "black"
var width = 1
canvas.addEventListener("mousedown", mymousedown)

function mymousedown(e) {
    color = document.getElementById("color").value
    width = document.getElementById("widthLine").value
    mouseevent = "mousedown";
}

canvas.addEventListener("mousemove", mymousemove)

function mymousemove(e) {



    currentx = e.clientX - canvas.offsetLeft
    currenty = e.clientY - canvas.offsetTop
    if (mouseevent == "mousedown") {
        ctx.beginPath()
        ctx.strokeStyle = color
        ctx.lineWidth = width

        ctx.moveTo(lastx, lasty)
        ctx.lineTo(currentx, currenty)
        ctx.stroke()

    }
    lastx = currentx
    lasty = currenty

}


canvas.addEventListener("mouseup", mymouseup)

function mymouseup(e) {
    mouseevent = "mouseup"
}

canvas.addEventListener("mouseleave", mymouseleave)

function mymouseleave(e) {
    mouseevent = "mouseleave"
}

canvas.addEventListener("touchmove", tm)

function tm(e) {
    currentx = e.touches[0].clientX - canvas.offsetLeft
    currentx = y.touches[0].clientY - canvas.offsetTop
    canvas.getContext("2d").beginPath()
    canvas.getContext("2d").strokeStyle = color
    canvas.getContext("2d").lineWidth = width

    canvas.getContext("2d").moveTo(lastx, lasty)
    canvas.getContext("2d").lineTo(currentx, currenty)
    canvas.getContext("2d").stroke()

    lastx = currentx
    lasty = currenty


}

canvas.addEventListener("touchstart", ts)

function ts(e) {

    currentx = e.touches[0].clientX - canvas.offsetLeft
    currentx = y.touches[0].clientY - canvas.offsetTop
    lastx = currentx
    lasty = currenty
}