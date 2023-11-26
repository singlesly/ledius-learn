(() => {
  class Printer {

    @Preprint
    print() {
      console.log('Its my name');
    }
  }

  function Preprint(target, property, value) {
    const original = value.value;

    value.value = function () {
      console.log('I now call some other function', original);
      original();
    }
  }

  const printer = new Printer();

  printer.print();


})()
