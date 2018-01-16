
function updateCell (mineField) {

    let aknaMezo = document.querySelectorAll('#Aknamezo tr');

    var y = 0;

    aknaMezo.forEach(function (sor) {

        let cellak = sor.querySelectorAll('td');

        var x = 0;

        cellak.forEach(function (cella) {

            if (mineField[y][x] != 12 && mineField[y][x] > 0 && cella.innerText != mineField[y][x] - 1 &&
                cella.getAttribute('class') != 'visible') {

                cella.innerText = mineField[y][x] - 1;
                cella.classList.remove('sor-oszlop');
                cella.classList.add('visible');

            }
            else if (mineField[y][x] == 12) {

                cella.innerText = '¤';
                if (cella.getAttribute('class') == 'sor-oszlop') cella.classList.remove('sor-oszlop');
                else if (cella.getAttribute('class') == 'visible') cella.classList.remove('visible');

                cella.classList.add('predicted');

            }

            x++;

        });

        y++;

    });

    
    return mineField;

}



//exports.updateCell = updateCell;
