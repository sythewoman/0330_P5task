function setup() {
	createCanvas(400,400);
  // put setup code here
}

function draw() {
	var cx = (mouseX, 0, width,0,255);
	var cy = (mouseY, 0, height,0,255);
	var nsize = width/8+cos(mouseY*PI/180)*width/16;
	fill(cx,cy,cx/2,cy/2);
	circle(mouseX,mouseY,nsize);
  // put drawing code here
}