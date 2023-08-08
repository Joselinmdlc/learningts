function numberParInpar(num: number) {
  switch (num % 2) {
    case 0:
    console.log("Tu numero es par");
    break;
  default:
    console.log("Tu numero es inpar");
  }
}
numberParInpar(98);
