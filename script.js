let x, y, ball, player1, player2, counter1, counter2
let xspeed = Math.round(Math.random())
if(xspeed == 0) {
    xspeed = -1
}

let yspeed = Math.round(Math.random())
if(yspeed == 0) {
    yspeed = -1/2
}

let player1_speed = 0, player2_speed = 0 
let player1_y, player2_y
ball = document.querySelector('.ball')
player1 = document.querySelector('.player1')
player2 = document.querySelector('.player2')
counter1 = document.querySelector('.counter1')
counter2 = document.querySelector('.counter2')

// код срабытывает сразу после загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
    W = document.activeElement.clientWidth
    H = document.activeElement.clientHeight
    console.log(W, H)

    x = W/2 - 10
    y = H/2 - 10

    ball.style.left = x + 'px'
    ball.style.top = y + 'px'

    player1_y = H/2 - 50 
    player2_y = H/2 - 50 
    player1.style.top = player1_y + 'px'
    player2.style.top = player2_y + 'px'
    player2.style.left = W - 10 + 'px'
})

addEventListener('keydown', change_speed)


function change_speed(e) {
    switch(e.code){
        case 'KeyW': player1_speed = -1; break;
        case 'KeyS': player1_speed = 1; break;

        case 'ArrowUp': player2_speed = -1; break;
        case 'ArrowDown': player2_speed = 1; break;
    }
    move()
}

setInterval(move,2)

function loose(n) {
    xspeed *= -1
    x = W/2 - 10
    y = H/2 - 10
    if(n == 1) counter1.innerHTML = parseInt(counter1.innerHTML) + 1
    if(n == 2) counter2.innerHTML = parseInt(counter2.innerHTML) + 1
} 

// if(x < 0)

function move() {
    x += xspeed
    y += yspeed

    if((x < 20 && (y > player1_y && y < player1_y + 100)) || 
    (x + 10 > W - 20 && (y > player2_y && y < player2_y + 100))) {
        xspeed *= -1
        yspeed += 1
        yspeed *= -1
    }
    
    if(x < 0) loose(1)
    if(x > W - 10) loose(2)

    if(y < 0 || y > H - 20) yspeed *= -1

    if (player1_y < 0 || player1_y > H - 100) {
        player1_speed *= -1
    }
    
    if (player2_y < 0 || player2_y > H - 100) {
        player2_speed *= -1
    }

    ball.style.left = x + 'px'
    ball.style.top = y + 'px'

    player1_y += player1_speed
    player1.style.top = player1_y + 'px'

    player2_y += player2_speed
    player2.style.top = player2_y + 'px'


}
