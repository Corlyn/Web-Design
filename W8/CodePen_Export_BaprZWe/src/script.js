var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext('2d')

canvas.width=400
canvas.height=400

/*ctx.beginPath()
ctx.moveTo(100,100)
ctx.lineTo(300,100)
ctx.lineTo(300,300)
ctx.lineTo(100,300)
ctx.stroke()*/

//梯形
/*ctx.beginPath()
ctx.moveTo(100,100)
ctx.lineTo(300,100)
ctx.lineTo(350,300)
ctx.lineTo(50,300)
ctx.closePath()
ctx.fillStyle="#468d9e"
ctx.fill()*/

ctx.fillStyle="#fff6d1"
ctx.fillRect(0,0,500,500)

//三角形藍
ctx.beginPath()
ctx.moveTo(100,0)
ctx.lineTo(100,100)
ctx.lineTo(300,100)
ctx.closePath()
ctx.fillStyle="#39afdd"
ctx.fill()

//三角形紅
ctx.beginPath()
ctx.moveTo(100,100)
ctx.lineTo(100,300)
ctx.lineTo(300,100)
ctx.closePath()
ctx.fillStyle="#ffd800"
ctx.fill()

//三角形黃
ctx.beginPath()
ctx.moveTo(300,100)
ctx.lineTo(300,300)
ctx.lineTo(100,300)
ctx.closePath()
ctx.fillStyle="#7ccc7c"
ctx.fill()

//三角形紅
ctx.beginPath()
ctx.moveTo(100,300)
ctx.lineTo(300,300)
ctx.lineTo(300,400)
ctx.closePath()
ctx.fillStyle="#d27858"
ctx.fill()




