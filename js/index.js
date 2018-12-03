
/**
 * Прячет элемент с атрибутом data-target
 *
 * @param {string} target
 */
function hide(target) {
    $('[data-target="' + target + '"]').hide();
}
/**
 * Показывает элемент с атрибутом data-target
 *
 * @param {string} target
 */
function show(target) {
    $('[data-target="' + target + '"]').show();
}
/**
 * И прячет, и показывает элемент с атрибутом data-target
 *
 * @param {string} target
 * @param {function} callback
 */
function toggle(target, callback) {
    $('[data-target="' + target + '"]').toggle(callback);
}

$(document).ready(function() {
    $('.js-description-toggle').on('click', function() {
        var currentButton = $(this);
        toggle('category-description', function() {
            if ($(this).css('display') == 'block') {
                currentButton.removeClass('mb-3');
                currentButton.text('Скрыть описание');
            } else {
                currentButton.addClass('mb-3');
                currentButton.text('Показать описание');
            }
        });
    });

});