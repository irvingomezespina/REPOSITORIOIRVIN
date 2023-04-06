function solveQuadraticEquation(a, b, c) {
    let discriminant = b * b - 4 * a * c;
    let solutions = [];
    if (discriminant < 0) {
       solutions.push("La ecuación no tiene solución real");
    } else if (discriminant === 0) {
      let solution = -b / (2 * a);
      solutions.push(solution);
    } else {
       let solution1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      let solution2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      solutions.push(solution1, solution2);
    }
  
    return solutions;
  }