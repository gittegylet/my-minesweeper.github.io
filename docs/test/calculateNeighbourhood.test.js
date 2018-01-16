

var chai = require('chai');
var expect = chai.expect;

var sum = require('../src/generateMineField.js');

var generateMineField = sum.generateMineField;

var sum2 = require('../src/calculateNeighbourhood.js');

var calculateNeighbourhood = sum2.calculateNeighbourhood;



describe("", function () {


    describe("Az aknamezőt az \"üres mezők\" szomszédos bombáinak számával (is) kiegészítő függvény tesztje:", function () {

        var mineCount = 18;
        var size = 8;


        //Kiegészítés:  az "aknamezőn" a bombákat jelölő -1-et 11-el helyettesíti, aminek későbbiekben lesz jelentősége


        it("Aknamező-teszt-4-1 (a szomszédos aknákat megszámláló függvény tesztje, véletlenül generált bemeneti tömbökkel!)", function () {

            for(var n = 0; n < 1000; n++){


                var AknaMezo = generateMineField(size, mineCount);

                var AknaMezo2 = calculateNeighbourhood(AknaMezo);

                var AknaMezo3 = [];

                var y = 0,
                    x;

                AknaMezo.forEach(sor => { x = 0; AknaMezo3[y] = []; sor.forEach(oszlop => {

                    if (oszlop != -1) {

                        var X, Y;
                        var sum = 0;

                        for(var y2 = -1; y2 <= 1; y2++) {

                            Y = y + y2;

                            for(var x2 = -1; x2 <= 1; x2++) {

                                if (!(x2 == 0 && y2 == 0)) {

                                    X = x + x2;

                                    if (X >= 0 && X <= size - 1 && Y >= 0 && Y <= size - 1 && AknaMezo2[Y][X] == 11) sum++;

                                }

                            }

                        }

                        AknaMezo3[y][x] = sum;

                    }
                    else AknaMezo3[y][x] = 11;

                    x++;

                });

                y++;

                });

                expect(AknaMezo2).deep.equal(AknaMezo3);

            }

        });


        it("Aknamező-teszt-4-2 (a szomszédos aknákat megszámláló függvény tesztje, fix bemeneti tömbbel!)", function () {


            var AknaMezo =
                [[ -1, 0, 0, -1, 0, 0 ],
                [ 0, -1, 0, 0, -1, 0 ],
                [ 0, 0, 0, 0, 0, 0 ],
                [ -1, 0, 0, -1, 0, 0 ],
                [ 0, 0, 0, -1, 0, -1 ],
                [ -1, 0, 0, 0, 0, 0 ]];

            var Elvart_kimenet =
                [[ 11, 2, 2, 11, 2, 1 ],
                [ 2, 11, 2, 2, 11, 1 ],
                [ 2, 2, 2, 2, 2, 1 ],
                [ 11, 1, 2, 11, 3, 1 ],
                [ 2, 2, 2, 11, 3, 11 ],
                [ 11, 1, 1, 1, 2, 1 ]];

            var AknaMezo2 = calculateNeighbourhood(AknaMezo);

            expect(AknaMezo2).deep.equal(Elvart_kimenet);

        });


    });


});