module.exports = {
    Canvas: function(options) {
        // Get canvas container
        this.canvasContainer = $(options.container);

        // Create our canvas
        this.canvas = $('<svg></svg>')
            .attr("width", options.width)
            .attr("height", options.height);

        // Append our canvas to our container
        this.canvasContainer.append(this.canvas);

        // Add a turtle to the canvas
        this.addTurtle = function(turtle) {
            // TODO: Add turtle to canvas
        };
    },
    Turtle: function() {
    }
};

