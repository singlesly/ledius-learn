(() => {
  let myName = 'Ivan Ivanov';
  let name1 = 'Artem Petrov';

  let firstName = 'Vasya';
  let lastName = 'Shukin';
  let fullName = firstName + ' ' + lastName;

  console.log(fullName);

  let x = 'Opa';
  let y = 'Opa';
  let result = x == y;

  console.log(result);

  let title = 'Новости про войну';

  let hasNews = title.includes('Новости');
  let hasWar = title.includes('войн');

  console.log(hasNews);
  console.log(hasWar);

  let lowercaseTitle = title.toLowerCase();

  console.log(lowercaseTitle);

  let uppercaseTitle = title.toUpperCase();

  console.log(uppercaseTitle);

  console.log(title);

})()
