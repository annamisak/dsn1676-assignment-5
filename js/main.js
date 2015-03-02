var $form = $('.form');
var $todo = $('.to-do');
var $add = $('.add');
var $button = $('.add-button');

$form.on('submit', function (e) {
    e.preventDefault();
    
    var $li = $('<li>');
    var $todoH2 = $('<h2>').html($todo.val());
    var $button = $('<button>');
    $button.html('x');
    
    $li.append($todoH2).append($button);
    $add.append($li);
    
    $button.on('click', function () {
    $li.remove();
});

});

$add.on('click', 'li', function () {
    $(this).toggleClass('strike-through');
});
