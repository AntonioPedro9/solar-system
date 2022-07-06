let sun;

function setup() {
  createCanvas(windowWidth, windowHeight);

  sun = new Astro(data.sun);
  sun.spawnSatellites();
}

function draw() {
  background(0);

  translate(width / 2, height / 2);

  sun.show();
  sun.orbit();
}
