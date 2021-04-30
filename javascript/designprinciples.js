let date = new Date();
let year = date.getFullYear();

document.getElementById('year1').innerHTML = year;

let oLastModif = new Date(document.lastModified).toLocaleString();
document.getElementById('lastmod1').innerHTML = oLastModif;