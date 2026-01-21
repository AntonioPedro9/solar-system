/**
 * I used a scale factor to render the stars
 * proportionally, for that it was necessary
 * to reduce the sun's radius by half and
 * double the radius of the rocky planets
 */

const data = {
  sun: {
    name: "Sun",
    color: { inner: "#FFC212", outer: "#C44E01" },
    radius: 695508 / 2,
    distance: 0,
    orbit_speed: 0,
    satellites: [
      {
        name: "Mercury",
        color: { inner: "#E0E0E0", outer: "#707070" },
        radius: 2439.7 * 2,
        distance: 150,
        orbit_speed: -0.048,
      },
      {
        name: "Venus",
        color: { inner: "#F5E6BA", outer: "#D4AF37" },
        radius: 6051.8 * 2,
        distance: 200,
        orbit_speed: -0.035,
      },
      {
        name: "Earth",
        color: { inner: "#4F97E8", outer: "#1C3E8A" },
        radius: 6371 * 2,
        distance: 250,
        orbit_speed: -0.03,
        satellites: [
          {
            name: "Moon",
            color: { inner: "#F0EFE2", outer: "#A6A6A6" },
            radius: 1737.5 * 2,
            distance: 5,
            orbit_speed: -0.03,
          },
        ],
      },
      {
        name: "Mars",
        color: { inner: "#E27B58", outer: "#8B0000" },
        radius: 3389.5 * 2,
        distance: 300,
        orbit_speed: -0.024,
      },
      {
        name: "Jupiter",
        color: { inner: "#E0AE6F", outer: "#8B4513" },
        radius: 69911,
        distance: 400,
        orbit_speed: -0.013,
      },
      {
        name: "Saturn",
        color: { inner: "#F4D03F", outer: "#D2B48C" },
        radius: 58232,
        distance: 500,
        orbit_speed: -0.01,
      },
      {
        name: "Uranus",
        color: { inner: "#E0FFFF", outer: "#4682B4" },
        radius: 25362,
        distance: 600,
        orbit_speed: -0.007,
      },
      {
        name: "Neptune",
        color: { inner: "#5B9BD5", outer: "#191970" },
        radius: 24622,
        distance: 700,
        orbit_speed: -0.005,
      },
    ],
  },
};
