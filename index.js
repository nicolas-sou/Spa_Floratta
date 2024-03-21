AOS.init();

document.addEventListener("DOMContentLoaded", function () {
    // Adiciona o evento de clique para links no navbar
    $('a[href^="#Formulario"]').on('click', function (event) {
        var target = $($(this).attr('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});