let expression = "smile";
let xPos = 300; // 캐릭터 x 위치

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background('#FFD8E4');
  drawCharacter(xPos, mouseX, expression);
}


function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    xPos -= 10;
  } else if (keyCode === RIGHT_ARROW) {
    xPos += 10;
  }
}

function drawCharacter(x, mx, mood) {
  noStroke();

  // 머리카락
  fill('#3B2A28');
  rect(x - 60, 180, 120, 160);

  // 얼굴
  fill('#FFE0BD');
  ellipse(x, 180, 140, 160);

  // 귀
  ellipse(x - 70, 180, 20, 30);
  ellipse(x + 70, 180, 20, 30);

  // 앞머리
  fill('#3B2A28');
  arc(x, 140, 140, 100, PI, TWO_PI, OPEN);

  // 눈
  fill(255);
  ellipse(x - 20, 170, 20, 20);
  ellipse(x + 20, 170, 20, 20);

  // 눈동자 - 마우스 따라 이동
  let leftPupilX = constrain(map(mx, 0, width, x - 25, x - 15), x - 25, x - 15);
  let rightPupilX = constrain(map(mx, 0, width, x + 15, x + 25), x + 15, x + 25);
  let pupilY = 170;
  fill(0);
  ellipse(leftPupilX, pupilY, 10, 10);
  ellipse(rightPupilX, pupilY, 10, 10);

  // 눈썹
  stroke(0);
  strokeWeight(2);
  line(x - 30, 155, x - 10, 155);
  line(x + 10, 155, x + 30, 155);

  // 코
  stroke(100);
  line(x, 180, x, 190);

  // 입
  noFill();
  strokeWeight(3);
  if (mood === "smile") {
    stroke(200, 50, 50);
    arc(x, 210, 50, 30, 0, PI);
  } else if (mood === "surprised") {
    stroke(50, 50, 200);
    ellipse(x, 210, 20, 20);
  }

  // 볼터치
  noStroke();
  fill('#FFB6B6');
  ellipse(x - 40, 195, 15, 15);
  ellipse(x + 40, 195, 15, 15);

  // 옷
  fill('#FFD700');
  rect(x - 50, 260, 100, 80, 20);
  fill('#FFE0BD');
  ellipse(x - 40, 320, 20, 40);
  ellipse(x + 40, 320, 20, 40);

  // 리본
  fill('#E91E63');
  ellipse(x + 50, 120, 15, 15);
  ellipse(x + 40, 120, 15, 15);
  ellipse(x + 60, 120, 15, 15);
  
  
  function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 8);
  }
}
}