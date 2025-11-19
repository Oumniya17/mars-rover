// Constructor Plateau
function Plateau(maxX, maxY) {
    this.maxX = maxX;
    this.maxY = maxY;
}

Plateau.prototype.isInside = function (x, y) {
    return x >= 0 && x <= this.maxX && y >= 0 && y <= this.maxY;
};

// Constructor Rover
function Rover(x, y, direction, plateau) {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.plateau = plateau;

    this.directions = ["N", "E", "S", "W"];
}

Rover.prototype.rotateLeft = function () {
    var index = this.directions.indexOf(this.direction);
    this.direction = this.directions[(index + 3) % 4];
};

Rover.prototype.rotateRight = function () {
    var index = this.directions.indexOf(this.direction);
    this.direction = this.directions[(index + 1) % 4];
};

Rover.prototype.move = function () {
    var newX = this.x;
    var newY = this.y;

    if (this.direction === "N") newY++;
    if (this.direction === "E") newX++;
    if (this.direction === "S") newY--;
    if (this.direction === "W") newX--;

    if (this.plateau.isInside(newX, newY)) {
        this.x = newX;
        this.y = newY;
    }
};

Rover.prototype.execute = function (commands) {
    for (var i = 0; i < commands.length; i++) {
        var cmd = commands[i];
        if (cmd === "L") this.rotateLeft();
        if (cmd === "R") this.rotateRight();
        if (cmd === "M") this.move();
    }
};

Rover.prototype.getPosition = function () {
    return this.x + " " + this.y + " " + this.direction;
};

// Principal Function
function marsRover(input) {
    var lines = input.trim().split("\n");

    var limits = lines[0].split(" ");
    var plateau = new Plateau(
        Number(limits[0]),
        Number(limits[1])
    );

    var results = [];
    var i = 1;

    while (i < lines.length) {
        var parts = lines[i].split(" ");
        var x = Number(parts[0]);
        var y = Number(parts[1]);
        var direction = parts[2];
        i++;

        var commands = lines[i].trim();
        i++;

        var rover = new Rover(x, y, direction, plateau);
        rover.execute(commands);

        results.push(rover.getPosition());
    }

    return results.join("\n");
}

// Test
var input = `
5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM
`;

console.log(marsRover(input));
