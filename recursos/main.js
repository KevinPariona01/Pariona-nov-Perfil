$(document).ready(function(){
    const img = document.querySelectorAll('.img-conocimiento');

    img.forEach(element => {
        element.addEventListener('mouseenter', function(){
            $(element).animate({
                width: '+=10px'
            },100)
            element.setAttribute('class','img-animacion')
        })
    });
    img.forEach(element => {
        element.addEventListener('mouseleave', function(){
            $(element).animate({
                width: '-=10px',
            },100)
            element.removeAttribute('class','img-animacion')
        })
    });
})
function download(){
    const downloadInstance = document.createElement('a');
    downloadInstance.href = 'http://localhost:3000/archivos/KEVIN-PARIONA-TRUJILLO.pdf';
    downloadInstance.target = '._blank';
    downloadInstance.download = 'Kevin-Pariona-Trujillo-CV';
    document.body.appendChild(downloadInstance);
    downloadInstance.click();
    document.body.removeChild(downloadInstance);
}