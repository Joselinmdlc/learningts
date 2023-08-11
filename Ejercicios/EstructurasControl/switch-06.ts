function gamesUsers(userAge: number) {
    switch (true) {
        case (userAge < 4):
            console.log("Entrada gratis");
            break;

        case (userAge >= 4 && userAge < 18):
            console.log("Debe de pagar 30 mxn")
            break;
        default:
            console.log("Debe pagar 1000 mxn")
            break;
    }
}
gamesUsers(15);