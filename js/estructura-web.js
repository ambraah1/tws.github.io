let username = "Audifonos Inalambricos F-9";
const userAuthor = "ambraah1";
let linkAuthor = "https://ambraah1.github.io/";
let title = "F-9";
let navbarContent1 = "Inicio";
let navbarContent2 = "Descripción";
let navbarContent3 = "Redes";

let separacionSection = `<hr>`;
let metaViewport = `<meta name="viewport" content="width=device-width, initial-scale=1">`;
let metaCharset = `<meta charset="utf-8">`;
let linkBootstrapCSS = `<link href="./css/bootstrap.min.css" rel="stylesheet">`;
let linkStylesheetCSS = `<link rel="stylesheet" href="css/style.css">`;
let titlePage = `<title>${title}</title>`;
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
      <li class="nav-item">
        <a class="nav-link" aria-current="page" href="#home">${navbarContent1}</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#aboutUs">${navbarContent2}</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#social">${navbarContent3}</a>
      </li>
    </ul>
  </div>
</div>
</nav>
`;
let sections = `
<section id="home" class="heightSec">

</section>
${separacionSection}
<section id="aboutUs" class="heightSec">

</section>
${separacionSection}
<section id="social" class="heightSec">

</section>
${separacionSection}`;

let footer = `
<footer class="text-center p-3 fw-bold">
${btnLinkAutor}
</footer>`;
let scriptBoostrap = `<script src="./js/bootstrap.bundle.min.js"></script>`;
let head = `
<head>
${metaCharset}
${metaViewport}
${linkBootstrapCSS}
${linkStylesheetCSS}
${titlePage}
</head>`;
let body = `<body>
${navbar}
${sections}
${footer}
${scriptBoostrap}
`


document.write(head);
document.write(body);