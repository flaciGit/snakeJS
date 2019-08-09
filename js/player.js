function Player() {

    this.xC = 5;
    this.yC = 5;
    this.xD = -1;
    this.yD = 0;


    this.setXC = function (xCoord) {
        this.xC = xCoord;
    }
    this.setYC = function (yCoord) {
        this.yC = yCoord;
    }

    this.setXD = function (xDir) {
        this.xD = xDir;
    }
    this.setYD = function (yDir) {
        this.yD = yDir;
    }

    this.getXC = function () {
        return this.xC;
    }
    this.getYC = function () {
        return this.yC;
    }
    this.getXD = function () {
        return this.xD;
    }
    this.getYD = function () {
        return this.yD;
    }


    this.up = function () {
        this.xD = 0;
        this.yD = -1;
    }
    this.down = function () {
        this.xD = 0;
        this.yD = 1;
    }
    this.left = function () {
        this.xD = -1;
        this.yD = 0;
    }
    this.right = function () {
        this.xD = 1;
        this.yD = 0;
    }
    
    this.goesUp = function () {
        return (this.xD == 0 && this.yD == -1);
    }
    this.goesDown = function () {
        return (this.xD == 0 && this.yD == 1);
    }
    this.goesLeft = function () {
        return (this.xD == -1 && this.yD == 0);
    }
    this.goesRight = function () {
        return (this.xD == 1 && this.yD == 0);
    }
    
}

function handlePlayerMovement() {

    var xC = p.getXC();
    var yC = p.getYC();
    var xD = p.getXD();
    var yD = p.getYD();

    if (xC + xD > w - 1) {
        p.setXC(0);
    }else if (xC + xD < 0) {
        p.setXC(w - 1);
    }else if (yC + yD > w - 1) {
        p.setYC(0);
    }else if (yC + yD < 0) {
        p.setYC(w - 1);
    }else{
        p.setXC(xC + xD);
        p.setYC(yC + yD);
    }

}
