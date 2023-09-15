/*Valor del estacionamiento.
En un estacionamiento tienen el costo por fracción o por hora dependiendo el dia.
Los Lunes, Martes y Miercoles cuesta $13.00 pesos.
Los Jueves y Viernes cuesta $15.00 pesos.
Los Sábados y Domingos cuestan $20.00.
Calcular el costo que el usuario debe pagar al estacionamiento.
Concideraciones.
• El formato de fecha debe ser HH:mm hrs
• Para el calculo, se debe saber el día, la hora de entrada y
la hora de salida.
Validaciónes.
• Si, la hora o el formato esta mal debe arrojarse un error.
• Validar que la hora de entrada sea menor que la hora de
salida.
• Que ingrese un dia valido.
• En caso de que las validaciones, no pasen arrojar el error.
“Solicitud no procesable, intente nuevamente.”*/
function valorEstacionamiento(horaEntrada: string, horaSalida: string, dia: string) {
    horaEntrada = horaEntrada.replace(/\s/g, "")
    let horaEntrada2: number = parseInt(horaEntrada);
    horaSalida = horaSalida.replace(/\s/g, "")
    let horaSalida2: number = parseInt(horaSalida);
    const Lunes = 13.00 
    const Martes = 13.00
    const Miercoles = 13.00
    const Jueves = 15.00
    const Viernes = 15.00
    const Sabado = 20.00
    const Domingo = 20.00
    let horas;
    let pago;
    if (horaEntrada >= "00:00" && horaEntrada <= "24:00" && horaSalida >= "00:00" && horaSalida <= "24:00") {
        if (horaEntrada2 < horaSalida2) {
            switch (dia) {
                case ("Lunes"): {
                    horas = horaSalida2 - horaEntrada2
                    pago = horas * Lunes
                    console.log(`Usted entro a las ${horaEntrada} hrs y salio a las ${horaSalida} hrs, lleva ${horas} hrs debe pagar $ ${pago} pesos`)
                    break;
                }
                case ("Martes"): {
                    horas = horaSalida2 - horaEntrada2
                    pago = horas * Martes
                    console.log(`Usted entro a las ${horaEntrada} hrs y salio a las ${horaSalida} hrs, lleva ${horas} hrs debe pagar $ ${pago} pesos`)
                    break;
                }
                case ("Miercoles"): {
                    horas = horaSalida2 - horaEntrada2
                    pago = horas * Miercoles
                    console.log(`Usted entro a las ${horaEntrada} hrs y salio a las ${horaSalida} hrs, lleva ${horas} hrs debe pagar $ ${pago} pesos`)
                    break;
                }
                case ("Jueves"): {
                    horas = horaSalida2 - horaEntrada2
                    pago = horas * Jueves
                    console.log(`Usted entro a las ${horaEntrada} hrs y salio a las ${horaSalida} hrs, lleva ${horas} hrs debe pagar $ ${pago} pesos`)
                    break;
                }
                case ("Viernes"): {
                    horas = horaSalida2 - horaEntrada2
                    pago = horas * Viernes
                    console.log(`Usted entro a las ${horaEntrada} hrs y salio a las ${horaSalida} hrs, lleva ${horas} hrs debe pagar $ ${pago} pesos`)
                    break;
                }
                case ("Sabado"): {
                    horas = horaSalida2 - horaEntrada2
                    pago = horas * Sabado
                    console.log(`Usted entro a las ${horaEntrada} hrs y salio a las ${horaSalida} hrs, lleva ${horas} hrs debe pagar $ ${pago} pesos`)
                    break;
                }
                case ("Domingo"): {
                    horas = horaSalida2 - horaEntrada2
                    pago = horas * Domingo
                    console.log(`Usted entro a las ${horaEntrada} hrs y salio a las ${horaSalida} hrs, lleva ${horas} hrs debe pagar $ ${pago} pesos`)
                    break;
                }
                default: {
                    console.log("El día ingresado no es valido, Favor de intentar con un día valido")
                }
            }
        } else
            console.log("La hora de entrada no coincide con la hora de salida");
    } else 
    console.log ("Solicitud no procesable, intente nuevamente.")
}
valorEstacionamiento("18:00", "24:00", "Domingo");