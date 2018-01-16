
//var chai = require('chai');
//var expect = chai.expect;


//var sum = require('../src/exploreCellNeighbourhood.js');

//var exploreCellNeighbourhood = sum.exploreCellNeighbourhood;


function exploreCell(aknamezo, x, y) {

    var indikator = 0;

    if (aknamezo[y][x] > 0) return "Already-explored" + indikator;
    else if (aknamezo[y][x] == -12) { aknamezo[y][x] = 12; return "Bomb-found" + indikator; }
    else if (aknamezo[y][x] == -1) { aknamezo[y][x] = Math.abs(aknamezo[y][x]); indikator++; exploreCellNeighbourhood(aknamezo, x, y); }
    else { aknamezo[y][x] = Math.abs(aknamezo[y][x]); }


    return "Explored" + indikator;

}


function exploreCellNeighbourhood(aknamezo, x, y) {


    for(var i=-1; i<=1; i++){
        for(var j=-1; j<=1; j++){

            if (i != 0 || j != 0) {

                var X2 = x + j;
                var Y2 = y + i;

                if (Y2 >= 0 && X2 >= 0 && Y2 < aknamezo.length && X2 < aknamezo[0].length && aknamezo[Y2][X2] < 0 && Math.abs(aknamezo[Y2][X2]) != 12) exploreCell(aknamezo, X2, Y2);

            }

        }
    }

    //console.log("exploredALL");  //---> Ha 2db külön fájlba kerül a két függvény, akkor eddig a pontig sose jut el...?


    return aknamezo;    //<--- A visszatérési értéknek itt csupán a tesztelés szempontjából van jelentősége, a program
                        //     futása/működése szempontjából viszont mellékes... ;)


}



exports.exploreCell = exploreCell;
exports.exploreCellNeighbourhood = exploreCellNeighbourhood;
