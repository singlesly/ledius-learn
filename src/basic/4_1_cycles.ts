(() => {
  let phones = [
    '79609889797',
    '79309709797',
    '79808008888',
    '79309709794',
    '79309709797',
    '79309709797',
  ];

  console.log(phones);

  for (let phone of phones) {
    if (phone.includes('800')) {
      console.log('Телефон является бесплатным');
    }

    console.log('+' + phone);
  }

  for(let index = 0; index < phones.length; index = index + 1) {
    phones[index] = '+' + phones[index];
  }

  console.log(phones);

})()
