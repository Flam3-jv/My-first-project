var box;



function setup() {
  createCanvas(400, 400);
box=createSprite(200,200,100,100);

}

function draw() {
  background(220);
  if(keyDown(RIGHT_ARROW ))
  {
  box.position.x=box.position.x+5
  }
  drawSprites();
}