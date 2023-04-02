let username = "Audifonos Inalambricos F-9";
let userAuthor = "ambraah1";
let linkAuthor = "https://ambraah1.github.io/";

let btnLinkAutor = `
<a class="btn btn-outline-secondary" href="${linkAuthor}"><i class="bi bi-chevron-double-left"></i>
Creado por ${userAuthor} <i class="bi bi-chevron-double-right"></i></a>`;
let footer = `
<footer class="text-center p-3 fw-bold">
${btnLinkAutor}
</footer>`;
let scriptNavbar = `<script src="js/navbar.js"></script>`;
let scriptSection = `<script src="js/section.js"></script>`;
let scriptBoostrap = `<script src="./js/bootstrap.bundle.min.js"></script>`;
let scriptAmount = `<script src="js/amount.js"></script>`;
let body = `
${scriptNavbar}
${scriptSection}
${footer}
${scriptBoostrap}
${scriptAmount}
`;

document.write(body);