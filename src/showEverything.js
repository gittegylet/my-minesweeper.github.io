

function showEverything(aknaMezo) {

    for (var i = 0; i < aknaMezo.length; i++) {
        for (var j = 0; j < aknaMezo.length; j++) {

            if (aknaMezo[i][j] == -12) aknaMezo[i][j] = 12;

        }

    }

    return aknaMezo;

}