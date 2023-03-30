// Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, jika ada kata dengan panjang yang sama silahkan ambil salah satu

function longest(sentence) {
  const longestWord = sentence
    .split(" ")
    .reduce((a, b) => (a.length > b.length ? a : b));
  return `${longestWord}: ${longestWord.length} character`;
}

console.log(longest("Saya sangat senang mengerjakan soal algoritma")); //mengerjakan: 11 character
