

var chai = require('chai');
var expect = chai.expect;


var sum = require('../src/exploreCell-Neighbourhood.js');

var exploreCell = sum.exploreCell;


//var sum2 = require('../src/exploreCellNeighbourhood.js');

//var exploreCellNeighbourhood = sum.exploreCellNeighbourhood;



describe("", function () {


    describe("Az \"exploreCell\" függvény tesztje:", function () {


        var AknaMezo =
            [[ -12, -3, 3, -12, -3, -2, -2 ],
                [ -3, -12, -3, -3, -12, -2, -1],
                [ -3, -3, -3, -3, -3, -2, -1],
                [ -12, -2, -3, -12, -4, -2, -2],
                [ -3, -3, -3, -12, -4, -12, -2],
                [ -12, -2, -2, -2, -3, -2, -2],
                [ -2, -2, -1, -1, -1, -1, -1]];


        // Kiegészítés:  a vizsgált függvénynek EGYETLEN mátrix bemeneti-paraméterre van szüksége, amely egyszerre
        // tartalmazza az egyes mezők "felfedettségét" (-> a már felfedett mezők értéke pozitív szám!) valamint a
        // szomszédos mezőkön található bombák számát. (+1-el megnövelve, azaz ahol nincs bomba - szomszéd mezőket
        // is beleértve - az 0 helyett 1 / -1 stb.)


        it("Aknamező-teszt-6-1 (első eset -> a mező nem rejtett azaz \"értékét\" már felfedtük)", function () {

            var Teszt1 = exploreCell(AknaMezo, 2, 0);
            var Elvart_kimenet1 = "Already-explored0";   //Ez egy felfedett mező, ezért értéke NEM NEGATÍV szám!!


            expect(Teszt1).equal(Elvart_kimenet1);

        });


        it("Aknamező-teszt-6-2 (második eset -> a mező \"rejtett\" bombát tartalmaz)", function () {

            var Teszt2 = exploreCell(AknaMezo, 3, 0);
            var Elvart_kimenet2 = "Bomb-found0";  //Bombát találtunk, azaz a mező értéke -12


            expect(Teszt2).equal(Elvart_kimenet2);

        });


        it("Aknamező-teszt-6-3 (harmadik eset -> üres mező, amelynek szomszédos mezőin SINCS BOMBA!)", function () {

            var Teszt3 = exploreCell(AknaMezo, 3, 6);
            var Elvart_kimenet3 = "Explored1";   //Olyan eset, amikor a vizsgált mezőn nincs - és a szomszédos mezők
                                                 // egyikén sincs - bomba, vagyis az érték pontosan -1 (eredetileg 0!)


            expect(Teszt3).equal(Elvart_kimenet3);

        });


        it("Aknamező-teszt-6-4 (negyedik eset -> üres mező, amelynek szomszédos mezőin található bomba)", function () {

            var Teszt4 = exploreCell(AknaMezo, 0, 6);
            var Elvart_kimenet4 = "Explored0";   //Olyan eset, amikor a vizsgált mezőn nincs - azonban szomszédos mezők
                                                 // valamelyikén VAN - bomba, vagyis az érték nem -1 (és nem is -12!)


            expect(Teszt4).equal(Elvart_kimenet4);

        });


    });


});