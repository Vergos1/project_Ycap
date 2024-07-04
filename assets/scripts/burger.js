export function initializeBurger() {
    $(document).ready(function() {
        $('#burger').on('click', function() {
            $('.burger-menu').fadeIn();
            $('body').css('overflow', 'hidden');
        });

        $('#close, .burger-menu a').on('click', function() {
            $('.burger-menu').fadeOut();
            $('body').css('overflow', 'auto');
        });

        $('.burger-menu__navigation-link').on('click', function(event) {
            event.preventDefault();
            $(this).parent().toggleClass('open');
            $(this).next('.burger-menu__navigation-dropdown').slideToggle();
        });
        
        $('.burger-menu__navigation-dropdown').hide();
    });
}
