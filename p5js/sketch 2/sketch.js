function setup() {
    createCanvas(1000,1000);
  }
  
  function draw(){
    if(mouseIsPressed){
      fill(1000);
    }else{
      fill(50,100,50);
    }
    ellipse(mouseX,mouseY,80,200);
  }