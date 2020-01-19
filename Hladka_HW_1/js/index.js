
let rows = Number(prompt("Введите количество строк"));
let cols = Number(prompt("Введите количество колонок"));

let newArr = new Array(rows);
let curNum = 1;

for (i = 0; i < newArr.length; i++) {
  newArr[i] = new Array(cols);
}
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    newArr[i][j] = 0;
  }
}

let spiralMatrix = function (matrix) {
  let startRow = 0;
  let startColumn = 0;
  let endRow = matrix.length - 1;
  let endColumn = matrix[0].length - 1;

  while (startColumn <= endColumn && startRow <= endRow) {
    for (let i = startColumn; i <= endColumn; i++) {
      matrix[startRow][i] = curNum++
    }
    startRow++;

    for (let i = startRow; i <= endRow; i++) {
      matrix[i][endColumn] = curNum++;
    }
    endColumn--;

    if (startRow <= endRow) {

      for (let i = endColumn; i >= startColumn; i--) {
        matrix[endRow][i] = curNum++;
      }
    }
    endRow--;

    if (startColumn <= endColumn) {

      for (let i = endRow; i >= startRow; i--) {
        matrix[i][startColumn] = curNum++;
      }
    }
    startColumn++;

  }
  return matrix;
};
spiralMatrix(newArr);

for (let i = 0; i < newArr.length; i++) {
  let myId = document.getElementById('matrix');
  let row = document.createElement('tr');
  for (let j = 0; j < newArr[i].length; j++) {
    let matrixEl = document.createElement('td');
    let matrixElNum = document.createTextNode(newArr[i][j]);
    matrixEl.appendChild(matrixElNum);
    row.appendChild(matrixEl);
  }
  myId.appendChild(row);
}
