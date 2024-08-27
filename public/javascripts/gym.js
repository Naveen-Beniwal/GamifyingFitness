document.addEventListener("DOMContentLoaded", function () {
  const map = L.map("map").setView([28.6139, 77.209], 12); // Centered on New Delhi (example coordinates)

  // Add OpenStreetMap tiles
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Example gym data (replace with dynamic data from your server)
  const gyms = [
    { name: "Gym 1", lat: 28.6139, lng: 77.209 },
    { name: "Gym 2", lat: 28.7041, lng: 77.1025 },
    { name: "Gym 3", lat: 28.5355, lng: 77.391 },
  ];

  // Add markers for each gym
  gyms.forEach((gym) => {
    L.marker([gym.lat, gym.lng])
      .addTo(map)
      .bindPopup(
        `<b>${gym.name}</b><br>Price: ₹${gym.price || "N/A"}/month<br>Rating: ${
          gym.rating || "N/A"
        }/5`
      )
      .openPopup();
  });

  // Add search control
  L.Control.geocoder({
    defaultMarkGeocode: false,
  })
    .on("markgeocode", function (e) {
      const latlng = e.geocode.center;
      L.marker(latlng).addTo(map).bindPopup(e.geocode.name).openPopup();
      map.setView(latlng, 16); // Zoom in to the searched location
    })
    .addTo(map);
});
