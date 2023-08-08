debugger;
function __init__() {

  var name = 'Andres';
    console.log('1: ', name)
  function inFucntonScope() {
    var name = 'Jos'
    console.log('2: ', name)
  }
    console.log('3: ', name)
  inFucntonScope()

  function inOtherFuntionScope() {
    name = 'Diana'
    console.log('4: ', name)
  }
inOtherFuntionScope()

  console.log('5: ', name);

}
__init__()