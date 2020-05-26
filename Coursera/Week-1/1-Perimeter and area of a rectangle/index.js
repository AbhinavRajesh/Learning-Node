const rectangle = require("./rectangle");

const SolveRect = (l, b) => {
  console.log("Solving for recatangle with l = " + l + " and b = " + b);
  if (l <= 0 || b <= 0) {
    console.log("Reactangle dimension should be greater than zero");
  } else {
    console.log("Perimeter of the rectangle: " + rectangle.perimeter(l, b));
    console.log("Area of the rectangle: " + rectangle.area(l, b));
  }
};

SolveRect(3, 4);
SolveRect(-3, 4);
SolveRect(0, 4);
SolveRect(7, 4);
