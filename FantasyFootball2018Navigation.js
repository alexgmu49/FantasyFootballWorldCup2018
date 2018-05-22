$(document).ready(function() {
    $("#navbar #list li a").on('click', function(e) {
        e.preventDefault();
        var page = $(this).data('page');
        $("#pages .page:not(.hide)").stop().fadeOut('fast', function() {
            $(this).addClass('hide');
            $('#pages .page[data-page="'+page+'"]').fadeIn('slow').removeClass('hide');
        });
    });
});