

var chai = require('chai');
var expect = chai.expect;


var sum = require('../src/hideTheWholeField.js');

var hideTheWholeField = sum.hideTheWholeField;


describe("", function () {


    describe("Az aknamező értékeit \"felfedetlen\" helyzetbe állító függvény tesztje " +
             "(mezőértékek 1-gyel növelése illetve negálása!):", function () {

        //Kiegészítés:  az "aknamezőn" a bombákat -1 helyett 11-es számok jelképezik!


        var mineCount = 18;
        var size = 8;


        it("Aknamező-teszt-5 (a 'hideTheWholeField' függvény tesztje)", function () {


            //Megjegyzés:  A függvény valamennyi cella értékét egyel növeli
            //             (pl. 0-kat 1-re változtatva) és egyben negálja ->
            //             Vagyis a NEGATÍV cellaérték fogja jelenteni a fel nem fordított mezőt!
            //Megjegyzés2: a cellaértékek eggyel történő megnövelésére azért van szükség,
            //             mert a negatív nullákat a program nem tudja megkülönböztetni a "nem negatív" nulláktól
            //             ill. ilyen esetekben helytelen működést kapnánk mivel a -0 a továbbiakban egyszerű 0-ként
            //             tárolódik...


            var AknaMezo =
                    [[ 11, 2, 2, 11, 2, 1 ],
                    [ 2, 11, 2, 2, 11, 1 ],
                    [ 2, 2, 2, 2, 2, 1 ],
                    [ 11, 1, 2, 11, 3, 1 ],
                    [ 2, 2, 2, 11, 3, 11 ],
                    [ 11, 1, 1, 1, 2, 1 ]];

            var Elvart_kimenet =
                    [[ -12, -3, -3, -12, -3, -2 ],
                    [ -3, -12, -3, -3, -12, -2 ],
                    [ -3, -3, -3, -3, -3, -2 ],
                    [ -12, -2, -3, -12, -4, -2 ],
                    [ -3, -3, -3, -12, -4, -12 ],
                    [ -12, -2, -2, -2, -3, -2 ]];


            AknaMezo = hideTheWholeField(AknaMezo);


            expect(AknaMezo).deep.equal(Elvart_kimenet);


        });


    });


});