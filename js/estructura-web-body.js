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

let separacionSection = `<hr>`;

let btnLinkAutor = `
<a class="btn btn-outline-secondary" href="${linkAuthor}"><i class="bi bi-chevron-double-left"></i>
Creado por ${userAuthor} <i class="bi bi-chevron-double-right"></i></a>`;
let navbar = `
<nav class="navbar navbar-expand-lg navbar-light bg-default fixed-top">
<div class="container-fluid">
  <a class="navbar-brand" href="#">${username}</a>
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
let sections = `
<section id="home" class="heightSec">
<div class="container">
<div class="row">
<div class="col-12 col-md-6">
<div class="card mb-3" style="max-width: 500px">
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="images/audifono-negro.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="images/audifono-negro.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="images/audifono-negro.png" class="d-block w-100" alt="...">
    </div>
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
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
</div>
</div>
</div>
</section>
${separacionSection}
<section id="productDescription" class="heightSec">

</section>
${separacionSection}`;

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