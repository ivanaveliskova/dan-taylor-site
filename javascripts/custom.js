// Smooth Scroll

var scrollToElement = function ($element) {
        $('html, body').animate({
            scrollTop: $element.offset().top
        }, 500);
    },

    testElement = function (event) {

        var $targetElement = $(event.currentTarget.hash);

        if ($targetElement.length === 0) { return; }

        event.preventDefault();

        scrollToElement($targetElement);
    };

$('[data-scroll-to-button]').on('click', testElement);


// Slick Slider

$('[data-slick-slider]').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    speed: 1000,
    fade: true,
    cssEase: 'linear'
});


// Google Map

function initMap() {
    var mapDiv = document.querySelector('[data-map]');
    var latLng = new google.maps.LatLng(37.303422, -121.933238);
    var map = new google.maps.Map(mapDiv, {
        center: latLng,
        zoom: 16
    });

    var marker = new google.maps.Marker({
        position: latLng,
        map: map
    });
}

// Select Ellipses

$('[data-add-ellipses]').text($('#Subject')[0].textContent);
$('#Subject').change(function () {
    $('[data-add-ellipses]').text($("option:selected", this).text());
});   


// Show more sections

var showMore = function(event) {
    var $target = $(event.currentTarget),
        $targetParagraph = $target.next('.main--hidden');

    if($targetParagraph.length === 0) { return; }

    event.preventDefault();

    $target.addClass('button--hidden');
    $targetParagraph.addClass('main--show');
};

$('[data-trigger]').on('click', showMore);


