function click_function() {
    var li = document.getElementsByTagName('li').length;
    list.innerHTML += '<li>item ' + li + '</li>';
}

var add = document.getElementById('addElem');
var list = document.getElementById('list');

add.addEventListener('click', click_function);