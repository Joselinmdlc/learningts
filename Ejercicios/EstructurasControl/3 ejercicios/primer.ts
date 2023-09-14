//Comprobacion de Palindomos.

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
