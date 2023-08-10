
function pizzeriaBellaNapoli(pizza:string, ingredient:string) {

    switch (ingredient) {
    case "tofu":{
    pizza= "Vegetariana"
    break;
    }
    case "pimiento": {
    pizza= "Vegetariana"
    break;
}
    case "Peperoni": {
    pizza= "No es vegetariana"
    break;
}
    case "Jamon": {
    pizza= "No es vegetariana"
    break;
}
    case "Salmon": {
    pizza= "No es vegetariana"
    break;
}
    default: {
        console.log("Tu Pizza no esta en nuestro menu");
        break;
    }
}
console.log(`Tu pizza es ${pizza} y contiene mozarella, tomate y ${ingredient} `)
}
pizzeriaBellaNapoli("carne","Salchicha")