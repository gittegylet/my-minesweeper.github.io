
function generateMineField(Size, MineCount) {

    var AknaMezo = [];

    for(var i=0; i<Size; i++){
        AknaMezo[i] = [];

        for(var j=0; j<Size; j++){
            AknaMezo[i][j] = 0;

        }
    }


    var sum = 0;

    while (sum < MineCount) {

        var iX = Math.floor(Math.random() * Size);
        var jY = Math.floor(Math.random() * Size);

        if (AknaMezo[jY][iX] != -1) {
            AknaMezo[jY][iX] = -1;
            sum++;
        }
    }

    return AknaMezo;

}


function  aknaSzamlalo(aknamezo, MineCount) {

    var aknak = 0;
    var teszt1 = [];

    aknamezo.forEach(function (item) {

        aknak += item.filter(function (x) {

            return x < 0;

        }).length;

        teszt1.push(item.filter(function (x) {

            return x < 0;

        }).length);

    });


    return aknak;

}




//exports.generateMineField = generateMineField;
//exports.aknaSzamlalo = aknaSzamlalo;

