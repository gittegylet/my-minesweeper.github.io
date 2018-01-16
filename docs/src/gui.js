

function clTab(tabla) {
    console.table(tabla);

}


function startMinefield(size, mineCount) {


    var AknaMezo = generateMineField(size, mineCount);

    return hideTheWholeField(calculateNeighbourhood(AknaMezo));

}


function guiInitialise(mineField) {


    let aknaTabla = document.querySelector('#Aknamezo');

    var size = mineField.length;


    var endIsGameOver = '';


    for (let i = 0; i < size; i++) {

        let tr = document.createElement('tr');
        aknaTabla.append(tr);

        tr.setAttribute('class', 'oszlop-sor');

        for (let j = 0; j < size; j++) {

            let td = document.createElement('td');


            tr.append(td);
            td.textContent = '?';

            td.setAttribute('class', 'sor-oszlop');


            td.addEventListener('click', function (e) {


                if (td.innerText == '?' && !e.shiftKey && mineField[i][j] < 0)
                {
                    var indikator0 = exploreCell(mineField, j, i);
                    indikator0 = parseInt(indikator0[indikator0.length - 1]);
                    

                    var indikator = createNonHideFields(td, j, i);


                    if (indikator != 0 && indikator0 != 0) playSound('placcs');
                    else if (indikator == 1) playSound('placcs1');


                    if (td.innerText == '¤' || isAnyNonBombFieldStillHidden(mineField)) {

                        endIsGameOver = wasItABomb(mineField, j, i);

                        var thisGameEnd = isAnyNonBombFieldStillHidden(mineField);


                        if (endIsGameOver || thisGameEnd) {
                            showEverything(mineField);
                            updateCell(mineField);
                            clTab(mineField);

                            alert(LOSS_WIN(endIsGameOver));
                            playSound('bummm');

                        }


                    }
                    else updateCell(mineField);


                }
                else if (e.shiftKey && td.innerText != '?' && td.innerText != '¤' && mineField[i][j] > 0 && mineField[i][j] != 12) {

                    var indikator = seeThisNeighbourhood(j, i);

                    if (indikator > 0)
                    {
                        updateCell(mineField);

                        var thisGameEnd = isAnyNonBombFieldStillHidden(mineField);

                        if (thisGameEnd) {

                            showEverything(mineField);

                            updateCell(mineField);

                            clTab(mineField);

                            alert(LOSS_WIN(false));

                            playSound('bummm');

                        }
                        else playSound('placcs');

                    }

                    
                }


            });


            td.addEventListener('contextmenu', function (ev) {

                ev.preventDefault();


                if (td.innerText == '?') { td.innerText = '¤'; td.classList.remove('sor-oszlop'); td.classList.add('predicted'); }
                else if (td.innerText == '¤') { td.innerText = '?'; td.classList.remove('predicted'); td.classList.add('sor-oszlop'); }

                playSound('klakk');

                return false;

            }, false);


        }

    }


    function seeThisNeighbourhood(x, y) {
        
        var indikator2 = 0;
        
        for (var i = -1; i <= 1 ; i++) {
            for (var j = -1; j <= 1; j++) {

                if (i != 0 || j != 0)
                {

                    var Y2 = y + i,
                        X2 = x + j;

                    if (Y2 >= 0 && X2 >= 0 && Y2 < mineField.length && X2 < mineField[0].length &&
                        mineField[Y2][X2] < 0 && mineField[Y2][X2] != -12) {

                        mineField[Y2][X2] = -mineField[Y2][X2];
                        indikator2++;

                    }
                }
                
            }

        }

        return indikator2;

    }


    function createNonHideFields(td, x, y) {

        var mezoErtek = mineField[y][x];
        var indikator = 0;

        if (mezoErtek == 12 && td.getAttribute('class') != 'predicted') {

            indikator = -1;
            td.innerText = '¤';
            
            td.classList.remove('sor-oszlop');
            td.classList.add('predicted');

        }
        else if (mezoErtek > 0 && td.getAttribute('class') != 'visible') {

            indikator = 1;
            td.innerText = mezoErtek - 1;
            td.classList.remove('sor-oszlop');
            td.classList.add('visible');


        }


        return indikator;

    }


}




//exports.startMinefield = startMinefield;
//exports.guiInitialise = guiInitialise;

