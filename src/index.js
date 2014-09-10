// Extend number prototype to convert radians to degrees and vice versa
Number.prototype.toDegrees = function() {
    return this * (180 / Math.PI);
};

Number.prototype.toRadians = function() {
    return this * (Math.PI / 180);
};

module.exports = {
    Canvas: function(options) {
        // Allow functions to access top level scope
        var self = this;

        // Get canvas container
        self.canvas = document.querySelector(options.canvas);

        // Setup paper.js
        paper.setup(self.canvas);

        // Keep track of our turtles
        self.turtles = [];

        // Add a turtle to the canvas
        self.addTurtle = function(turtle) {
            // Add the turtle to the canvas's turtles
            self.turtles.push(turtle);

            // Add ourself to the turtle
            turtle.canvas = self.canvas;
        };
    },
    Turtle: function(options) {
        // Allow functions to access top level scope
        var self = this;

        // Keep track of the canvas the turtle belongs to
        self.canvas = null;

        // Keep track of the turtle's location and direction
        self.location = new paper.Point(options.x, options.y);
        self.direction = options.direction;

        // Move turtle forward
        self.forward = function(distance) {
            // Keep our old location
            var oldLocation = self.location;
            
            // Calculate displacement
            var displacement = new paper.Point(
                Math.sin(self.direction.toRadians()),
                Math.cos(self.direction.toRadians())
            );
            displacement = displacement.multiply(distance);

            // Set new location
            self.location = self.location.add(displacement);

            // Draw the line
            var path = new paper.Path();
            path.strokeColor = "black";
            path.moveTo(oldLocation);
            path.lineTo(self.location);

            // Update the canvas
            paper.view.draw();
        };
    }
};

