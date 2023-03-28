// Obtiene la dirección IP del visitante
var ipAddress = '';
fetch('https://api.ipify.org/?format=json')
  .then(response => response.json())
  .then(data => ipAddress = data.ip);

// Verifica si la dirección IP del visitante ya se ha almacenado en localStorage
if (!localStorage.getItem('visited-' + ipAddress)) {
  // Incrementa el contador de visitantes
  var visitorCount = localStorage.getItem('visitorCount') || 0;
  visitorCount++;
  localStorage.setItem('visitorCount', visitorCount);
  // Almacena la dirección IP del visitante para evitar contabilizarla de nuevo
  localStorage.setItem('visited-' + ipAddress, 'true');
}

// Muestra el contador de visitantes en el sitio web
document.getElementById('visitor-count').innerHTML = localStorage.getItem('visitorCount');