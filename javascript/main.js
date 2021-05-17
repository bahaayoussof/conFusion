$(document).ready(function () {
    $("#homeCarousel").carousel({
        interval: 2000
    });

    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("span").hasClass("fa-pause")) {
            $("#homeCarousel").carousel("pause");
            $("#carouselButton").children("span").toggleClass("fa-pause fa-play");
        }
        else if ($("#carouselButton").children("span").hasClass("fa-play")) {
            $("#homeCarousel").carousel("cycle");
            $("#carouselButton").children("span").toggleClass("fa-play fa-pause");
        }
    })
});