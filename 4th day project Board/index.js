const board = document.querySelector('#board')
const colours = ['#3914AF', '#7109AA', '#7109AA', '#FFD300', '#1240AB', '#9F3ED5', '#48036F','#200772','#A68900']

const SQUARES_NUMBER = 700

for(let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => 
        setColour(square))

    square.addEventListener('mouseleave', () => 
        removeColour(square))
    

// Добавляем класс 'square' к board
    board.append(square)
}

function setColour(element) {
    const colour = addRandomColour()
    element.style.backgroundColor = colour
    element.style.boxShadow = `0 0 2px ${colour}, 0 0 8px ${colour} `
}
// В element.style.boxShadow = `0 0 2px ${colour} - добавляем объем к цветам боксов\
//  0 0 8px ${colour} - добавляем жффект свечения



function removeColour(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function addRandomColour(element) {
    const index = Math.floor(Math.random() * colours.length)
    return colours[index]
}