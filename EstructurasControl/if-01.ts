function __init__() {
  function yourPersonIs(colorPerson: string)   {
    let typePerson;
    const constleyend= "Tu persona es"
    if (colorPerson == "Rojo") {
      typePerson = "Pelirroja";
    } else if (colorPerson == "Amarillo") {
      typePerson = "Rubia";
    } else if (colorPerson == "Cafe") {
      typePerson = "Castaña";
    }
    console.log (`${constleyend} ${typePerson}`);
  }
  yourPersonIs("Rojo");
}

__init__();

