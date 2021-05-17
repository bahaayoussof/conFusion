$(document).ready(function () {
    $("#homeCarousel").carousel({
        interval: 20
    });
    
    $("#carousel-pause").click(function () {
        $("#homeCarousel").carousel("pause");
    })

    $("#carousel-play").click(function () {
        $("#homeCarousel").carousel("cycle");
    })
});