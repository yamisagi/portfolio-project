$(window).resize(function () {
    if ($(window).width() < 768) {
        $('.header').html('<h1>I am Eren</h1>');
    }
    else {
        $('.header').html('<h1 class="header">I am Eren, a <span>Flutter</span> developer.</h1>');
    }
});