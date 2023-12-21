const gridValue = document.querySelectorAll('.grid-value');
const gridRangeValue = document.querySelector('.grid-range');
const onOffs = [document.querySelector('.rainbow-toggle'), document.querySelector('.eraser-toggle')];

//displaying grid size
gridValue.forEach((e) => {
    e.innerText = gridRangeValue.value; 
    gridRangeValue.addEventListener('input', (f) => {
        e.innerText = f.target.value; 
    })
})

