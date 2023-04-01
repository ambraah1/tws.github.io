let price = 12000;

let homeCardImgArray = [["images/audifono-negro.png","active"],["images/audifono-negro.png"],["images/audifono-negro.png"]];
let homeCardImgLoop = `
<script>
for (let [src, status] of homeCardImgArray){
document.write('<div class="carousel-item ' + status + '"><img src="' + src + '" class="d-block w-100" alt="..."></div>');
}
</script>`;
let sectionHome = `
<div class="container">
<div class="row">
<div class="col-12 col-md-6">
<div class="card mb-3" style="max-width: 500px">
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    ${homeCardImgLoop}
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  <div class="card-body">
    <h5 class="card-title">Solo color negro <i class="bi bi-earbuds"></i></h5>
    <p class="card-text">F9 TWS auriculares Bluetooth V5.1 auriculares inalámbricos manos libres caja de carga con micrófono auriculares para juegos estéreo auriculares internos deportivos.</p>
  </div>
</div>
</div>
<div class="col-12 col-md-6">
<div class="border border-text rounded" style="max-width: 500px">
<div class="fw-bold">Auriculares F9 TWS con Bluetooth V5.1.<i class="bi bi-bluetooth"></i></div>
<p>Inalámbricos manos libres con cargador y micrófono para juegos, auriculares internos estéreo deportivos.</p>
<div class="h3">CLP ${price} <i class="bi bi-cash-coin"></i></div>
<div class="h5">Color Negro</div>
<div class="h5">Cantidad:
<button class="btn btn-outline-dark rounded-circle" onclick="disminuir()"><i class="bi bi-arrow-left"></i></button>
<span id="numero">1</span>
<button class="btn btn-outline-dark rounded-circle" onclick="aumentar()"><i class="bi bi-arrow-right"></i></button>
</div>
<p>Envio gratis Machalí y Rancagua.</p>
<p>Con garantia de 30 días.</p>
<p class="card-text"><a class="btn btn-outline-dark text-center">Comprarlo</a></p>

</div>
</div>
</div>`;
let sectionProductDescription = `
<div class="container">
<div class="h4">
Auriculares inalámbricos TWS Bluetooth 5,1 auriculares deportivos Control táctil auriculares impermeables.
</div>
<p>✅COMODIDAD: Se puede utilizar para las personas deportistas, en el gimnasio, se ajusta muy bien al oído, lo mejor su calidad de sonido como tambien utilizado como manos libres.</p>
<p>✅BATERIA: Su duración puede llegas hasta 5 horas y viene con un estuche de carga que te puede durar más de una semana.</p>
<p>✅ALCANCE: Puede llegar a tener un alcance con su dispositivo hasta 10 metros.</p>
<p>✅RESISTENCIA: Es resistente al agua como tambien por su tamaño a golpes.</p>
<p>1. Bluetooth V5.1 admite la mayoría de dispositivos bluetooth y menor consumo de energía.</p>
<p>2. Puede cargar completamente 2 auriculares alrededor de 8 veces, ofrece más tiempo de música.</p>
<p>3. Con tecnología impermeable, ya no hay necesidad de preocuparse por el agua y el sudor.</p>
<p>4. unidades de unidad dual de 10mms, disfrute de un fuerte sonido de música de graves profundos 9D</p>
<p>5. Popular función de control de un botón, compatible con cambiar canciones, llamadas telefónicas y asistencia de voz de llamada.</p>
<div class="h5">Lista de productos A, B accesorios:</div>
<p>2 * auriculares Bluetooth</p>
<p>1 * caja de carga</p>
<p>1 * Cable USB</p>
<p>1 * Manual de usuario</p>
<p>2 x copas de auriculares (talla L,M)</p>
`;
let sectionArray = [["home",sectionHome],["productDescription",sectionProductDescription]];
let sectionLoop = `
<script>
for (const [id,section] of sectionArray){
  document.write('<section id="' + id + '">' + section + '</section><hr>');
}
</script>`;

document.write(sectionLoop);