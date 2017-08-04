// event handler to grab input text and add new shopping list item
function newItemSubmitHandler() {
    $('#js-shopping-list-form button').click(function(event){
        event.preventDefault();
        console.log('submit button clicked');
        const addItemName = $('.js-shopping-list-entry').val();
        console.log(addItemName);
        const templateStr = newItemTemplate(addItemName);
        $('.shopping-list').append(templateStr);
        $('.js-shopping-list-entry').val("");
    })
}


// template to insert into html with new shopping list item
function newItemTemplate(item) {
    const newItemTemplateStr = (`<li>
        <span class="shopping-item">${item}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`)
    return newItemTemplateStr;
}

// event handler for checked items
function checkedItemHandler() {
    $('ul').on('click', '.shopping-item-toggle', function(event){
        $(event.currentTarget).closest('li').find('span.shopping-item').toggleClass('shopping-item__checked');
    })
}

// event handler for deleted items
function deleteItemHandler() {

}


function allHandlerFunctions() {
    newItemSubmitHandler();
    checkedItemHandler();
    deleteItemHandler();
}


$(allHandlerFunctions());