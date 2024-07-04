export function initializeDropdowns() {
    document.addEventListener('DOMContentLoaded', function() {
        $('.header__navigation-link').on('click', function(event) {
            event.preventDefault();
            const $dropdown = $(this).next('.header__navigation-dropdown');
            $('.header__navigation-dropdown').not($dropdown).slideUp();
            $dropdown.slideToggle();
        });

        $(document).on('click', function(event) {
            if (!$(event.target).closest('.header__navigation-item').length) {
                $('.header__navigation-dropdown').slideUp();
            }
        });
    });
}