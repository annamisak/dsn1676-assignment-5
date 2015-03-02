//var $form = $('.form');
//var $name = $('.name');
//var $age = $('.age');
//var $dinos = $('.dinos');

//$form.on('submit', function (e) {
//  e.preventDefault();

//  var $li = $('<li>');
//  var $nameH2 = $('<h2>').html($name.val());
//  var $ageP = $('<p>').html('Age: ' + $age.val() + ' million years old');
//  var $diet = $('[name="diet"]:checked')

//  $li.append($nameH2).append($ageP).addClass($diet.val());
// $dinos.append($li);
//});

//$dinos.on('click', 'li', function () {
//  $(this).toggleClass('js-highlight');
//});



var $form = $('.form');
var $todo = $('.to-do');
var $add = $('.add');
var $button = $('.add-button');

$form.on('submit' function (e) {
    e.preventDefault();
    
    var $li = $('<li>'); 
    var $addH2 = $('<h2>').html($add.val());
    var $button = $('<button>'); 
    
    $button.html('x');
    $button.addClass ('select');
    
    $button.on('click', function() {
    $li.remove();
});