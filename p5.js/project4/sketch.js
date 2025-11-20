function setup() {
  createCanvas(600, 400);
  saveGif('mySketch', 10);
}

function draw() {
  background(135, 206, 235);
  
  fill(100, 200, 100);
  rect(0, 320, 600, 80);
  
  let sway = sin(frameCount * 0.05) * 10;
  
  fill(255, 100, 150);
  stroke(200, 50, 100);
  strokeWeight(2);

  circle(300 + sway, 120, 60);  
  circle(370 + sway, 160, 60);  
  circle(340 + sway, 250, 60);  
  circle(260 + sway, 250, 60); 
  circle(230 + sway, 160, 60);
  
  let fcenter = (frameCount * 2) % 360; 
  
  colorMode(HSB, 360, 100, 100);
  fill(fcenter, 80, 100);
  stroke(fcenter, 60, 60);
  strokeWeight(2);
  circle(300 + sway, 193, 60);
  
  colorMode(RGB, 255);
  
  stroke(30, 120, 30);
  strokeWeight(8);
  line(300 + sway, 230, 300 + sway, 320);
  
  
  
  let bx = 480 + sin(frameCount * 0.02) * 60; 
  let by = 100 + cos(frameCount * 0.03) * 20;

  
  let wingSize = 20 + sin(frameCount * 0.4) * 6;


  fill(330, 40, 100, 80);
  noStroke();
  ellipse(bx - 10, by, wingSize, wingSize * 1.5);
  ellipse(bx + 10, by, wingSize, wingSize * 1.5);

  fill(0);
  ellipse(bx, by, wingSize * 0.5, wingSize * 0.8);
  ellipse(bx, by + 10, wingSize * 0.4, wingSize * 0.6);

  stroke(0);
  strokeWeight(2);
  line(bx - 5, by - 15, bx, by - 5);
  line(bx + 5, by - 15, bx, by - 5);
}