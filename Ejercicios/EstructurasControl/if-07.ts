/*La pizzeria Bella Napoli ofrece pizzas vegetarianas y no vegetarianas
* a sus clientes. Los ingredientes para cada tipo de pizza aparecen 
*a continuacion.*/
// Ingredientes vegetarianos: Pimiento y tofu.
// Ingredientes no vegetarianos: Peperoni, Jamon, Salmon.
/*Escribir un programa que indique al usuario si quiere una pizza
* vegetariana o no, y en funcion de su respuesta le muestre un menu
* con los ingredientes disponibles para que elija. Solo se puede
* elegir un ingrediente ademas de mozzarella y el tomate que estan
*en todas las pizzas. Al final se debe mostrar por pantalla si la pizza
*elegida es vegetariana o no y todos los ingredientes que lleva*/
function pizzeriaBellaNapoli(pizza:string, ingredient:string) {
    if (pizza=="Vegetariana" && ingredient=="Pimiento" || ingredient=="Tofu") {
    console.log("Pimiento","Tofu")
    console.log("Tu pizza es", pizza, "y contiene Mozzarella, Tomate y", ingredient);
    }
    else if (pizza=="no es vegetariana" && ingredient=="Peperoni" || ingredient=="Jamon" || ingredient=="Salmon"){
        console.log("Peperoni","Jamon","Salmon")
        console.log("Tu pizza ", pizza, "y contiene Mozzarella, Tomate y", ingredient);
}
    else {
        console.log("Tu Pizza no esta en nuestro menu");
    }
}

pizzeriaBellaNapoli("no es vegetariana","Salchicha")