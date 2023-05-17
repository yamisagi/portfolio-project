$(window).resize(function () {
    if ($(window).width() < 768) {
        $('.header').html('<h1>I am Eren</h1>');
    }
    else {
        $('.header').html('<h1 class="header">I am Eren, a <span>Flutter</span> developer.</h1>');
    }
});


// For video popup 2
$('.video__popup--2').click(function () {
    window.open('https://user-images.githubusercontent.com/84624853/191823036-7e6207d9-260e-4329-8875-265c957c8431.mp4', '_blank');
}
);