function __init__() {
  function yourPersonIs(colorPerson: string) {
    let typePerson;
    const constLeyend = "Tu persona es";
    switch (colorPerson) {
      case 'Rojo':
        typePerson = "Pelirroja";
        break;
      case 'Amarillo':
        typePerson = "Rubia";
        break;
      case 'Cafe':
        typePerson = "Castaña";
        break;
      default:
        console.log("Tu persona no existe");
        break;
    }
    console.log(`${constLeyend} ${typePerson}`);
  }
yourPersonIs("Amarillo");
}

__init__();
