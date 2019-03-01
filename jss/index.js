const a = parseFloat(prompt('Enter a value a: '));
const b = parseFloat(prompt('Enter b value b: '));
const c = parseFloat(prompt('Enter c value c: '));
alert('if you enter namber ' + a + ', ' + b + ' and ' + c)
const d = getDiscriminant(a, b, c);
const result=solveEquation (a, b, c, d);
alert (result);


function getDiscriminant(a, b, c)
{
    return  b * b - 4 * a * c;
}


function solveEquation (type), enter (a, b, c, d) {
        if (d === 0) {
        x = -b / (2 * a);
        return 'x2 = x1 = ' + x;
    }
    if (d > 0) {
        x1 = (-b + Math.sqrt(d)) / (2 * a);
        x2 = (-b - Math.sqrt(d)) / (2 * a);
        return 'Equation results: x1 = ' + x1 + ' , x2 = ' + x2;
    }
    else if (d < 0)
        return 'If the discriminant is less than zero, we does not have real roots';

}
