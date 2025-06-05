document.getElementById('cabForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const pickup = document.getElementById('pickup').value;
  const dropoff = document.getElementById('dropoff').value;
  const datetime = document.getElementById('datetime').value;

  const results = document.getElementById('results');
  results.innerHTML = `
    <h2>Available Cabs:</h2>
    <ul>
      <li>🚕 John – R30 – Pickup in 10 min</li>
      <li>🚗 Lwazi – R25 – Pickup in 20 min</li>
      <li>🚕 Ayesha – R35 – Premium car, Pickup in 5 min</li>
    </ul>
  `;
});
