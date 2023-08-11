function thePersonTribute1(userAge: number, ingresos: number) {
    switch (true) {
        case (userAge > 16 && ingresos >= 1000) :
            console.log("El usuario puede tributar");
        break;
    default:
        console.log("El usuario no puede tributar");
}
}
thePersonTribute1(26, 2000); 