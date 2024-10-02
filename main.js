document.getElementById('btn').addEventListener('click', function() {
    let randomColor = generateHexColor();
    document.body.style.backgroundColor = randomColor;
    document.getElementById('hexCode').textContent = randomColor;
});

function generateHexColor() {
    let hexcode = '#';
    let character = '0123456789ABCDEF';
    for (let h = 0; h < 6; h++) {
        hexcode += character[Math.floor(Math.random() * 14)];
    }
    return hexcode;
}