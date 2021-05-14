let canvas = document.getElementById("snake")
let context = canvas.getContext("2d")
let box = 32
let snake = []
snake[0] =  { //posicap xy
    x: 8 * box,
    y: 8 * box
}
let direction = "right"

function criarBG() {
    context.fillStyle = "lightgreen"
    context.fillRect(0, 0, 16 * box, 16 * box) //desenha retangulo
}

function criarCobrinha() {
    for(i=0; i < snake.length; i++) {
        context.fillStyle = "green"
        context.fillRect(snake[i].x, snake[i].y, box, box)
    }
}

function iniciarJogo() {
    criarBG()
    criarCobrinha()

    let snakex = snake[0].x
    let snakey = snake[0].y

    if (direction == "righr") snakex += box
    if (direction == "left") snakex -= box
    if (direction == "up") snakey -= box
    if (direction == "down") snakey += box

    snake.pop()

    let newHead = {
        x: snakex,
        y: snakey
    }
    snake.unshift(newHead)
} 

let jogo = setInterval(iniciarJogo, 100)


























