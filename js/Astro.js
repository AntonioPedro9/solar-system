class Astro {
  constructor({ name, color, radius, distance, orbit_speed, satellites }) {
    this.name = name;
    this.distance = distance;
    this.radius = radius;
    this.color = color;
    this.orbit_speed = orbit_speed;
    this.satellites = { array: [], data: satellites };
    this.angle = 0;
  }

  show() {
    push();

    noStroke();
    fill(this.color);
    rotate(this.angle);
    translate(this.distance, 0);
    ellipse(0, 0, this.radius * 2, this.radius * 2);

    if (this.satellites) {
      for (let i in this.satellites.array) {
        this.satellites.array[i].show();
      }
    }

    pop();
  }

  spawnSatellites() {
    if (this.satellites.data) {
      for (let i in this.satellites.data) {
        let satellite = new Astro(this.satellites.data[i]);

        this.satellites.array.push(satellite);

        satellite.show();
        satellite.spawnSatellites();
      }
    }
  }

  orbit() {
    this.angle += this.orbit_speed;

    if (this.satellites) {
      for (let i in this.satellites.array) {
        this.satellites.array[i].orbit();
      }
    }
  }
}
