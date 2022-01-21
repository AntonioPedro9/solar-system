const scale_factor = 5;

const data = {
  sun: {
    name: "Sun",
    color: [255, 194, 18],
    radius: 695.5 / (scale_factor * 2),
    distance: 0,
    orbit_speed: 0,
    satellites: [
      {
        name: "Mercury",
        color: [181, 167, 167],
        radius: 2.4 / (scale_factor / 2),
        distance: 600 / scale_factor,
        orbit_speed: 0.049 / scale_factor,
      },
      {
        name: "Venus",
        color: [221, 216, 212],
        radius: 6.0 / (scale_factor / 2),
        distance: 800 / scale_factor,
        orbit_speed: 0.035 / scale_factor,
      },
      {
        name: "Earth",
        color: [140, 177, 222],
        radius: 6.4 / (scale_factor / 2),
        distance: 1000 / scale_factor,
        orbit_speed: -0.029 / scale_factor,
        satellites: [
          {
            name: "Moon",
            color: [240, 239, 226],
            radius: 1.7 / (scale_factor / 2),
            distance: 25 / scale_factor,
            orbit_speed: -0.05 / scale_factor,
          },
        ],
      },
      {
        name: "Mars",
        color: [226, 123, 88],
        radius: 3.4 / (scale_factor / 2),
        distance: 1200 / scale_factor,
        orbit_speed: -0.024 / scale_factor,
      },
      {
        name: "Jupiter",
        color: [211, 156, 126],
        radius: 69.9 / scale_factor,
        distance: 1450 / scale_factor,
        orbit_speed: -0.013 / scale_factor,
      },
      {
        name: "Saturn",
        color: [197, 171, 110],
        radius: 58.2 / scale_factor,
        distance: 1750 / scale_factor,
        orbit_speed: 0.009 / scale_factor,
      },
      {
        name: "Uranus",
        color: [147, 184, 190],
        radius: 25.4 / scale_factor,
        distance: 2000 / scale_factor,
        orbit_speed: 0.006 / scale_factor,
      },
      {
        name: "Neptune",
        color: [62, 84, 232],
        radius: 24.6 / scale_factor,
        distance: 2200 / scale_factor,
        orbit_speed: -0.005 / scale_factor,
      },
    ],
  },
};
