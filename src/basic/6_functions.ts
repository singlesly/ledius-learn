(() => {
  function calcResult(x, a, b) {
    let y = x * 2;
    let z = 100 - y + a + b;

    console.log(z);

    return z;
  }

  calcResult(15, 20, 30);
  let r1 = calcResult(20, 100, 200);
  let r2 = calcResult(30, 300, 400);

  let finalResult = r1 + r2;

  console.log(finalResult);


  let book = {
    title: 'War and piece',
    author: 'Lev Tolstoy',
  };

  let book2 = {
    title: 'Rybka',
    author: 'Loskov',
  };

  let book3 = {
    title: 'Babushka',
    author: 'Petrov Ivan',
  };

  function fullBookName(objBook) {
    return objBook.title + ' by ' + objBook.author;
  }

  let result = fullBookName(book);
  let result1 = fullBookName(book2);
  let result2 = fullBookName(book3);

  console.log(result);
  console.log(result1);
  console.log(result2);

})()
