
function doIt() {
    let c = document.getElementById("myCan");
    let ctx = c.getContext("2d");
    ctx.fillStyle = 'rgba(100, 100, 100, 0.9)'
    ctx.arc(200, 100, 100, 0, 2 * Math.PI);
    ctx.stroke()
    let leftCirkle = c.getContext('2d')
    leftCirkle.beginPath();
    leftCirkle.arc(170, 75, 10, 0, 2 * Math.PI);
    leftCirkle.stroke()
    let rightCirkle = c.getContext('2d')
    rightCirkle.beginPath();
    rightCirkle.arc(230, 75, 10, 0, 2 * Math.PI);
    rightCirkle.stroke()
    let smile = c.getContext('2d')
    smile.beginPath();
    smile.arc(200, 100, 75, 0, 1 * Math.PI);
    smile.stroke()
}
function doIt1() {
    let c = document.getElementById("myCan1");
    let ctx = c.getContext("2d");
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ', ' +
                Math.floor(255 - 42.5 * j) + ', 0)';
            ctx.fillRect(j * 25, i * 25, 25, 25);
        }

    }
}
function doIt2() {
    drawText('0', 80, 400) 
    drawText('10', 80, 350) 
    drawText('20', 80, 300) 
    drawText('30', 80, 250) 
    drawText('40', 80, 200) 
    drawText('50', 80, 150) 
    drawLine(100,100,100,400);
    drawLine(100,400,400,400);
    drawLine(100,350,220,285);
    drawLine(220,285,285,330);
    drawLine(285,330,400,150);
}

// doIt();
// doIt1();
doIt2();

function drawLine(a,b,c,d) {
    let canvas = document.getElementById("myCan2");
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    ctx.moveTo(a, b);
    ctx.lineTo(c, d);
    ctx.stroke();
}
function drawText(text, a,b) {
    let canvas = document.getElementById("myCan2");
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = 'rgba(255, 255, 255, 1)';   
    ctx.font = '14px serif' 
    ctx.strokeText(text, a, b)

}
