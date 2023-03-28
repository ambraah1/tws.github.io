const username = "Audifonos Inalambricos F-9";
const userAuthor = "ambraah1";
const linkAuthor = "https://ambraah1.github.io/";

const navbarContent1 = "Inicio";
const navbarContent2 = "Descripción";
const navbarContent3 = "Redes";
const navbarBtnArray = [["Inicio","home"],["Descripción","productDescription"]];
const navbarBtnLoop = `
<script>
for (const [name,href]){
  document.write('<li class="nav-item">
  <a class="nav-link" aria-current="page" href="#' + href + '">' + name + '</a>
</li>');
}
</script>`;

let separacionSection = `<hr>`;

let btnLinkAutor = `
<a class="btn btn-outline-secondary" href="${linkAuthor}"><i class="bi bi-chevron-double-left"></i>
Creado por ${userAuthor} <i class="bi bi-chevron-double-right"></i></a>`;
let navbar = `
<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
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

let body = `<body>
${navbar}
${sections}
${footer}
${scriptBoostrap}
<script type="text/javascript" src="//clustrmaps.com/map_v2.js?d=doGPG6O4yhv-IoobFwRw2PjhzHZtNUMU0a1hm6XE8H0&cl=ffffff&w=a"></script>
`



document.write(body);