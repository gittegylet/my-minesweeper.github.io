

var chai = require('chai');
var expect = chai.expect;

var sum = require('../src/generateMineField.js');

var generateMineField = sum.generateMineField;
var aknaSzamlalo = sum.aknaSzamlalo;


describe("", function () {


    describe("Aknamezőt létrehozó/generáló függvény tesztje:", function () {

        var mineCount = 18;
        var size = 8;


        it("Aknamező-teszt-1 (sorok számának egyezése)", function () {

            var AknaMezo = generateMineField(size, mineCount);

            expect(size).equal(AknaMezo.length);

        });


        it("Aknamező-teszt-2 (aknák számának egyezése)", function () {

            for(var x = 0; x < 1000; x++){

                var AknaMezo = generateMineField(size, mineCount);

                var mines = 0;

                for(var i=0; i<size; i++){
                    for(var j=0; j<size; j++){
                        if (AknaMezo[i][j] == -1) mines++;

                    }

                }

                expect(mines).equal(mineCount);

            }

        });


        it("Aknamező-teszt-3 (a berakott aknák számának vizsgálata akna-számláló függvénnyel, véletlen generált értékekkel!)", function () {

            for(var x = 0; x < 1000; x++){

                mineCount = Math.floor(Math.random() * 16) + 15;   //véletlen generált aknaszám és táblaméret!
                size = Math.floor(Math.random() * 6) + 6;

                var AknaMezo = generateMineField(size, mineCount);

                var mines = aknaSzamlalo(AknaMezo, mineCount);

                expect(mines).equal(mineCount);

            }

        });


    });


});