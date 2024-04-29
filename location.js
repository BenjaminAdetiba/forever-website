$(document).ready(function() {
    $('.card').addClass('img-enlargable').click(function() {
        var src = $(this).find('img').attr('src');
        $('<div>').css({
            background: 'RGBA(0,0,0,.5) url(' + src + ') no-repeat center',
            backgroundSize: 'contain',
            width: '60%',
            height: '50%',
            position: 'fixed',
            zIndex: '10000',
            top: '140',
            left: '240',
            cursor: 'zoom-out'
        }).click(function() {
            $(this).remove();
        }).appendTo('body');
    });
});

$(document).ready(function() {
    $('.enlarge-btn').click(function() {
        var src = $(this).closest('.card').find('img').attr('src');
        $('.enlarged-image img').attr('src', src);
        $('.enlarged-image').show();
    });
});