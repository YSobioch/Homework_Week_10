document.getElementById('submit').addEventListener('click', () => {
    let list = document.getElementById('list');
    let row = list.insertRow(1);

    row.insertCell(0).innerHTML = document.getElementById('first-name').value +
    " '" + document.getElementById('gamer-tag').value + "' " +
    document.getElementById('last-name').value;

    let checkboxes = document.querySelectorAll('input[id="inlineCheckbox1"]:checked');
    let positions = ''
    let index = 0;
    checkboxes.forEach((checkbox) => {
        if (index > 0){
            positions += ' , ';
        }
        positions += checkbox.value;
        index++;
    })
    row.insertCell(1).innerHTML = positions;

    let rank = document.querySelector('input[id="radioRank"]:checked').value;
    row.insertCell(2).innerHTML = rank;
    document.getElementById('first-name').value = '';
})

