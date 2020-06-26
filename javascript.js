var x = 150
var count = 0
function growFunction() {
    x += 50
    var height = `${x}px`
    count += 1
    document.getElementById('growButton').innerHTML = `Grow (${count})`
    document.getElementById('box').style.height = height;
    document.getElementById('growCount').innerHTML = count
}

function changeColor() {
    document.getElementById('box').style.backgroundColor = 'blue';
}

function makeOpaque() {
    document.getElementById('box').style.opacity = '50%';
}

function reset() {
    document.getElementById('box').style.height = '150px';
    document.getElementById('box').style.backgroundColor = 'orange'
    document.getElementById('box').style.opacity = '100%'
    x = 150
    count = 0
    document.getElementById('growButton').innerHTML = 'Grow'
}

function newColor() {
    document.getElementById('box').style.backgroundColor = document.getElementById('colorInput').value
}

var input = document.getElementById('colorInput');
input.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById('newColorButton').click();
    }
});

function testColor() {
    var colorChange = document.getElementById('colorInput').value
    document.getElementById("box").style.backgroundColor = colorChange;
}