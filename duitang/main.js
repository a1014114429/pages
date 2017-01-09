$('.Focus-point').click(function () {
    $('.Focus-point').removeClass('is-current');
    $(this).addClass('is-current');

    var idx = $(this).index();
    $('.Focus-item').removeClass('is-current');
    $('.Focus-item').eq(idx).addClass('is-current');
});

