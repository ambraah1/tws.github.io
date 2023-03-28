let title = "F-9";

let metaViewport = `<meta name="viewport" content="width=device-width, initial-scale=1">`;
let metaCharset = `<meta charset="utf-8">`;
let linkBootstrapCSS = `<link href="./css/bootstrap.min.css" rel="stylesheet">`;
let linkStylesheetCSS = `<link rel="stylesheet" href="css/style.css">`;
let titlePage = `<title>${title}</title>`;

let head = `
<head>
${metaCharset}
${metaViewport}
${linkBootstrapCSS}
${linkStylesheetCSS}
${titlePage}
</head>`;

document.write(head);