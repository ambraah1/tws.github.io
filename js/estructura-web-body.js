let username = "Audifonos Inalambricos F-9";
let userAuthor = "ambraah1";
let linkAuthor = "https://ambraah1.github.io/";


let navbarBtnArray = [["Inicio","home"],["Descripción","productDescription"]];
let navbarBtnLoop = `
<script>
for (let [name,href] of navbarBtnArray){
  document.write('<li class="nav-item"><a class="nav-link" aria-current="page" href="#' + href + '">' + name + '</a></li>');
}
</script>`;

let btnLinkAutor = `
<a class="btn btn-outline-secondary" href="${linkAuthor}"><i class="bi bi-chevron-double-left"></i>
Creado por ${userAuthor} <i class="bi bi-chevron-double-right"></i></a>`;
let navbar = `
<nav class="navbar navbar-expand-lg navbar-light bg-default fixed-top">
<div class="container-fluid">
  <a class="navbar-brand" href="#home">${username}</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      ${navbarBtnLoop}
    </ul>
  </div>
</div>
</nav>
`;
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
<p>Auriculares F9 TWS con Bluetooth V5.1.</p>
<p>Auriculares inalámbricos manos libres con cargador y micrófono para juegos, auriculares internos estéreo deportivos.</p>
<div class="h3">CLP 12.000</div>
<div class="h5">Color Negro</div>
<div class="h5">Cantidad</div>
<button class="btn btn-outline-dark rounded-circle px-3" onclick="disminuir()">-</button>
<span id="numero">1</span>
<button class="btn btn-outline-dark rounded-circle px-3" onclick="aumentar()">+</button>
<script>
  var num = 1;
  var numElement = document.getElementById("numero");

  function aumentar() {
    num++;
    numElement.innerText = num;
  }

  function disminuir() {
    if(num < 2){

    }else{
    num--;
    numElement.innerText = num;
    }
  }
</script>
<p>Envio gratis Machalí y Rancagua.</p>
<p>Con garantia de 30 días.</p>
<p class="card-text"><a class="btn btn-outline-dark text-center">Comprar</a></p>
</div>
</div>
</div>
</div>`;
let sectionProductDescription = `fgdfgdf`;
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
let scriptBoostrap = `<script src="./js/bootstrap.bundle.min.js"></script>`;
let body = `
${navbar}
${sections}
${footer}
${scriptBoostrap}

`;

document.write(body);