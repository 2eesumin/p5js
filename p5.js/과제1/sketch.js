function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(135, 206, 235);
  
  fill(100, 200, 100);
  rect(0, 320, 600, 80);
  
  fill(255, 100, 150);
  stroke(200, 50, 100);
  strokeWeight(2);

  circle(300, 120, 60);  
  circle(370, 160, 60);  
  circle(340, 250, 60);  
  circle(260, 250, 60); 
  circle(230, 160, 60);
  
  fill(255, 204, 0);
  stroke(150, 100, 0);
  strokeWeight(2);
  circle(300, 193, 60);
  
  stroke(30, 120, 30);
  strokeWeight(8);
  line(300, 230, 300, 320);
  
  
  fill(255, 150, 200, 200);
  ellipse(470, 100, 20, 30);
  ellipse(490, 100, 20, 30);
  
  fill(0);
  ellipse(480, 100, 10, 15);
  ellipse(480, 110, 8, 12);
  
  stroke(135, 206, 235);
  strokeWeight(4);
  line(480, 95, 480, 90);
  stroke(0);
  strokeWeight(2);
  line(475, 90, 480, 95);
  line(485, 90, 480, 95);
}