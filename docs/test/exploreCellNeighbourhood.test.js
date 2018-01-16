

var chai = require('chai');
var expect = chai.expect;


var sum = require('../src/exploreCell-Neighbourhood.js');

var exploreCell = sum.exploreCell;


//var sum2 = require('../src/exploreCellNeighbourhood.js');

var exploreCellNeighbourhood = sum.exploreCellNeighbourhood;


describe("", function () {


    describe("Az \"exploreCellNeighbourhood\" függvény tesztje:", function () {


        // Kiegészítés:  a vizsgált függvénynek EGYETLEN mátrix bemeneti-paraméterre van szüksége, amely egyszerre
        // tartalmazza az egyes mezők "felfedettségét" (-> a már felfedett mezők értéke pozitív szám!) valamint a
        // szomszédos mezőkön található bombák számát. (+1-el megnövelve, azaz ahol nincs bomba - szomszéd mezőket
        // is beleértve - az 0 helyett 1 / -1 stb.)


        it("Aknamező-teszt-7 (\"nullás\" azaz mínusz 1-et tartalmazó mező esetében a \"feltérképezési folyamat\" ellenőrzése)", function () {


            var AknaMezo =
                    [[ -12, -3, 3, -12, -3, -2, -2 ],
                    [ -3, -12, -3, -3, -12, -2, -1],
                    [ -3, -3, -3, -3, -3, -2, -1],
                    [ -12, -2, -3, -12, -4, -2, -2],
                    [ -3, -3, -3, -12, -4, -12, -2],
                    [ -12, -2, -2, -2, -3, -2, -2],
                    [ -2, -2, -1, -1, -1, -1, -1]];



            var Teszt = Array.from(exploreCellNeighbourhood(AknaMezo, 3, 6));

            var Elvart_kimenet =
                    [[ -12, -3, 3, -12, -3, -2, -2 ],
                    [ -3, -12, -3, -3, -12, -2, -1],
                    [ -3, -3, -3, -3, -3, -2, -1],
                    [ -12, -2, -3, -12, -4, -2, -2],
                    [ -3, -3, -3, -12, -4, -12, -2],
                    [ -12, 2, 2, 2, 3, 2, 2],
                    [ -2, 2, 1, 1, 1, 1, 1]];


            expect(Teszt).deep.equal(Elvart_kimenet);

        });


    });


});