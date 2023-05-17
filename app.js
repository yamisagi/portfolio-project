$(window).resize(function () {
    if ($(window).width() < 768) {
        $('.header').html('<h1 class="header">I am Eren</h1>');
    }
    else {
        $('.header').html('<h1 class="header">I am Eren, a <span>Flutter</span> developer.</h1>');
    }
});


var promise = document.querySelector('video').play();

if (promise !== undefined) {
    promise.then(_ => {

    }).catch(error => {
    });
}
// Fix