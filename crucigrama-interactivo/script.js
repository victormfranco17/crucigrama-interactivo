javascript
const crossword = document.getElementById('crossword');

const words = [
  {word: '', horizontal: true, row: 2, column: 2},
  {word: '', horizontal: false, row: 0, column: 4},
];

function createCrossword() {
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const row = document.createElement('div');
    row.classList.add('row');
    crossword.appendChild(row);

    for (let j = 0; j < word.word.length; j++) {
      const cell = document.createElement('input');
      cell.type = 'text';
      cell.maxLength = '1';
      cell.classList.add('cell');
      if (word.horizontal) {
        cell.classList.add('horizontal');
      } else {
        cell.classList.add('vertical');
      }
      row.appendChild(cell);
    }
  }
}

createCrossword();

function resetCrossword() {
  crossword.innerHTML = '';
  createCrossword();
}
