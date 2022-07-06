/**
 * I used a scale factor to render the stars
 * proportionally, for that it was necessary
 * to reduce the sun's radius by half and
 * double the radius of the rocky planets
 */

const data = {
  sun: {
    name: "Sun",
    color: [255, 194, 18],
    radius: 695508 / 2,
    distance: 0,
    orbit_speed: 0,
    satellites: [
      {
        name: "Mercury",
        color: [181, 167, 167],
        radius: 2439.7 * 2,
        distance: 150,
        orbit_speed: -0.048,
      },
      {
        name: "Venus",
        color: [221, 216, 212],
        radius: 6051.8 * 2,
        distance: 200,
        orbit_speed: -0.035,
      },
      {
        name: "Earth",
        color: [140, 177, 222],
        radius: 6371 * 2,
        distance: 250,
        orbit_speed: -0.03,
        satellites: [
          {
            name: "Moon",
            color: [240, 239, 226],
            radius: 1737.5 * 2,
            distance: 5,
            orbit_speed: -0.03,
          },
        ],
      },
      {
        name: "Mars",
        color: [226, 123, 88],
        radius: 3389.5 * 2,
        distance: 300,
        orbit_speed: -0.024,
      },
      {
        name: "Jupiter",
        color: [211, 156, 126],
        radius: 69911,
        distance: 400,
        orbit_speed: -0.013,
      },
      {
        name: "Saturn",
        color: [197, 171, 110],
        radius: 58232,
        distance: 500,
        orbit_speed: -0.01,
      },
      {
        name: "Uranus",
        color: [147, 184, 190],
        radius: 25362,
        distance: 600,
        orbit_speed: -0.007,
      },
      {
        name: "Neptune",
        color: [62, 84, 232],
        radius: 24622,
        distance: 700,
        orbit_speed: -0.005,
      },
    ],
  },
};
