export function initializeDropdowns() {
    document.addEventListener('DOMContentLoaded', function() {
        $('.header__navigation-link').on('click', function(event) {
            event.preventDefault();
            const $dropdown = $(this).next('.header__navigation-dropdown');
            const $chevron = $(this).find('img');

            $('.header__navigation-dropdown').not($dropdown).slideUp();
            $('.header__navigation-link img').not($chevron).removeClass('rotated');

            $dropdown.slideToggle();
            $chevron.toggleClass('rotated');
        });

        $(document).on('click', function(event) {
            if (!$(event.target).closest('.header__navigation-item').length) {
                $('.header__navigation-dropdown').slideUp();
                $('.header__navigation-link img').removeClass('rotated');
            }
        });
    });
}
