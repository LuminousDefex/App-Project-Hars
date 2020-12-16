// download script
var container = document.querySelector('textarea');
var anchor = document.querySelector('#dBtn');
anchor.onclick = function () {
    console.log(container.value)
    anchor.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(container.value);
    anchor.download = 'export.txt';
};