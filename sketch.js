//Bonnie Katz- MMP 100 - Project

var diameter = 80 //diameter of the circles
var perimeter = 100 //perimeter of square
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(75, 0, 130); //Purple background colors
  fill (152,255,128); //Light green color of circles
  strokeWeight (4);
  ellipse (500,0, diameter, diameter);//location of circle and size with click

  fill (0,100,0);
  square (200,200,perimeter);//Dark green circle in middle of screen

  fill (152,255,128);
  ellipse (0,500, diameter, diameter)//green circle, gets bigger when mouse clicked

  fill (152,255,128);
  ellipse (0, 0, diameter, diameter)//green circle, gets bigger when mouse clicked

  fill (152,255,128);
  ellipse (500,500, diameter, diameter)//green circle, gets bigger when mouse clicked

  fill (255,255,255);
  stroke (0);
  textSize (30);
  textFont ("Courier New");
  text ("Welcome", 40, 50); //Top left text

  fill (255,255,255);
  stroke (0);
  textSize (30);
  textFont ("Courier New");
  text ("Click Me", 320, 450) //Bottom left text

  fill (0,0,0)
  strokeWeight (1);
  ellipse (mouseX,mouseY,15,15); //Black dot that follows mouse


  if (mouseIsPressed) {
    diameter = 300; //When the mouseIsPressed, diameter = 150
    perimeter = 35;
  } else {
    diameter = 80; //otherwise the diameter = 75
    perimeter = 100
  }



}
