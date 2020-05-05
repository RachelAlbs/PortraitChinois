    // WELCOME PAGE

$(function welcome() {
    var welcomeSection = $('.welcome-section')
    var enterButton = welcomeSection.find('.enter-button');

    setTimeout(function () {
        welcomeSection.removeClass('content-hidden');
    }, 800);

    enterButton.on('click', function (e) {
        e.preventDefault();
        welcomeSection.addClass('content-hidden').fadeOut();
    });
});

    // FULL PAGE
new fullpage('#fullPage', {
    autoScrolling: true,
    navigation: true,
    anchors: ['accueil', 'véhicule', 'instrument', 'sport', 'plat', 'pierre_précieuse','Pokemon', 'pays'],
    scrollingSpeed: 1500,
    responsiveWidth: 1024,
    responsiveHeight: 520,
});

    // MOUSE TRACKING DEFINITION
var spanText = document.getElementById('tooltip');
window.onmousemove = function(e){
    var x = e.clientX;
    var y = e.clientY;
    spanText.style.top = (y + 20) + 'px';
    spanText.style.left = (x + 20) + 'px';
};

// $(document).ready(function(){
//     var fullpage = false;

//     // $(".enter-button").click(function(){
//     //     if (fullpage == false){
//     //         $(.).css({
//     //             opacity
//     //         });
//     //     }
//     // })

//     $(".enter-button").click(function(){
//         if (fullpage == )
//     })
// });

// $(document).ready(function(){
//     if (welcomeSection == true){
//     }
// });
