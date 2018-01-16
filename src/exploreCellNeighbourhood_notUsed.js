
var chai = require('chai');
var expect = chai.expect;


var sum = require('./exploreCell-Neighbourhood.js');

var exploreCell = sum.exploreCell;


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


    //console.log("exploredALL");   ///<---ide nem jut el soha, MIÉRT???

    return aknamezo;   //<--- A visszatérési értéknek itt csupán a tesztelés szempontjából van jelentősége, a program
                       //     futása/működése szempontjából viszont mellékes... ;)


}




exports.exploreCellNeighbourhood = exploreCellNeighbourhood;
