$('input[name=rating]').on('change', function () {
    $('#active-rating-number').removeAttr('id');
    $('input[name=rating]:checked').parent().attr('id', 'active-rating-number');
});