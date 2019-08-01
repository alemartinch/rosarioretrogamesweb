$(function () {
    $('#container1').beforeAfter({
        showFullLinks: false,
        introPosition: .40,
        dividerColor: "#BB281F"
    });
    $('#container2').beforeAfter({
        showFullLinks: false,
        dividerColor: "#BB281F"
    });
    $('#container3').beforeAfter({
        showFullLinks: false,
        dividerColor: "#BB281F"
    });
    $('#container4').beforeAfter({
        showFullLinks: false,
        dividerColor: "#BB281F"
    });
});

// SCROLL SUAVE
// $(document).ready(function() {
//     $('a[href^="#"]').click(function() {
//       var destino = $(this.hash);
//       if (destino.length == 0) {
//         destino = $('a[name="' + this.hash.substr(1) + '"]');
//       }
//       if (destino.length == 0) {
//         destino = $('html');
//       }
//       $('html, body').animate({ scrollTop: destino.offset().top }, 500);
//       return false;
//     });
//   });