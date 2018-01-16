

var chai = require('chai');
var expect = chai.expect;


var sum = require('../src/isAnyNonBombFieldStillHidden.js');

var isAnyNonBombFieldStillHidden = sum.isAnyNonBombFieldStillHidden;


describe("", function () {


    describe("A \"isAnyNonBombFieldStillHidden\" függvény tesztje:", function () {


        // Kiegészítés:  a vizsgált függvénynek EGYETLEN mátrix bemeneti-paraméterre van szüksége, amely egyszerre
        // tartalmazza az egyes mezők "felfedettségét" (-> a már felfedett mezők értéke pozitív szám!) valamint a
        // szomszédos mezőkön található bombák számát. (+1-el megnövelve, azaz ahol nincs bomba - szomszéd mezőket
        // is beleértve - az 0 helyett 1 / -1 stb.)


        it("Aknamező-teszt-9-1 (Eset1 -> minden NEM BOMBA mezőt felfedtünk, azaz mindegyik értéke pozitív)", function () {

            var AknaMezo =
                    [[ -12, 3, 3, -12, 3, 2, 2 ],
                    [ 3, -12, 3, 3, -12, 2, 1],
                    [ 3, 3, 3, 3, 3, 2, 1],
                    [ -12, 2, 3, -12, 4, 2, 2],
                    [ 3, 3, 3, -12, 4, -12, 2],
                    [ -12, 2, 2, 2, 3, 2, 2],
                    [ 2, 2, 1, 1, 1, 1, 1]];    //összes cellaérték POZITÍV kivéve a bombát jelentő -12-es cellák!!

            var Teszt = isAnyNonBombFieldStillHidden(AknaMezo);


            var Elvart_kimenet = true;


            expect(Teszt).equal(Elvart_kimenet);

        });


        it("Aknamező-teszt-9-2 (Eset2 -> Nem aknát azaz 12-estől eltérő értéket tartalmazó mező)", function () {

            var AknaMezo =
                    [[ -12, 3, 3, -12, 3, 2, 2 ],
                    [ -3, -12, -3, -3, -12, -2, -1],
                    [ -3, -3, -3, -3, -3, -2, -1],
                    [ -12, -2, -3, -12, -4, -2, -2],
                    [ -3, -3, -3, -12, -4, -12, -2],
                    [ -12, 2, 2, 2, 3, 2, 2],
                    [ -2, 2, 1, 1, 1, 1, 1]];    //vannak NEGATÍV, -12-től eltérő azaz NEM bombát jelentő cellák!!

            var Teszt = isAnyNonBombFieldStillHidden(AknaMezo);


            var Elvart_kimenet = false;


            expect(Teszt).equal(Elvart_kimenet);

        });


    });

});