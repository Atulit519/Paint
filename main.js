canvas = document.getElementById("MyCanvas");
ctx = canvas.getContext("2d");
color = "black";
lineWidth = 1;
mouseEvent = "hello";
var LastX;
var LastY;

canvas.addEventListener("mousedown", MyMouseDown);

function MyMouseDown(i) {
    mouseEvent = "mouseDown";
    color = document.getElementById("ColorInput").value;
    lineWidth = document.getElementById("LineWidth").value;
}

canvas.addEventListener("mouseup", MyMouseUp);

function MyMouseUp(i){
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave", MyMouseLeave);

function MyMouseLeave(i){
    mouseEvent = "mouseLeave";
}

canvas.addEventListener("mousemove", MyMouseMove);

function MyMouseMove(i){
    CurrentX = i.clientX - canvas.offsetLeft;
    CurrentY = i.clientY - canvas.offsetTop;
    console.log(LastX, LastY, CurrentX, CurrentY);
    if(mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.moveTo(LastX, LastY);
        ctx.lineTo(CurrentX, CurrentY);
        ctx.stroke();
    }

    LastX = CurrentX;
    LastY = CurrentY;
    
}