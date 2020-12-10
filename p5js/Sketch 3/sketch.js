
function setup() {
    createCanvas(720, 400);
    noStroke();
    rectMode(CENTER);
  }
  
  function draw() {
    background(0);
    fill(124,201,165);
    rect(mouseX, height / 2, mouseY / 2 + 10, mouseY / 2 + 10);
    fill(33,67,156);
    let inverseX = width - mouseX;
    let inverseY = height - mouseY;
    rect(inverseX, height / 2, inverseY / 20 + 40, inverseY / 100 + 100);
    
  }
  