/**
 * Astro class
 * @param {array}  color       - Astro color in an rgb array
 * @param {number} radius      - Astro radius
 * @param {number} distance    - Astro distance from solar system center
 * @param {number} orbit_speed - Astro orbit speed
 * @param {array}  satellites  - Astro satellite array
 * @return {void}
 */
class Astro {
  constructor({ color, radius, distance, orbit_speed, satellites }) {
    this.distance = distance;
    this.radius = radius;
    this.color = color;
    this.orbit_speed = orbit_speed;
    this.satellites = { array: [], data: satellites };
    this.angle = random(TWO_PI);
  }

  /**
   * Displays astro on screen
   */
  show() {
    push();

    rotate(this.angle);
    translate(this.distance, 0);

    const scale_factor = 5000;
    const scaled_radius = this.radius / scale_factor;
    const scaled_diameter = scaled_radius * 2;

    noStroke();

    if (this.color.inner && this.color.outer) {
      let gradient = drawingContext.createRadialGradient(
        -scaled_radius * 0.2,
        -scaled_radius * 0.2,
        0,
        0,
        0,
        scaled_radius,
      );
      gradient.addColorStop(0, this.color.inner);
      gradient.addColorStop(1, this.color.outer);
      drawingContext.fillStyle = gradient;
    } else {
      fill(this.color);
    }

    ellipse(0, 0, scaled_diameter);

    if (this.satellites.data) {
      for (let i in this.satellites.array) {
        this.satellites.array[i].show();
      }
    }

    pop();
  }

  /**
   * Spawns the astro's satellites
   */
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

  /**
   * Make the astro orbit
   */
  orbit() {
    this.angle += this.orbit_speed / 5;

    if (this.satellites.data) {
      for (let i in this.satellites.array) {
        this.satellites.array[i].orbit();
      }
    }
  }
}
