var $form = $('.form');
var $todo = $('.to-do');
var $add = $('.add');
var $button = $('.add-button');

$form.on('submit', function (e) {
    e.preventDefault();
    
    var $li = $('<li>');
    var $todoH2 = $('<h2>').html($todo.val());
    
    $li.append($todoH2);
    $add.append($li);
    

});