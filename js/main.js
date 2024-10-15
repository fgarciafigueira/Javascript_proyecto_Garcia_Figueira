const nombre= prompt('Ingrese su nombre')

console.log(nombre)

let paso=0

const historia=[]

historia.push(nombre)

while (paso<3){
    const inicioHistoria= prompt('Estas en tu casa viendo la TV. \N suena el telefono y lo levantas.\n Del otro lado te dicen que es una agencia especial y fuiste asignado para una misión, para ello tenes que estar en plaza constitución a las 3..\n ¿Qué vas a hacer? \n 1: Como no quedo claro el horario, vas a las 3 AM a la plaza. \n 2: Vas a las 3 PM, lo logico para encontrarse en esa plaza con alguien. \n 3: Decidis ignorar el mensaje')
    paso=1
    
    switch (parseInt(inicioHistoria)) {
        case 1:
            historia.push('Fuiste a las 3 AM al lugar y te rapto una camioneta')
            paso=2
            const rama1Historia= prompt('Te rapta una camioneta, pensando que eras "SU" persona y te llevan para robar un museo: \n 1: Te negas. \n 2: Pensas que esta es la mision y accedes. \n 3: Accedes pero con idea de traicionarlos y ser el heroe.')
        switch(parseInt(rama1Historia)){
            case 1:
                historia.push("no se dejan cabos sueltos. te mataron")
                paso=3
            break

            case 2:
                historia.push(" lograste el robo, saliste herido y ahora te busca toda la policia \n ¡Suerte en escapar!")
                paso=3
            break

            case 3:
                historia.push("Hiciste el acto del bien. Evitaste el robo y terminaste conociendo a la gente de la agencia. \n Pero sabes que de alguna forma una venganza vendra")
                paso=3
            break

            default:
                console.log("Opción inválida. ¡Inténtalo de nuevo!")
        }
        break

        case 2:
             historia.push('Te encontraste con los agentes especiales y te dieron la mision')
             paso=2
             const rama2Historia=prompt('Te encontraste con los agentes especiales, su mision es evitar el robo del museo y te dan 2 opciones: \n 1: Te infiltras y lo evitas desde adentro de la organizacion de forma silenciosa \n 2: te arman estilo Rambo y sos vos solo contra la organizacion')
        switch(parseInt(rama2Historia)){
            case 1:
                historia.push('te infiltraste bien y terminaste con toda la organizacion. Resulto que era algo mas grande de lo que pensabas y te estan buscando por traicion. ¡Cuidado!')
                paso=3
            break

            case 2:
                historia.push('Muchos videojuegos hicieron que elijas la opcion de Rambo armado hasta los dientes. ¡Bien Ahí! \nPero no son videojuegos y terminaste como queso Gruyere.')
                paso=3
            break

            default:
                alert('Queres traicionar a la agencia? No se puede eso....')
        }
        break

        case 3:
            historia.push('Te quedaste viendo Shrek 2 en tu casa y no te enteraste de nada')
            paso=3
            console.log(paso)
        break

        default:
            console.log("Opción inválida. ¡Inténtalo de nuevo!")
    }
}
console.log(historia.join(', '))