let navbarBtnArray = [["Inicio","home"],["Descripción","productDescription"]];
let navbarBtnLoop = `
<script>
for (let [name,href] of navbarBtnArray){
  document.write('<li class="nav-item"><a class="nav-link" aria-current="page" href="#' + href + '">' + name + '</a></li>');
}
</script>`;

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