$(document).ready(function () {
    $('#contact-info-collapse').on('show.bs.collapse hide.bs.collapse', function (e) {
        e.preventDefault();
    });
    $('.contact-info-collapse-control').on('click', function (e) {
        e.preventDefault();
        var active = $('.submission-contact-info-active-checkbox');
        var notActive = $('.submission-contact-info-not-active-checkbox');
        notActive.removeClass('submission-contact-info-not-active-checkbox').addClass('submission-contact-info-active-checkbox');
        active.removeClass('submission-contact-info-active-checkbox').addClass('submission-contact-info-not-active-checkbox');
        $($(this).data('target')).toggleClass('in');
    });
});