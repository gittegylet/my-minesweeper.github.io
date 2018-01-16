
function hideTheWholeField(aknamezo) {

    var aknamezo2 = [];
    n = 0;

    aknamezo.forEach(function (row) {
        aknamezo2[n] = [];
        aknamezo2[n] = row.map(function (item) {
            return -Math.abs(++item);

        });

        n++;

    });

    return aknamezo2;

}




exports.hideTheWholeField = hideTheWholeField;
