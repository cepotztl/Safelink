function changeLink() {
    var e = Base64.decode(res);
    window.open(e, "_self")
}
var currentURL = location.href,
    str = currentURL,
    res = str.replace("http://safe.bloger.id/car-insurance-tips-for-large-families.xhtml?url=", "");
document.write('<button target="_self" class="btn btn-success" style="display: block; font-size:small" id="download" onclick="changeLink()">Menuju Link</button>');
onload: generate();
