function setup() {
createCanvas(1500,750, WEBGL);

}

function draw() {
  background('#fae');
  rotateY(frameCount * 0.01);
  fill('rgba(167,50,16,0.65)');
  stroke(202,300,100)
  box(200);
  rotateX(frameCount * 0.02);
  fill('rgba(214,50,50,0.35)');
  stroke(130,50,50);
  box(350);
  rotateX(frameCount* 0.01)
  fill('rgba(150,50,106,0.70)');
  stroke(50)
  ellipsoid(100, 100, 100);
  fill('rgba(143,50,191,0.50)');
  stroke(178,190,250,)
  rotateX(frameCount* 0.0000001)
  rotateY(frameCount* 0.0000001);
  torus(230,34,6);





}
