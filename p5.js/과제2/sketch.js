let xPos;

function setup() {
  createCanvas(600, 400);
  xPos = width / 2;  
}

function draw() {
  background('#FFD8E4');

  drawCharacter(xPos);
}

function drawCharacter(x) {
  noStroke();

  //머리
  fill('#3B2A28');
  rect(x - 60, 180, 120, 160);

  //얼굴
  fill('#FFE0BD');
  ellipse(x, 180, 140, 160);

  //귀
  ellipse(x - 70, 180, 20, 30);
  ellipse(x + 70, 180, 20, 30);

  //앞머리
  fill('#3B2A28');
  arc(x, 140, 140, 100, PI, TWO_PI, OPEN);

  //눈
  fill(255);
  ellipse(x - 20, 170, 20, 20);
  ellipse(x + 20, 170, 20, 20);

  //눈동자
  fill(0);
  ellipse(x - 20, 170, 10, 10);
  ellipse(x + 20, 170, 10, 10);

  //눈썹
  stroke(0);
  strokeWeight(2);
  line(x - 30, 155, x - 10, 155);
  line(x + 10, 155, x + 30, 155);

  //코
  stroke(100);
  line(x, 180, x, 190);

  //입
  noFill();
  stroke(200, 50, 50);
  strokeWeight(3);
  arc(x, 210, 50, 30, 0, PI);

  //볼터치
  noStroke();
  fill('#FFB6B6');
  ellipse(x - 40, 195, 15, 15);
  ellipse(x + 40, 195, 15, 15);

  //옷
  fill('#FFD700');
  rect(x - 50, 260, 100, 80, 20);
  fill('#FFE0BD');
  ellipse(x - 40, 320, 20, 40);
  ellipse(x + 40, 320, 20, 40);

  //리본
  fill('#E91E63');
  ellipse(x + 50, 120, 15, 15);
  ellipse(x + 40, 120, 15, 15);
  ellipse(x + 60, 120, 15, 15);
}
