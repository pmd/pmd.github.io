// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor[0].hash).offset().top
        }, 1500, 'easeInOutExpo');
        location.hash = $anchor[0].hash;
        event.preventDefault();
    });
});
