let username = "Audifonos Inalambricos F-9";
let userAuthor = "ambraah1";
let linkAuthor = "https://ambraah1.github.io/";




let btnLinkAutor = `
<a class="btn btn-outline-secondary" href="${linkAuthor}"><i class="bi bi-chevron-double-left"></i>
Creado por ${userAuthor} <i class="bi bi-chevron-double-right"></i></a>`;

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
    <h5 class="card-title">Solo color negro</h5>
    <p class="card-text">F9 TWS auriculares Bluetooth V5.1 auriculares inalámbricos manos libres caja de carga con micrófono auriculares para juegos estéreo auriculares internos deportivos.</p>
  </div>
</div>
</div>
<div class="col-12 col-md-6">
<div class="border border-text rounded" style="max-width: 500px">
<div class="fw-bold">Auriculares F9 TWS con Bluetooth V5.1.</div>
<p>Inalámbricos manos libres con cargador y micrófono para juegos, auriculares internos estéreo deportivos.</p>
<div class="h3">CLP 12.000</div>
<div class="h5">Color Negro</div>
<div class="h5">Cantidad:


<button class="btn btn-outline-dark rounded-circle px-3" onclick="disminuir()">-</button>
<span id="numero">1</span>

<button class="btn btn-outline-dark rounded-circle px-3" onclick="aumentar()">+</button>
</div>
<p>Envio gratis Machalí y Rancagua.</p>
<p>Con garantia de 30 días.</p>
<p class="card-text"><a class="btn btn-outline-dark text-center">Comprarlo</a></p>
</div>
</div>
</div>
</div>`;
let sectionProductDescription = `
Auriculares inalámbricos TWS Bluetooth 5,1 auriculares deportivos Control táctil auriculares impermeables



1. Bluetooth V5.1 admite la mayoría de dispositivos bluetooth y menor consumo de energía.

2. Puede cargar completamente 2 auriculares alrededor de 8 veces, ofrece más tiempo de música.

3. Con tecnología impermeable, ya no hay necesidad de preocuparse por el agua y el sudor.

4, unidades de unidad dual de 10mms, disfrute de un fuerte sonido de música de graves profundos 9D

5. Popular función de control de un botón, compatible con cambiar canciones, llamadas telefónicas y asistencia de voz de llamada.



Lista de productos A, B accesorios:

2 * auriculares Bluetooth

1 * caja de carga

1 * Cable USB

1 * Manual de usuario

2 x copas de auriculares (talla L,M)

`;
let sectionArray = [["home",sectionHome],["productDescription",sectionProductDescription]];
let sectionLoop = `
<script>
for (const [id,section] of sectionArray){
  document.write('<section id="' + id + '" class="heightSec">' + section + '</section><hr>');
}
</script>`;
let sections = `${sectionLoop}`;
let footer = `
<footer class="text-center p-3 fw-bold">
${btnLinkAutor}
</footer>`;

let scriptNavbar = `<script src="js/navbar.js"></script>`;
let scriptBoostrap = `<script src="./js/bootstrap.bundle.min.js"></script>`;
let scriptAmount = `<script src="js/amount.js"></script>`;
let body = `
${scriptNavbar}
${sections}
${footer}
${scriptBoostrap}
${scriptAmount}
`;

document.write(body);