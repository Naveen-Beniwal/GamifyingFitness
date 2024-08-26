// Simulating fitness data for now
document.addEventListener("DOMContentLoaded", function () {
  const steps = Math.floor(Math.random() * 10000); // Simulated step count
  const speed = (Math.random() * 10).toFixed(2); // Simulated running speed

  document.getElementById("steps").textContent = steps;
  document.getElementById("speed").textContent = speed;
});
