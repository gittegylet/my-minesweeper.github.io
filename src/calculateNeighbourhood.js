
function calculateNeighbourhood(aknamezo) {
    
    var aknaSzam = 0;

    var aknaMezo2 = [];
    var sor = 0;

    aknamezo.forEach(function (row) {

        var oszlop = 0;
        aknaMezo2[sor] = [];
        
        row.forEach(function (field) {

            if (field == -1) aknaMezo2[sor][oszlop] = 11;
            else {
                aknaSzam = aknaTerkep(aknamezo, oszlop, sor);
                aknaMezo2[sor][oszlop] = aknaSzam;

            }

            oszlop++;

        });

        sor++;

    });
    
    function aknaTerkep(aknaMezo, xKoordinata, yKoordinata) {

        var szumma = 0;

        for(var i=-1; i<=1; i++){

            var Y2 = yKoordinata + i;

            for(var j=-1; j<=1; j++){

                if (!(i == 0 && j == 0)) {

                    var X2 = xKoordinata + j;

                    if (Y2>=0 && X2>=0 && Y2<aknaMezo.length && X2<aknaMezo[0].length && aknaMezo[Y2][X2] == -1) szumma++;

                }

            }
        }
        return szumma;

    }

    return aknaMezo2;
}




//exports.calculateNeighbourhood = calculateNeighbourhood;


