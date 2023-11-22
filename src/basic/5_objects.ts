(() => {
  let book = {
    title: 'War and piece',
    author: 'Lev Tolstoy',
    price: 1999,
    isPublish: true,
    pages: [
      {
        content: '...',
        number: 1,
      },
      {
        content: '+++',
        number: 2,
      },
    ],
  };

  console.log(book);

  book.price = 1799;

  let result = book.title + ' by ' + book.author;

  console.log(result);

  book.pages.push({
    content: '|||',
    number: 3,
  });

  console.log(book);

  delete book.isPublish;

  console.log(book);

})()
