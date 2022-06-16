const shapes = [{ Type: 'triangle', sides: { base: 6, height: 4 } },
    { Type: 'circle', sides: { radius: 10 }, },
    { Type: 'square', sides: { base: 4, } }
];

function areaOfShapes(Tshapes) {

    if (Tshapes.Type === 'triangle') {

        return 0.5 * Tshapes.sides.base * Tshapes.sides.height;


    } else if (Tshapes.Type === 'circle') {
        return Tshapes.sides.radius * Tshapes.sides.radius;

    } else if (Tshapes.Type === 'square') {
        return Tshapes.sides.base * Tshapes.sides.base;


    } else {
        return 'shape doesnt exist';
    }
}


console.log(areaOfShapes(shapes['circle']));