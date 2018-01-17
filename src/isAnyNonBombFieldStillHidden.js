
function isAnyNonBombFieldStillHidden(aknamezo) {

    var x1 = 0;
    aknamezo.forEach(function (row){
        x1 += row.filter(function (field) {

            return field < 0 && field > -12;

        }).length;

    });


    return x1 == 0;

};



//exports.isAnyNonBombFieldStillHidden = isAnyNonBombFieldStillHidden;
