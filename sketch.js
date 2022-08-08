let walls = [];
let ray;
let particle;
let xoff = 1000;
let yoff = 0;


function setup() {
	createCanvas(400, 400);

	for (let i=0; i < 5; i++) {

		let x1 = random(width)
		let y1 = random(height)
		let x2 = random(width)
		let y2 = random(height)

		// paredes aleatorias
		walls.push(new Boundary(x1, y1, x2, y2));
	}

	// paredes externas
	walls.push(new Boundary(0, 0, width, 0));
	walls.push(new Boundary(width, 0, width, height));
	walls.push(new Boundary(width, height, 0, height));
	walls.push(new Boundary(0, height, 0, 0));

	particle = new Particle();
}

function draw() {
	background(0);

	for (let wall of walls) {
		wall.show();
	}

	particle.update(mouseX, mouseY);
	//particle.update(noise(xoff) * width, noise(yoff) * height);
	
	particle.show();
	particle.look(walls);		

	xoff += 0.01;
	yoff += 0.01;
}
