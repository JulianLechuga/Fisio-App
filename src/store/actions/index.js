import axios from "axios";
export const FETCH_QUESTION = "FETCH_QUESTION";
export const FETCH_LIST = "FETCH_LIST";

let allQuestions = [
    {id: 1, title: "En el túbulo proximal renal la glucosa filtrada puede llegar a un Transporte Máximo de reabsorción, que corresponde a:", option1: " La concentración de glucosa que satura los co-transportadores que facilitan su reabsorción", option2: "La carga excretada de glucosa cuando supera el umbral en plasma y, por lo tanto, aparece en orina.", option3: "La máxima carga reabsorbida de glucosa en los túbulos proximales.", option4: " La concentración umbral de glucosa en plasma.", correct: "La máxima carga reabsorbida de glucosa en los túbulos proximales."},
    {id: 2, title: "Una persona sufre una hemorragia moderada y al momento de la consulta presenta una presión arterial de 70/45. (VR 130/80 mmHg) En esta situación ¿Qué ocurrirá con el balance entre la salida y el reingreso de fluido en un capilar sistémico?", option1: "No hay cambios en la filtración neta de fluido", option2: "Aumenta la reabsorción neta de fluido.", option3: "Aumenta la filtración neta de fluido.", option4: " Disminuye la reabsorción neta de fluido.", correct: "Aumenta la reabsorción neta de fluido."},
    {id: 3, title: "La droga llamada espironolactona BLOQUEA los receptores de ALDOSTERONA. Si hicieras un experimento con dicha droga, ¿qué alteración en los electrolitos plasmáticos sería la que con mayor probabilidad podrías encontrar?", option1: "Aumento del K+", option2: " Disminución del K+", option3: "Aumento del Na+", option4: "Disminución del Na+", correct: "Aumento del K+"},
    {id: 4, title: "¿Cuál de las siguientes afirmaciones es correcta con respecto al manejo renal de K+ ?", option1: "El K+ se filtra, se reabsorbe y se excreta, pero no se secreta a nivel de los túbulos renales.", option2: "La porción ascendente gruesa del asa de Henle reabsorbe alrededor del 20% del K+ filtrado", option3: "La Aldosterona estimula la reabsorción de K+ en el túbulo colector", option4: "La excreción fraccional de K+ es siempre menor al 1%.", correct:"La porción ascendente gruesa del asa de Henle reabsorbe alrededor del 20% del K+ filtrado"},
    {id: 5, title: "La enzima ciclooxigenasa plaquetaria se caracteriza por:", option1: "Ser inhibida por el ácido acetilsalicilico (aspirina).", option2: "Ser estimulada por el ácido acetilsalicilico (aspirina)", option3: "Activar a la fosfolipasa A2 para separar ácido araquidónico de la membrana", option4: "Convertir al ácido araquidónico en leucotrienos.", correct: "Ser inhibida por el ácido acetilsalicilico (aspirina)."},
    {id: 6, title: "Un paciente se presenta a la guardia con dolor precordial, y se le decide realizar un electrocardiograma. El mismo presenta supradesnivel del segmento ST en las derivaciones V5, V6, DI y aVL. ¿En qué cara del corazón se está produciendo el fenómeno patológico?:", option1: "Cara anterior", option2: "Cara septal", option3: "Cara inferior", option4: "Cara lateral", correct: "Cara lateral"},
    {id: 7, title: "Un paciente que respira aire ambiente a una presión de 1 atm presenta una paO2 de 55 mmHg y una paCO2 de 30 mmHg. ¿Qué concluye a partir de esta información?", option1: "El espacio muerto fisiológico está aumentado", option2: "El paciente presenta hipoxemia e hipoventilación.", option3: "El paciente presenta hipoxemia e hiperventilación.", option4: "El paciente presenta eupnea y normoventilación.", correct: "El paciente presenta hipoxemia e hiperventilación."},
    {id: 8, title: "Un escalador se encuentra en la cima del Monte Everest (a 8.848 metros sobre el nivel del mar, a una presión atmosférica de 250 mmHg). Está ventilando con un tubo de oxígeno con una presión parcial de oxígeno del 50%. ¿Cuál será la presión alveolar de oxígeno del escalador si su presión arterial de dióxido de carbono es de 28 mmHg? Nota: Para sus cálculos, suponga un ambiente atmosférico seco, un coeficiente respiratorio de R=0,8 y  considere despreciable el factor de corrección (F). ", option1: "24,5 mmHg", option2: "66,5 mmHg.", option3: "73,5 mmHg.", option4: "90 mmHg.", correct: "66,5 mmHg."},
    {id: 9, title: "¿Cómo influyen en el potencial de membrana las propiedades pasivas?", option1: "Determinan la electroneutralidad a ambos lados de la membrana.", option2: "Determinan la velocidad de propagación de los potenciales electrotónicos.", option3: " Determinan la frecuencia de los potenciales electrotónicos", option4: "Determinan el período refractario del potencial de acción.", correct: "Determinan la velocidad de propagación de los potenciales electrotónicos."},
    {id: 10, title: "¿Con qué función asocia estrechamente al paleocerebelo o espinocerebelo?", option1: "Con la planificación de movimientos complejos.", option2: "Con el control de los movimientos servo-asistidos.", option3: "Con la iniciación de la marcha.", option4: " Con el control de la percepción espacial.", correct: "Con el control de los movimientos servo-asistidos."},
]

export function get_Question(){
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    };
    let randomNumber = getRandomInt(1, 10);
    console.log(randomNumber)
    let randomQuestion = allQuestions.find(e => e.id === randomNumber)

    return {
        type: FETCH_QUESTION,
        payload: randomQuestion
    };
};

export function get_Question_List(search){
    return function (dispatch){
         axios (`/videogames?name=${search}`)
        .then(res => dispatch ({type: FETCH_LIST, payload: res.data}))
    };
};