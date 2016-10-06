var button = document.getElementbyID('counter');
var counter =0;
button.onclick = function() {
    counter = counter+1;
    var span = document.getElementbyID('count');
    span.innerHTML = counter.toString();
}


