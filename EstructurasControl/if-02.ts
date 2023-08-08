function calculator(operation:string){
    let result:number;
const smsresult="El resultado de"
const smsresult2= "es:"
  function operationExe(a:number, b:number) {

    if (operation === 'suma') {
      result = (a + b) 
    } else if (operation== 'resta') {
      result = (a-b)
    } else if (operation== 'multiplicacion') {
      result = (a*b)
    } else if (operation== 'division') {
      result = (a / b)
    }
    console.log(`${smsresult}${operation}, ${smsresult2} ${result}`);
  }

operationExe (5,0)
}
calculator("division");
