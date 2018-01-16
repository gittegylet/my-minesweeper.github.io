

var chai = require('chai');
var expect = chai.expect;


var sum = require('../src/wasItABomb.js');

var wasItABomb = sum.wasItABomb;


//var sum2 = require('../src/exploreCellNeighbourhood.js');

var exploreCellNeighbourhood = sum.exploreCellNeighbourhood;


describe("", function () {


    describe("A \"wasItABomb\" függvény tesztje:", function () {


        var AknaMezo =
                [[ 12, -3, 3, -12, -3, -2, -2 ],
                [ -3, -12, -3, -3, -12, -2, -1],
                [ -3, -3, -3, -3, -3, -2, -1],
                [ -12, -2, -3, -12, -4, -2, -2],
                [ -3, -3, -3, -12, -4, -12, -2],
                [ -12, -2, -2, -2, -3, -2, -2],
                [ -2, -2, -1, -1, -1, -1, -1]];


        it("Aknamező-teszt-8-1 (Eset1 -> 12-es értéket, vagyis AKNÁT tartalmazó mezőre \"léptünk\")", function () {


            var Teszt = wasItABomb(AknaMezo, 0, 0);


            var Elvart_kimenet = true;


            expect(Teszt).equal(Elvart_kimenet);

        });


        it("Aknamező-teszt-8-2 (Eset2 -> Nem aknát azaz 12-estől eltérő értéket tartalmazó mező)", function () {


            var Teszt = wasItABomb(AknaMezo, 1, 0);


            var Elvart_kimenet = false;


            expect(Teszt).equal(Elvart_kimenet);

        });


    });

});