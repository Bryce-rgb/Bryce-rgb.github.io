function setup() {
    createCanvas(500,500);
  }
  
  function draw(){
    if(mouseIsPressed){
      fill(1000);
    }else{
      fill(50,100,50);
    }
    ellipse(mouseX,mouseY,80,200);
  }