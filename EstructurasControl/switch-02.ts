function calculator(operation: string) {
  let result: number;
  const smsresult = "El resultado de";
  const smsresult2 = "es:";
  function operationExe(a: number, b: number) {
    switch (operation) {
      case "suma":
        result = a + b;
        break;
      case "resta":
        result = a - b;
        break;
      case "multiplicacion":
        result = a * b;
      case "division":
        result = a / b;
    }
    console.log(`${smsresult}${operation}, ${smsresult2} ${result}`);
  }
  operationExe(25, 5);
}
calculator("division");
