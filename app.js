// event handler to grab input text and add new shopping list item
function newItemSubmitHandler() {
    $('#js-shopping-list-form button').click(function(event){
        event.preventDefault();
        const addItemName = $('.js-shopping-list-entry').val();
        console.log($('ul .shopping-item'));
        const testItemIncludedArr = testItems();
        
        
        if (addItemName === '') {
            return alert(`Must enter a new shopping list item :)`);
        } else if (testItemIncludedArr.includes(`${addItemName}`)) {
            return alert(`${addItemName} is on your shopping list.`)
        } else if ($('ul .shopping-item').text().includes(`${addItemName}`)) {
            $('.js-shopping-list-entry').val("");
            return alert(`${addItemName} or something similar is already on the shopping list`);
        } else {
            addItemFunction(addItemName);
            $('.js-shopping-list-entry').val("");
        }
        $('.js-shopping-list-entry').val("")
    })
}

function testItems () {
    const itemTextArr = [];
    let DOMitemArr = ($('ul .shopping-item'));
    for (let i = 0; i <= DOMitemArr.length; i++) {
        itemTextArr.push($(DOMitemArr[i]).text());
    }
    console.log(itemTextArr);
    return itemTextArr;
}




function addItemFunction(item) {
    const templateStr = newItemTemplate(item);
    $('.shopping-list').append(templateStr);
};


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
    $('ul').on('click', '.shopping-item-delete',function(event){
        $(event.currentTarget).closest('li').remove();
    })
}


function allHandlerFunctions() {
    newItemSubmitHandler();
    checkedItemHandler();
    deleteItemHandler();
}


$(allHandlerFunctions());