// Terdapat dua buah array yaitu array INPUT dan array QUERY, silahkan tentukan berapa kali kata dalam QUERY terdapat pada array INPUT

function findMatchQuery(INPUT, QUERY) {
  return QUERY.map((query) => INPUT.filter((input) => query === input).length);
}

console.log(findMatchQuery(["xc", "dz", "bbb", "dz"], ["bbb", "ac", "dz"])); //[1, 0, 2]
