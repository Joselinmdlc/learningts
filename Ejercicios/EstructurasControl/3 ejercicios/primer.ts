//Comprobacion de Palindomos.
/*function textPalindrome(text: string) {
    let a = text.split("");
    let reverse = a.reverse();
    return text == reverse.join("") ? "Si es" : "No es"
}
console.log(textPalindrome("amor akalsm roma")) */




/*function isPalindrome(text: string) {
    text = text.replace(" ", "");
    text = text.toLowerCase();
    let i = 0;
    for (let i = 0; i < text.length / 2; i++) {
    } if (text.charAt(i) == text.charAt(text.length - 1 - i)){
        console.log("El texto es Palindromo")
    }
    else {
        console.log("El texto no es Palindromo")
    }
}
isPalindrome("Anita lava joselin la tina")*/

function isPalindrome(text: string) {
    text = text.replace(/\s/g, "").toLowerCase();
    let isPalindromo = true;

    for (let i = 0; i < text.length / 2; i++) {
        if (text.charAt(i) !== text.charAt(text.length - 1 - i)) {
            isPalindromo = false;
            break;
        }
    }
    if (isPalindromo) {
        console.log("El texto es Palíndromo");
    } else {
        console.log("El texto no es Palíndromo");
    }
}
isPalindrome("Anita lava la tina");
