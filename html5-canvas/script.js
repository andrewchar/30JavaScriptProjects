const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = 'pink';
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 25;

let x = 0;
let y = 0;
let isDrawing = false;
let hue = 0;
let direction = true;


function draw(e) {
	if (!isDrawing) return;
	ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(e.offsetX, e.offsetY);
	ctx.stroke();
	[x, y] = [e.offsetX, e.offsetY];

	hue++;
	if (hue >= 360) {
		hue = 0;
	}

	if (ctx.lineWidth >= 25 || ctx.lineWidth <= 3) {
	    direction = !direction;
	}
	if(direction) {
		ctx.lineWidth = ctx.lineWidth + 0.25;
	} else {
		ctx.lineWidth = ctx.lineWidth - 0.25;
	}
};

canvas.addEventListener('mousedown', (e) => {
	isDrawing = true;
	[x, y] = [e.offsetX, e.offsetY];
});


canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);