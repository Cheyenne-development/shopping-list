'use strict'
function shoppingList() {
    $('#js-shopping-list-form').submit(function (event) {
        event.preventDefault();
        const listAddition = $(event.currentTarget).find('#shopping-list-entry');
        console.log(listAddition.val());

        $('ul').append(`<li>
            <span class="shopping-item">${listAddition.val()}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>`)
    });

    $('ul').on('click', '.shopping-item-delete', function (event) {

        $(this).closest('li').remove();

    });

    $('ul').on('click', '.shopping-item-toggle', function (event) {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });
}
$(shoppingList);