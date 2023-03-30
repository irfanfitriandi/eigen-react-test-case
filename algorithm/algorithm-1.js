// Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"

function reverseAlphabet(word) {
  const reverseAlphabet = word
    .match(/[a-zA-Z]+/)[0]
    .split("")
    .reverse()
    .join("");
  const number = word.match(/[0-9]+/)[0];

  return reverseAlphabet + number;
}

console.log(reverseAlphabet("NEGIE1")); //EIGEN1
