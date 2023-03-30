// Silahkan cari hasil dari pengurangan dari jumlah diagonal sebuah matrik NxN

function sumDiagonal(matrix) {
  let diagonalA = 0;
  let diagonalB = 0;

  matrix.forEach((matrix, idx) => {
    diagonalA += matrix[idx];
    diagonalB += matrix[matrix.length - idx - 1];
  });

  return diagonalA - diagonalB;
}

console.log(sumDiagonal([[1, 2, 0],[4, 5, 6],[7, 8, 9],])); //3
