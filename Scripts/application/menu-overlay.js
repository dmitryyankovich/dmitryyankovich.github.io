$('.navbar-collapse').on('show.bs.collapse', function () {
    $('body').prepend('<div class="overlay"></div>');
    $('.navbar-header-content').css('opacity', '0.5');
});
$('.navbar-collapse').on('hide.bs.collapse', function () {
    $('.overlay').remove();
    $('.navbar-header-content').css('opacity', '1');
});