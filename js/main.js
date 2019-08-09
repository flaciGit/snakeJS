var w = 10;
var h = 10;
var frameRateNumber = 8;

var textHeight = 25;
var textRow = 2;
var tileSize = 25;

var starterTail = 3;
var tail = 3;
var score = tail;
var trail = [];

var foodX = 2;
var foodY = 2;

function setup() {
    frameRate(frameRateNumber);
    createCanvas(w * tileSize + 1, h * tileSize + 1 + textHeight * textRow);

    p = new Player();
}

function draw() {
    
    handlePlayerMovement();
    background(255);
    
    
    text("Score: " + score, 0, h * tileSize + textHeight);
    
    drawGame();
    handleGameOver();
}

function drawGame() {
    
    //background
    fill(0, 0, 0);   
    square(0, 0, w * tileSize, h * tileSize);
    
    //food
    fill(200, 200, 200);
    circle(foodX * tileSize + (tileSize / 2), foodY * tileSize + (tileSize / 2), tileSize / 5);
    
    //player
    fill(0, 255, 0);
    square(p.getXC() * tileSize, p.getYC() * tileSize, tileSize );
    
    //trail
    for (var i = 0; i < trail.length; i++) {
        fill(255, 255, 100);
        square(trail[i].x * tileSize, trail[i].y * tileSize, tileSize);
    }
    fill(0, 0, 0);
    
}

function handleGameOver() {
    for(var i=0;i<trail.length;i++) {
        if(trail[i].x==p.getXC() && trail[i].y==p.getYC()) {
            tail = 3;
            score = tail;
        }
    }

    trail.push({x:p.getXC(),y:p.getYC()});
    while(trail.length>tail) {
        trail.shift();
    }
    
    if(foodX==p.getXC() && foodY==p.getYC()) {
        tail++;
        score++;
        do{
            foodX = Math.floor(Math.random()*w);
            foodY = Math.floor(Math.random()*w);
            
        }while(isInArray(trail,foodX,foodY));
    }
    
    if(score >= w * h - starterTail - 1){
        fill(0, 0, 0);
        text("YOU WON", 0, h * tileSize + textHeight * 2);
        framerate(0);
    }
}

function isInArray(arr,x,y){
    for(var k = 0; k < arr.length; k++){
        if(arr[k].x === x && arr[k].y === y){
            return true;
        }
    }
    return false;
}

function keyPressed() {
    if (keyCode === UP_ARROW && !p.goesDown()) {
        p.up();
    }
    if (keyCode === DOWN_ARROW && !p.goesUp()) {
        p.down();
    }
    if (keyCode === LEFT_ARROW && !p.goesRight()) {
        p.left();
    }
    if (keyCode === RIGHT_ARROW && !p.goesLeft()) {
        p.right();
    }
}