import axios from "axios";
export const FETCH_QUESTION = "FETCH_QUESTION";
export const FETCH_LIST = "FETCH_LIST";

let fisioQuestions = [
  {
    id: 1,
    title:
      "En el túbulo proximal renal la glucosa filtrada puede llegar a un Transporte Máximo de reabsorción, que corresponde a:",
    option1:
      " La concentración de glucosa que satura los co-transportadores que facilitan su reabsorción",
    option2:
      "La carga excretada de glucosa cuando supera el umbral en plasma y, por lo tanto, aparece en orina.",
    option3:
      "La máxima carga reabsorbida de glucosa en los túbulos proximales.",
    option4: " La concentración umbral de glucosa en plasma.",
    correct:
      "La máxima carga reabsorbida de glucosa en los túbulos proximales.",
  },
  {
    id: 2,
    title:
      "Una persona sufre una hemorragia moderada y al momento de la consulta presenta una presión arterial de 70/45. (VR 130/80 mmHg) En esta situación ¿Qué ocurrirá con el balance entre la salida y el reingreso de fluido en un capilar sistémico?",
    option1: "No hay cambios en la filtración neta de fluido",
    option2: "Aumenta la reabsorción neta de fluido.",
    option3: "Aumenta la filtración neta de fluido.",
    option4: " Disminuye la reabsorción neta de fluido.",
    correct: "Aumenta la reabsorción neta de fluido.",
  },
  {
    id: 3,
    title:
      "La droga llamada espironolactona BLOQUEA los receptores de ALDOSTERONA. Si hicieras un experimento con dicha droga, ¿qué alteración en los electrolitos plasmáticos sería la que con mayor probabilidad podrías encontrar?",
    option1: "Aumento del K+",
    option2: " Disminución del K+",
    option3: "Aumento del Na+",
    option4: "Disminución del Na+",
    correct: "Aumento del K+",
  },
  {
    id: 4,
    title:
      "¿Cuál de las siguientes afirmaciones es correcta con respecto al manejo renal de K+ ?",
    option1:
      "El K+ se filtra, se reabsorbe y se excreta, pero no se secreta a nivel de los túbulos renales.",
    option2:
      "La porción ascendente gruesa del asa de Henle reabsorbe alrededor del 20% del K+ filtrado",
    option3:
      "La Aldosterona estimula la reabsorción de K+ en el túbulo colector",
    option4: "La excreción fraccional de K+ es siempre menor al 1%.",
    correct:
      "La porción ascendente gruesa del asa de Henle reabsorbe alrededor del 20% del K+ filtrado",
  },
  {
    id: 5,
    title: "La enzima ciclooxigenasa plaquetaria se caracteriza por:",
    option1: "Ser inhibida por el ácido acetilsalicilico (aspirina).",
    option2: "Ser estimulada por el ácido acetilsalicilico (aspirina)",
    option3:
      "Activar a la fosfolipasa A2 para separar ácido araquidónico de la membrana",
    option4: "Convertir al ácido araquidónico en leucotrienos.",
    correct: "Ser inhibida por el ácido acetilsalicilico (aspirina).",
  },
  {
    id: 6,
    title:
      "Un paciente se presenta a la guardia con dolor precordial, y se le decide realizar un electrocardiograma. El mismo presenta supradesnivel del segmento ST en las derivaciones V5, V6, DI y aVL. ¿En qué cara del corazón se está produciendo el fenómeno patológico?:",
    option1: "Cara anterior",
    option2: "Cara septal",
    option3: "Cara inferior",
    option4: "Cara lateral",
    correct: "Cara lateral",
  },
  {
    id: 7,
    title:
      "Un paciente que respira aire ambiente a una presión de 1 atm presenta una paO2 de 55 mmHg y una paCO2 de 30 mmHg. ¿Qué concluye a partir de esta información?",
    option1: "El espacio muerto fisiológico está aumentado",
    option2: "El paciente presenta hipoxemia e hipoventilación.",
    option3: "El paciente presenta hipoxemia e hiperventilación.",
    option4: "El paciente presenta eupnea y normoventilación.",
    correct: "El paciente presenta hipoxemia e hiperventilación.",
  },
  {
    id: 8,
    title:
      "Un escalador se encuentra en la cima del Monte Everest (a 8.848 metros sobre el nivel del mar, a una presión atmosférica de 250 mmHg). Está ventilando con un tubo de oxígeno con una presión parcial de oxígeno del 50%. ¿Cuál será la presión alveolar de oxígeno del escalador si su presión arterial de dióxido de carbono es de 28 mmHg? Nota: Para sus cálculos, suponga un ambiente atmosférico seco, un coeficiente respiratorio de R=0,8 y  considere despreciable el factor de corrección (F). ",
    option1: "24,5 mmHg",
    option2: "66,5 mmHg.",
    option3: "73,5 mmHg.",
    option4: "90 mmHg.",
    correct: "66,5 mmHg.",
  },
  {
    id: 9,
    title:
      "¿Cómo influyen en el potencial de membrana las propiedades pasivas?",
    option1: "Determinan la electroneutralidad a ambos lados de la membrana.",
    option2:
      "Determinan la velocidad de propagación de los potenciales electrotónicos.",
    option3: " Determinan la frecuencia de los potenciales electrotónicos",
    option4: "Determinan el período refractario del potencial de acción.",
    correct:
      "Determinan la velocidad de propagación de los potenciales electrotónicos.",
  },
  {
    id: 10,
    title:
      "¿Con qué función asocia estrechamente al paleocerebelo o espinocerebelo?",
    option1: "Con la planificación de movimientos complejos.",
    option2: "Con el control de los movimientos servo-asistidos.",
    option3: "Con la iniciación de la marcha.",
    option4: " Con el control de la percepción espacial.",
    correct: "Con el control de los movimientos servo-asistidos.",
  },
  {
    id: 11,
    title: "¿Y la 11?",
    option1: "a",
    option2: "a",
    option3: "a",
    option4: "a",
    correct: "a",
  },
  {
    id: 12,
    title:
      "¿Cómo espera encontrar los niveles séricos de 1-25-dihidroxi-Vitamina D3 y parathormona (PTH) en un paciente con insuficiencia renal crónica severa (falta de función renal) y por qué?",
    option1:
      " La 1-25-Dihidroxi-Vitamina D3 estará disminuida por falta de acción de la 25-α-hidroxilasa renal, con el consiguiente aumento de la PTH.",
    option2:
      "La 1-25-Dihidroxi-Vitamina D3 estará disminuida por falta de acción de la 1-α-hidroxilasa renal, con el consiguiente aumento de la PTH.",
    option3:
      " La 1-25-Dihidroxi-Vitamina D3 estará disminuida por falta de acción de la 1-α-hidroxilasa renal, con el consiguiente descenso de la PTH.",
    option4:
      "La 1-25-hidroxi-Vitamina D3 estará disminuida por falta de acción de la 25-α-hidroxilasa renal, con el consiguiente descenso de la PTH",
    correct:
      "La 1-25-Dihidroxi-Vitamina D3 estará disminuida por falta de acción de la 1-α-hidroxilasa renal, con el consiguiente aumento de la PTH.",
  },
  {
    id: 13,
    title: "¿Cuáles son las acciones generales de la hormona de crecimiento?",
    option1:
      " Hiperglucemiante lento, anabólico proteico, disminuye la lipólisis, disminuye la captación de glucosa por los tejidos, aumenta el crecimiento linea",
    option2:
      " Hiperglucemiante lento, anabólico proteico, disminuye la lipólisis, disminuye la captación de glucosa por los tejidos, aumenta el crecimiento linea",
    option3:
      "Hiperglucemiante rápido, anabólico proteico, aumenta la lipólisis, disminuye la captación de glucosa por los tejidos, aumenta el crecimiento lineal.",
    option4:
      "Hiperglucemiante lento, catabólico proteico, aumenta la lipólisis, disminuye la captación de glucosa por los tejidos y aumenta el crecimiento lineal.",
    correct:
      " Hiperglucemiante lento, anabólico proteico, disminuye la lipólisis, disminuye la captación de glucosa por los tejidos, aumenta el crecimiento linea",
  },
  {
    id: 14,
    title:
      "Hiperglucemiante lento, catabólico proteico, aumenta la lipólisis, disminuye la captación de glucosa porlos tejidos y aumenta el crecimiento lineal.",
    option1:
      "Se realiza en dos fases: la 1era fase rápida, 2da fase tardía, ambas con insulina de Novo únicamente.",
    option2:
      "Se realiza en dos fases: la 1era fase rápida, 2da fase tardía, con insulina preformada y de Novo respectivamente",
    option3:
      "Se realiza en dos fases: la 1era fase rápida, 2da fase tardía, con insulina preformada y de Novo respectivamente",
    option4:
      " Se realiza en dos fases: la 1era fase rápida, 2da fase tardía, con insulina de Novo y preformada respectivamente",
    correct:
      "Se realiza en dos fases: la 1era fase rápida, 2da fase tardía, con insulina preformada y de Novo respectivamente",
  },
  {
    id: 15,
    title:
      "Una paciente pediátrica de 4 años, oriunda de Jujuy, es presentada por sus padres, quienes están preocupados porque la ven muy tranquila. Ud. reliza un estudio del eje tiroideo, que indica T4 baja, TSH elevada. ¿Cuál es el diagnóstico más probable y cuáles son los problemas a largo plazo que puede presentar la niña si no se trata adecuadamente?",
    option1:
      "Hipertiroidismo secundario. Alteración del crecimiento óseo y déficit cognitivo.",
    option2:
      "Hipotiroidismo primario por déficit de iodo. Alteración del crecimiento óseo y déficit cognitivo",
    option3:
      "Hipotiroidismo primario por déficit de iodo. Alteración del crecimiento óseo y déficit cognitivo",
    option4:
      "Hipertiroidismo primario por hiperactivación del receptor de TSH. Déficit cognitivo y diarrea crónica",
    correct:
      "Hipotiroidismo primario por déficit de iodo. Alteración del crecimiento óseo y déficit cognitivo",
  },
  {
    id: 16,
    title:
      "El desencadenamiento del parto implica la intervención de factores neuroendócrinos, hormonales y mecánicos, ¿cuál de los siguientes cree que Ud. que es el más trascendente para dicho evento? ",
    option1:
      " Distensión del cuello uterino, aumento de oxitocina y prostaglandinas",
    option2:
      "Distensión del cuello uterino, aumento del estriol y up-regulación de receptores de prostaglandinas",
    option3:
      "Aumento de los niveles de oxitocina e inhibición de la producción de prostaglandinas",
    option4:
      "Disminución de la relación entre estrógenos y progesterona circulantes.",
    correct:
      " Distensión del cuello uterino, aumento de oxitocina y prostaglandinas",
  },
  {
    id: 17,
    title:
      "A un paciente que se encuentra en tratamiento crónico con glucocorticoides por un cuadro de artritis reumatoidea, se le hace un laboratorio completo de rutina donde se observa un recuento de glóbulos blancos elevado (18500/mm3). Según sus conocimientos de fisiología indique en la fórmula leucocitaria relativa: ¿cuál de los siguientes leucocitos se encuentran elevados?",
    option1: "Eosinófilos",
    option2: "Linfocitos",
    option3: "Basófilos",
    option4: "Neutrófilos",
    correct: "Neutrófilos",
  },
  {
    id: 18,
    title:
      "En relación con el desencadenamiento del parto, existen múltiples mecanismos responsables del mismo.  ¿Qué mecanismo adquiere fundamental importancia para desencadenar el parto?",
    option1: "Aumento del tono en el cuello uterino",
    option2: " Descenso de los niveles de oxitocina",
    option3: "Descenso en los niveles de prostaglandinas",
    option4: "Aumento de la relación estrógenos/progesterona",
    correct: "Aumento de la relación estrógenos/progesterona",
  },
  {
    id: 19,
    title: "La concentración de la bilis en la vesícula biliar:",
    option1:
      "Está determinada por la reabsorción isotónica de bicarbonato de sodio y secreción de protones en la bilis",
    option2: "Es facilitada por la relajación del esfínter de Oddi",
    option3:
      "Está determinada por la reabsorción isotónica de cloruro de sodio",
    option4: "Genera una bilis alcalina que sirve para evitar la litiasis.",
    correct:
      "Está determinada por la reabsorción isotónica de cloruro de sodio",
  },
  {
    id: 20,
    title:
      "El mecanismo de transporte de la secreción ácida gástrica involucra a:",
    option1:
      "Una bomba protón/potasio, un canal de potasio y otro de fosfato en la membrana apical",
    option2:
      "Una bomba protón/potasio, un canal de potasio y otro de cloro en la membrana apical.",
    option3:
      "Un intercambiador sodio/protón, un canal de potasio y otro de cloro en la membrana apical.",
    option4:
      "Una bomba de protones, un canal de potasio y otro de cloro en la membrana apical.",
    correct:
      "Una bomba protón/potasio, un canal de potasio y otro de cloro en la membrana apical.",
  },
  {
    id: 21,
    title:
      "Cómo se distribuye espacialmente la codificación y representación de las diferentes frecuencias en el sistema auditivo?",
    option1: "De manera aleatoria en la cóclea.",
    option2:
      "De manera aleatoria tanto en la cóclea como en la corteza auditiva.",
    option3: "De manera aleatoria en la corteza auditiva",
    option4:
      "De manera ordenada tanto en la cóclea como en la corteza auditiva",
    correct:
      "De manera ordenada tanto en la cóclea como en la corteza auditiva",
  },
  {
    id: 22,
    title:
      "¿En qué estadio del sueño se encontrará mayor porcentaje de ondas delta (0.5-2Hz), asociadas al sueño profundo?",
    option1: "En el estadio II",
    option2: "En el estadio III",
    option3: "En el estadio IV",
    option4: "Durante el sueño REM",
    correct: "En el estadio IV",
  },
  {
    id: 23,
    title:
      "La Miastenia Gravis es una enfermedad autoinmune en la cual se generan anticuerpos contra el receptor de acetilcolina de tipo nicotínico. ¿Cuáles serán las sinapsis afectadas que llevarán a la aparición de debilidad muscular característica de la enfermedad?",
    option1:
      "Las sinapsis de las neuronas del locus coeruleus sobre la corteza cerebral",
    option2: "Las sinapsis postganglionares del sistema autonómico",
    option3: " Las placas neuromusculares.",
    option4: "Las sinapsis colinérgicas que inervan la médula adrenal.",
    correct: "Las placas neuromusculares.",
  },
  {
    id: 24,
    title:
      "Una persona presenta un volumen corriente de 500 ml y una frecuencia respiratoria de 18 rpm (momento 1). Luego, esa misma persona modifica su ritmo ventilatorio voluntariamente, alcanzando un volumen corriente de 250 ml y una frecuencia respiratoria de 36 rpm (momento 2). ¿En qué momento presenta mayor ventilación alveolar?",
    option1: "Se necesitan más datos para responder.",
    option2: "Es igual en ambos momentos.",
    option3: "En el momento 2",
    option4: "En el momento 1",
    correct: "En el momento 1",
  },
  {
    id: 25,
    title:
      "En la ecuación del gas alveolar PAO = PIO - PaCO /R, a la PAO se le resta un término que depende de la PaCO porque la presión alveolar de oxígeno resulta del balance entre el ingreso de oxígeno dado por la presión inspirada de oxígeno y:",
    option1:
      "el intercambio de oxígeno con dióxido de carbono, dada por la PACO dividida por la resistencia del alvéolo.",
    option2:
      " la degradación de oxígeno mediada por dióxido de carbono, dada por la PACO dividida por la resistencia del alvéolo",
    option3:
      "la degradación de oxígeno mediada por dióxido de carbono, dada por la PACO dividida por el coeficiente respiratorio",
    option4:
      "el intercambio de oxígeno con dióxido de carbono, dado por la PACO dividida por el coeficiente respiratorio",
    correct:
      "el intercambio de oxígeno con dióxido de carbono, dado por la PACO dividida por el coeficiente respiratorio",
  },
  {
    id: 26,
    title:
      "Recibe a un paciente por sobredosis de drogas. Solicita un estado ácido base de sangre arterial que le devuelve los siguientes valores: pH:7,20; PaCO2:70mmHg; HCO3:26 mEq/L; PaO2:63mmHg. En base a esto usted interpreta que el paciente presenta:",
    option1:
      "Hipoxemia con acidosis respiratoria donde el riñón ya ha compensado (o iniciado) a compensar la alteración",
    option2: "Hipoxemia con acidosis metabólica",
    option3: " Hipoxemia sin alteraciones del estado ácido base",
    option4:
      "Hipoxemia con acidosis respiratoria donde aún no ha empezado a compensar el riñón",
    correct:
      "Hipoxemia con acidosis respiratoria donde aún no ha empezado a compensar el riñón",
  },
  {
    id: 27,
    title:
      "Las hormonas esteroideas necesitan para su biosíntesis de la acción de distintas hidroxilasas. Ante una eficiencia de la enzima 17-hidroxilasa, ¿cómo espera encontrar los niveles de aldosterona, cortisol y ciencia de la enzima 17-hidroxilasa, ¿cómo espera encontrar los niveles de aldosterona, cortisol y DHEAS?",
    option1: "Aldosterona normal o alta, con cortisol y DHEAS disminuidos.",
    option2: "Aldosterona y cortisol normales con DHEAS disminuida",
    option3: "Aldosterona y cortisol disminuidos con DHEAS elevada",
    option4: "Aldosterona, cortisol y DHEAS disminuidas.",
    correct: " Aldosterona normal o alta, con cortisol y DHEAS disminuidos.",
  },
  {
    id: 28,
    title:
      "¿Qué signo espera encontrar con mayor probabilidad luego de una lesión en la corteza orbitofrontal?",
    option1: "Pérdida del control inhibitorio",
    option2: "Pérdida de la planificación",
    option3: "Alteración en la atención",
    option4: " Alteración de la memoria de trabajo",
    correct: "Pérdida del control inhibitorio",
  },
  {
    id: 29,
    title:
      "El camino desde el lumen intestinal a la sangre venosa sistémica para los ácidos grasos de cadena larga El camino desde el lumen intestinal a la sangre venosa sistémica para los ácidos grasos de cadena larga (>10 átomos de Carbono) es: (>10 átomos de Carbono) es:",
    option1: " enterocito – vena porta hepática – sangre",
    option2: "enterocito – quilomicrón - linfático – sangre",
    option3: "espacio entre los enterocitos – conducto linfático – sangre",
    option4: "espacio entre los enterocitos – quilomicrón – linfático – sangre",
    correct: "enterocito – quilomicrón - linfático – sangre",
  },
  {
    id: 30,
    title:
      "Lo consultan los padres de un paciente en quien sospecha una de Lo consultan los padres de un paciente en quien sospecha una deficiencia de hormona de crecimiento. ciencia de hormona de crecimiento. ¿Qué prueba dinámica le solicitaría y cómo espera hallar los resultados para confirmar su sospecha? rmar su sospecha?",
    option1:
      "Prueba de tolerancia oral a la glucosa: esperaría que la IGF-1 no aumente como ocurre en condiciones fisiológicasa",
    option2:
      "Prueba de hipoglucemia insulínica: esperaría que la IGF-1 no aumente como ocurre en condiciones fisiológicas",
    option3:
      "Prueba de tolerancia oral a la glucosa: esperaría que la GH no aumente como ocurre en condiciones fisiológicas.",
    option4:
      " Prueba de hipoglucemia insulínica: esperaría que la GH no aumente como ocurre en condiciones fisiológicas.",
    correct:
      " Prueba de hipoglucemia insulínica: esperaría que la GH no aumente como ocurre en condiciones fisiológicas",
  },
  {
    id: 31,
    title:
      "¿Qué tratamiento es el más adecuado ante la presencia de un accidente cerebrovascular hemorrágico? ¿Qué tratamiento es el más adecuado ante la presencia de un accidente cerebrovascular hemorrágico?",
    option1:
      "La administración de un fármaco con actividad anti-agregante plaquetaria",
    option2: "La administración de anticoagulantes orales",
    option3: "La intervención quirúrgica, en caso que sea posible",
    option4: "La administración de factor activador del plasminógeno",
    correct: "La intervención quirúrgica, en caso que sea posible",
  },
  {
    id: 32,
    title:
      "Ante un paciente con insuficiencia suprarrenal primaria (por compromiso autoinmune las glándulas adrenales) cómo espera encontrar los niveles circulantes de cortisol, aldosterona y ACTH. En qué momento del día muestra de sangre para medir estas hormonas:",
    option1: "Cortisol y aldosterona bajos con ACTH elevada – dosaje 8hs.",
    option2: "Cortisol bajo y aldosterona normal con ACTH elevada – dosaje 8hs",
    option3: "Cortisol, aldosterona y ACTH bajos – dosaje 23hs",
    option4: "Cortisol, aldosterona y ACTH bajos – dosaje 8hs",
    correct: "Cortisol y aldosterona bajos con ACTH elevada – dosaje 8hs.",
  },
  {
    id: 33,
    title:
      "En una polisomnografía, ¿qué registros ayudan a identificar los estadios 3 y 4 del sueño lento?",
    option1:
      "Ondas de aproximadamente 13-35 Hertz (beta), hipotonía y bradicardia",
    option2:
      "Ondas de aproximadamente 1-4 Hertz (delta), atonía y taquicardia.",
    option3: "Husos del sueño y complejos k, hipotonía y bradicardia",
    option4:
      "Ondas de aproximadamente 1-4 Hertz (delta), hipotonía y bradicardia",
    correct:
      ". Ondas de aproximadamente 1-4 Hertz (delta), hipotonía y bradicardia",
  },
  {
    id: 34,
    title:
      "¿Qué rol tiene la colecistoquinina (CCK) en la formación del jugo pancreático?",
    option1:
      "Estimula a los acinos pancreáticos en la secreción de bicarbonato",
    option2: "Estimula a los acinos pancreáticos en la producción de zimógeno",
    option3:
      "Estimula las células del conducto pancreático en la secreción de la bilis.",
    option4: "Estimula a los acinos pancreáticos en la producción de zimógeno",
    correct: "Estimula a los acinos pancreáticos en la producción de zimógeno",
  },
  {
    id: 35,
    title:
      "¿Qué cambios esperaría encontrar en un grupo de neuronas o tejido efector que es privado de su inervación aferente? inervación aferente?",
    option1:
      ". El desarrollo de un fenómeno hipertrófico incontrolado independientemente del neurotransmisor involucrado",
    option2:
      "Un aumento de la sensibilidad para las acciones del neurotransmisor de los aferentes destruidos.",
    option3:
      "Disminución del neurotransmisor involucrado en la brecha sináptica por aumento de la recaptación.",
    option4:
      ". Una disminución de la densidad de receptores postsinápticos para el neurotransmisor contenido en los aferentes destruidos.",
    correct:
      "Un aumento de la sensibilidad para las acciones del neurotransmisor de los aferentes destruidos.",
  },
  {
    id: 36,
    title:
      "La célula parietal gástrica secreta ácido clorhídrico. ¿Cuáles son los estímulos más importantes para la La célula parietal gástrica secreta ácido clorhídrico. ¿Cuáles son los estímulos más importantes para la actividad secretora de HCl en dicha célula? actividad secretora de HCl en dicha célula?",
    option1: "Gastrina, Secretina, Histamina",
    option2: "Motilina, Gastrina, Histamina",
    option3: "Gastrina, Histamina y Acetilcolina",
    option4: ". Gastrina, Secretina y CCK",
    correct: "Gastrina, Histamina y Acetilcolina",
  },
  {
    id: 37,
    title:
      "El cortisol interviene en el metabolismo fosfocálcico a través de su acción sobre el riñón y sobre el intestino delgado. ¿Cuál es el efecto del cortisol sobre estos órganos? intestino delgado. ¿Cuál es el efecto del cortisol sobre estos órganos?",
    option1:
      "Aumenta la absorción intestinal de Ca2+ y reduce la reabsorción renal del mismo.",
    option2:
      "Reduce la absorción intestinal de Ca2+ y aumenta la reabsorción renal del mismo",
    option3:
      "Aumenta indirectamente la absorción intestinal de Ca2+ y la reabsorción renal del mismo",
    option4:
      "Reduce la absorción intestinal de Ca2+ y la reabsorción renal del mismo.",
    correct:
      "Reduce la absorción intestinal de Ca2+ y la reabsorción renal del mismo.",
  },
  {
    id: 38,
    title:
      "Ante un paciente en quien sospecha una deficiencia de hormona de crecimiento: ¿Qué pruebas ciencia de hormona de crecimiento:",
    option1:
      "Prueba de tolerancia oral a la glucosa, Prueba con aminoácido arginina, Prueba con ejercicio físico.",
    option2:
      "Prueba de tolerancia oral a la glucosa, Prueba con GHRH, Prueba con Dexametasona.",
    option3:
      " Prueba de hipoglucemia insulínica, Prueba con GHRH, Prueba con Dexametasona.",
    option4:
      " Prueba de hipoglucemia insulínica, Prueba con aminoácido arginina, Prueba con ejercicio físico.",
    correct:
      "Prueba de hipoglucemia insulínica, Prueba con aminoácido arginina, Prueba con ejercicio físico.",
  },
  {
    id: 39,
    title:
      "¿Qué efecto tendrá a corto plazo la restricción de oxígeno y glucosa sobre una neurona?",
    option1:
      "Despolarización con aumento de la concentración intracelular de sodio.",
    option2:
      "Despolarización con aumento de la concentración extracelular de sodio.",
    option3:
      "No habrá cambios en el potencial de membrana de la neurona dado que los gradientes electroquímicos se disipan por falta de acción de la bomba Na/K ATPasa",
    option4:
      "Despolarización con aumento de la concentración intracelular de potasio",
    correct:
      "Despolarización con aumento de la concentración intracelular de sodio.",
  },
  {
    id: 40,
    title:
      "¿Cuál es la principal función de las células ciliadas externas de la cóclea? ¿Cuál es la principal función de las células ciliadas externas de la cóclea?",
    option1:
      "Transmitir información auditiva a la corteza vía el nervio auditivo.",
    option2:
      "Transmitir información auditiva a la oliva superior vía el nervio auditivo",
    option3:
      "Aumentar la frecuencia de descarga de las células ciliadas internas",
    option4: "Amplificar las oscilaciones producidas por la onda sonora.",
    correct: "Amplificar las oscilaciones producidas por la onda sonora.",
  },
];

let microQuestions = [
  {
    id: 1,
    title: "¿Qué forma tiene la bacteria Escherichia coli?",
    option1: "Cocos",
    option2: "Bacilos",
    option3: "Espirilos",
    option4: "Vibriones",
    correct: "Bacilos",
  },
  {
    id: 2,
    title:
      "¿Qué tinte se utiliza en la tinción de Gram para teñir las bacterias Gram positivas?",
    option1: "Safranina",
    option2: "Cristal violeta",
    option3: "Azul de metileno",
    option4: "Fucsina básica",
    correct: "Cristal violeta",
  },
  {
    id: 3,
    title: "¿Cuál de los siguientes microorganismos es un virus?",
    option1: "Staphylococcus aureus",
    option2: "Candida albicans",
    option3: "Influenza A",
    option4: "Mycobacterium tuberculosis",
    correct: "Influenza A",
  },
  {
    id: 4,
    title:
      "¿Qué estructura de la célula bacteriana es responsable de su movilidad?",
    option1: "Cápsula",
    option2: "Pared celular",
    option3: "Flagelo",
    option4: "Fimbrias",
    correct: "Flagelo",
  },
  {
    id: 5,
    title: "¿Cuál es el objetivo principal de la tinción de Gram?",
    option1: "Identificar la forma de la bacteria",
    option2: "Determinar la presencia de esporas",
    option3: "Diferenciar bacterias Gram positivas y Gram negativas",
    option4: "Detectar la presencia de cápsulas",
    correct: "Diferenciar bacterias Gram positivas y Gram negativas",
  },
  {
    id: 6,
    title:
      "¿Cuál es el principal mecanismo de acción de los antibióticos betalactámicos?",
    option1: "Inhibición de la síntesis de proteínas",
    option2: "Inhibición de la síntesis de ácidos nucleicos",
    option3: "Inhibición de la síntesis de la pared celular",
    option4: "Inhibición de la síntesis de folato",
    correct: "Inhibición de la síntesis de la pared celular",
  },
  {
    id: 7,
    title:
      "¿Qué estructura de la célula bacteriana es afectada por los antibióticos aminoglucósidos?",
    option1: "Membrana plasmática",
    option2: "Ribosomas",
    option3: "Pared celular",
    option4: "ADN",
    correct: "Ribosomas",
  },
  {
    id: 8,
    title:
      "¿Cuál es la principal característica de las bacterias Gram negativas?",
    option1: "Poseen una pared celular gruesa de peptidoglicano",
    option2: "Carecen de membrana plasmática",
    option3: "Tienen una membrana externa rica en lipopolisacáridos",
    option4: "Forman esporas",
    correct: "Tienen una membrana externa rica en lipopolisacáridos",
  },
  {
    id: 9,
    title: "¿Qué microorganismo es conocido por causar la tuberculosis?",
    option1: "Staphylococcus aureus",
    option2: "Mycobacterium tuberculosis",
    option3: "Escherichia coli",
    option4: "Salmonella typhi",
    correct: "Mycobacterium tuberculosis",
  },
  {
    id: 10,
    title:
      "¿Cuál es el mecanismo de resistencia bacteriana mediado por la producción de betalactamasas?",
    option1: "Modificación del sitio diana del antibiótico",
    option2: "Eflujo del antibiótico fuera de la célula",
    option3: "Inactivación enzimática del antibiótico",
    option4: "Alteración de la permeabilidad de la membrana",
    correct: "Inactivación enzimática del antibiótico",
  },
  {
    id: 11,
    title:
      "¿Qué tipo de hemólisis es producida por Streptococcus pyogenes en agar sangre?",
    option1: "Hemólisis alfa",
    option2: "Hemólisis beta",
    option3: "Hemólisis gamma",
    option4: "No produce hemólisis",
    correct: "Hemólisis beta",
  },
  {
    id: 12,
    title:
      "¿Cuál es la principal característica de las bacterias anaerobias estrictas?",
    option1: "Requieren oxígeno para su crecimiento",
    option2: "Crecen mejor en presencia de dióxido de carbono",
    option3: "No pueden crecer en presencia de oxígeno",
    option4: "Toleran bajas concentraciones de oxígeno",
    correct: "No pueden crecer en presencia de oxígeno",
  },
  {
    id: 13,
    title:
      "¿Qué componente de la pared celular bacteriana es específico de las bacterias Gram positivas?",
    option1: "Lipopolisacáridos",
    option2: "Ácido teicoico",
    option3: "Peptidoglicano",
    option4: "Ácido micólico",
    correct: "Ácido teicoico",
  },
  {
    id: 14,
    title:
      "¿Qué mecanismo de transferencia genética en bacterias implica el uso de un bacteriófago?",
    option1: "Transformación",
    option2: "Conjugación",
    option3: "Transducción",
    option4: "Mutación",
    correct: "Transducción",
  },
  {
    id: 15,
    title:
      "¿Cuál de los siguientes microorganismos es conocido por formar endosporas?",
    option1: "Neisseria gonorrhoeae",
    option2: "Clostridium botulinum",
    option3: "Helicobacter pylori",
    option4: "Treponema pallidum",
    correct: "Clostridium botulinum",
  },
  {
    id: 16,
    title:
      "¿Qué técnica se utiliza para amplificar fragmentos específicos de ADN?",
    option1: "Electroforesis en gel",
    option2: "Tinción de Gram",
    option3: "Reacción en cadena de la polimerasa (PCR)",
    option4: "Secuenciación de ADN",
    correct: "Reacción en cadena de la polimerasa (PCR)",
  },
  {
    id: 17,
    title: "¿Cuál de los siguientes es un hongo patógeno?",
    option1: "Escherichia coli",
    option2: "Staphylococcus aureus",
    option3: "Candida albicans",
    option4: "Pseudomonas aeruginosa",
    correct: "Candida albicans",
  },
  {
    id: 18,
    title: "¿Qué bacteria es conocida por su resistencia a la meticilina?",
    option1: "Escherichia coli",
    option2: "Staphylococcus aureus",
    option3: "Streptococcus pneumoniae",
    option4: "Clostridium difficile",
    correct: "Staphylococcus aureus",
  },
  {
    id: 19,
    title:
      "¿Qué característica distingue a las bacterias ácido-alcohol resistentes?",
    option1: "Su capacidad para formar esporas",
    option2: "Su resistencia a desinfectantes comunes",
    option3: "La presencia de ácidos micólicos en su pared celular",
    option4: "La producción de exotoxinas",
    correct: "La presencia de ácidos micólicos en su pared celular",
  },
  {
    id: 20,
    title: "¿Cuál es el principal reservorio del virus de la hepatitis B?",
    option1: "Agua contaminada",
    option2: "Alimentos contaminados",
    option3: "Sangre y fluidos corporales",
    option4: "Aire contaminado",
    correct: "Sangre y fluidos corporales",
  },
  {
    id: 21,
    title: "¿Qué estructura de la bacteria es esencial para la conjugación?",
    option1: "Flagelo",
    option2: "Pili",
    option3: "Cápsula",
    option4: "Esporas",
    correct: "Pili",
  },
  {
    id: 22,
    title:
      "¿Qué tipo de bacteria crece en un ambiente con una alta concentración de sal?",
    option1: "Termófila",
    option2: "Halófila",
    option3: "Acidófila",
    option4: "Mesófila",
    correct: "Halófila",
  },
  {
    id: 23,
    title:
      "¿Qué bacteria es conocida por causar infecciones nosocomiales severas?",
    option1: "Streptococcus pyogenes",
    option2: "Pseudomonas aeruginosa",
    option3: "Helicobacter pylori",
    option4: "Listeria monocytogenes",
    correct: "Pseudomonas aeruginosa",
  },
  {
    id: 24,
    title:
      "¿Qué prueba se utiliza para identificar la presencia de Mycobacterium tuberculosis?",
    option1: "Prueba de catalasa",
    option2: "Prueba de coagulasa",
    option3: "Prueba de la tuberculina (Mantoux)",
    option4: "Prueba de oxidasa",
    correct: "Prueba de la tuberculina (Mantoux)",
  },
  {
    id: 25,
    title: "¿Qué enfermedad es causada por el virus de Epstein-Barr?",
    option1: "Sarampión",
    option2: "Mononucleosis infecciosa",
    option3: "Varicela",
    option4: "Hepatitis C",
    correct: "Mononucleosis infecciosa",
  },
  {
    id: 26,
    title:
      "¿Cuál es el principal mecanismo de transmisión de la fiebre tifoidea?",
    option1: "Aire",
    option2: "Contacto directo",
    option3: "Agua y alimentos contaminados",
    option4: "Vectores",
    correct: "Agua y alimentos contaminados",
  },
  {
    id: 27,
    title: "¿Qué característica distingue a las bacterias Gram positivas?",
    option1: "Presencia de una membrana externa",
    option2: "Pared celular gruesa de peptidoglicano",
    option3: "Producción de endotoxinas",
    option4: "Cápsula prominente",
    correct: "Pared celular gruesa de peptidoglicano",
  },
  {
    id: 28,
    title: "¿Qué microorganismo es responsable de la malaria?",
    option1: "Plasmodium spp.",
    option2: "Trypanosoma cruzi",
    option3: "Leishmania donovani",
    option4: "Entamoeba histolytica",
    correct: "Plasmodium spp.",
  },
  {
    id: 29,
    title:
      "¿Qué bacteria es conocida por su forma de espiral y su asociación con enfermedades gástricas?",
    option1: "Staphylococcus aureus",
    option2: "Escherichia coli",
    option3: "Helicobacter pylori",
    option4: "Streptococcus pneumoniae",
    correct: "Helicobacter pylori",
  },
  {
    id: 30,
    title:
      "¿Qué estructura permite a las bacterias adherirse a superficies y formar biopelículas?",
    option1: "Flagelo",
    option2: "Pili",
    option3: "Glicocálix",
    option4: "Esporas",
    correct: "Glicocálix",
  },
  {
    id: 31,
    title: "¿Qué tipo de microorganismo es responsable de la candidiasis?",
    option1: "Virus",
    option2: "Bacteria",
    option3: "Hongo",
    option4: "Parásito",
    correct: "Hongo",
  },
  {
    id: 32,
    title:
      "¿Qué prueba se utiliza para detectar la presencia de bacterias coliformes en el agua?",
    option1: "Prueba de coagulasa",
    option2: "Prueba de catalasa",
    option3: "Prueba de oxidasa",
    option4: "Prueba de fermentación de lactosa",
    correct: "Prueba de fermentación de lactosa",
  },
  {
    id: 33,
    title:
      "¿Qué bacteria es conocida por causar infecciones del tracto urinario?",
    option1: "Bacillus anthracis",
    option2: "Clostridium perfringens",
    option3: "Escherichia coli",
    option4: "Staphylococcus epidermidis",
    correct: "Escherichia coli",
  },
  {
    id: 34,
    title:
      "¿Qué virus es responsable de la inmunodeficiencia adquirida (SIDA)?",
    option1: "Virus del Zika",
    option2: "Virus del Ébola",
    option3: "Virus de la inmunodeficiencia humana (VIH)",
    option4: "Virus del Papiloma Humano (VPH)",
    correct: "Virus de la inmunodeficiencia humana (VIH)",
  },
  {
    id: 35,
    title:
      "¿Qué tipo de microorganismo es responsable de la enfermedad de Chagas?",
    option1: "Virus",
    option2: "Bacteria",
    option3: "Hongo",
    option4: "Parásito",
    correct: "Parásito",
  },
  {
    id: 36,
    title:
      "¿Qué prueba se utiliza para detectar la presencia de Salmonella en los alimentos?",
    option1: "Prueba de catalasa",
    option2: "Prueba de coagulasa",
    option3: "Cultivo en agar XLD",
    option4: "Prueba de oxidasa",
    correct: "Cultivo en agar XLD",
  },
  {
    id: 37,
    title: "¿Qué microorganismo es conocido por causar la peste bubónica?",
    option1: "Yersinia pestis",
    option2: "Vibrio cholerae",
    option3: "Bacillus anthracis",
    option4: "Clostridium tetani",
    correct: "Yersinia pestis",
  },
  {
    id: 38,
    title:
      "¿Cuál es la principal vía de transmisión del virus de la hepatitis C?",
    option1: "Contacto sexual",
    option2: "Aire",
    option3: "Agua contaminada",
    option4: "Sangre y fluidos corporales",
    correct: "Sangre y fluidos corporales",
  },
  {
    id: 39,
    title: "¿Qué enfermedad es causada por el Treponema pallidum?",
    option1: "Gonorrea",
    option2: "Sífilis",
    option3: "Herpes",
    option4: "Clamidia",
    correct: "Sífilis",
  },
  {
    id: 40,
    title:
      "¿Qué técnica de laboratorio se utiliza para identificar bacterias que producen catalasa?",
    option1: "Prueba de oxidasa",
    option2: "Prueba de coagulasa",
    option3: "Prueba de catalasa",
    option4: "Prueba de Gram",
    correct: "Prueba de catalasa",
  },
  {
    id: 41,
    title:
      "Con respecto a las infecciones sistémicas por levaduras del género Candida, señale la opción INCORRECTA:",
    option1:
      "Los pacientes neutropénicos y oncohematológicos presentan factores de riesgo",
    option2:
      "Pueden producirse por C albicans a partir de su translocación intestinal",
    option3:
      "Un recuento de 200 Linfocitos TCD4/mm3 condiciona la aparición de las candidemias.",
    option4:
      "El control de catéteres y el lavado de manos previene la invasión al torrente circulatorio por C parapsilosis",
    correct:
      "Un recuento de 200 Linfocitos TCD4/mm3 condiciona la aparición de las candidemias.",
  },
  {
    id: 42,
    title:
      "Con respecto a la patogenia observada en las dermatoficias y a sus agentes etiológicos, señale la opción INCORRECTA:",
    option1:
      "El queratinocito prolifera durante la invasión fúngica y libera mediadores de la inflamación.",
    option2:
      "La observación de lesiones con pústulas en las tineas (capitis o barbae) nos informa acerca de la coinfección con bacterias",
    option3:
      "Los dermatofitos antropófilos establecen un estado de portación en el hombre.",
    option4:
      "Una forma inflamatoria exacerbada lo constituye el Querion de Celso",
    correct:
      "La observación de lesiones con pústulas en las tineas (capitis o barbae) nos informa acerca de la coinfección con bacterias",
  },
  {
    id: 43,
    title:
      "Los siguientes son factores de riesgo para el desarrollo de una mucormicosis, EXCEPTO:",
    option1: "Pacientes con neutropenia prolongada",
    option2: "Peritonitis abdominal secundaria a la perforación de íleon",
    option3: "Transplantados alogénicos de médula ósea",
    option4:
      "Pacientes transplantados con corticoesteroides e inmunosupresores",
    correct: "Peritonitis abdominal secundaria a la perforación de íleon",
  },
  {
    id: 44,
    title:
      "Factores tales como humedad y la maceración de la piel en los pliegues favorecen el desarrollo de las siguientes especies fúngicas, EXCEPTO:",
    option1: "Epidermophyton floccosum",
    option2: "Trichophyton rubrum",
    option3: "Candida spp",
    option4: "Malassezia furfur",
    correct: "Candida spp",
  },
  {
    id: 45,
    title:
      "Con respecto a las siguientes biomoléculas fúngicas, señale la opción INCORRECTA:",
    option1:
      "La gliotoxina es un metabolito primario de los Aspergillus responsable de la adherencia a la laminina",
    option2:
      "La proteína de shock térmico 60 (hsp 60) es un componente estructural de la pared de Histoplasma capsulatum que media la unión al CR3 de la célula fagocítica.",
    option3:
      "Las Mananoproteínas de los dermatofitos presentan actividad inmunomoduladora.",
    option4:
      "La glicoproteína A (gpA) en Pneumocystis brinda especificidad de hospedero.",
    correct:
      "La proteína de shock térmico 60 (hsp 60) es un componente estructural de la pared de Histoplasma capsulatum que media la unión al CR3 de la célula fagocítica.",
  },
  {
    id: 46,
    title:
      "Las siguientes formas parasitarias son observadas en las correspondientes micosis, EXCEPTO:",
    option1: "Levaduras con seudohifas en onicomicosis por Candida",
    option2:
      "Artroconidios en posición ectothrix y/o endothrix al pelo en los casos de Tinea capitis",
    option3:
      "Levaduras junto a filamentos cortos y anchos en la Pitriasis versicolor",
    option4: "Hifas pigmentadas en los casos de Tinea pedis",
    correct: "Hifas pigmentadas en los casos de Tinea pedis",
  },
  {
    id: 47,
    title:
      "Con respecto a los mecanismos de evasión fúngica, señale la opción INCORRECTA:",
    option1:
      "Ciertos morfotipos (levaduras o conidios de Aspergillus spp) al originar seudohifas o filamentos pierden señales de estimulación para TLR4",
    option2:
      "Eliminación de la glicoproteína A (gpA) en P. jirovecii como señuelo que impide su internalización por el receptor de manosa del macrófago",
    option3:
      "Adquisición por especies de Candida de proteínas regulatorias de la cascada del complemento",
    option4:
      "Producción de levaduras sin cápsulas en las fungemias por Cryptococcus neoformans",
    correct:
      "Adquisición por especies de Candida de proteínas regulatorias de la cascada del complemento",
  },
  {
    id: 48,
    title:
      "Cuál de las siguientes opciones es compartida por las especies fúngicas del género Candida y los dermatofitos",
    option1:
      "Producen infecciones (candidiasis o dermatoficias) que se diferencian en el tipo de talo invasor",
    option2:
      "Las formas cutáneas de ambas micosis pueden constituir el foco para la diseminación y producir formas sistémicas de candidiasis o dermatoficias",
    option3: "El origen de ambas infecciones es habitualmente de tipo endógeno",
    option4:
      "Se pueden asociar a infecciones en el ámbito nosocomial y a la probabilidad de establecer brotes en salas de cuidados intensivos",
    correct: "El origen de ambas infecciones es habitualmente de tipo endógeno",
  },
  {
    id: 49,
    title:
      "Las siguientes son características de la primoinfección o infección por hongos productores de micosis sistémicas endémicas, EXCEPTO:",
    option1:
      "Puede asociarse a formas sintomáticas en el caso de exposición a una alta dosis de inóculo",
    option2:
      "Mecanismos de respuesta tipo Th1 controlan el proceso infeccioso.",
    option3:
      "En un alto porcentaje (60%) de la población cursan en forma sintomática en la primoinfección con Coccidioides posadasii",
    option4:
      "Las pruebas intradérmicas de lectura tardía evalúan la respuesta humoral.",
    correct:
      "Las pruebas intradérmicas de lectura tardía evalúan la respuesta humoral.",
  },
  {
    id: 50,
    title:
      "Cuál de los siguientes eventos ocurre en la patogenia de la criptococosis? Señale la opción CORRECTA:",
    option1:
      "Germinación de los conidios y formación de hifas tabicadas en el parénquima pulmonar",
    option2: "Angioinvasión a nivel pulmonar que lleva a un infarto y necrosis",
    option3: "Diseminación al SNC por vía axonal retrógrada",
    option4: "Producción de fenoloxidasa o lacasa",
    correct: "Diseminación al SNC por vía axonal retrógrada",
  },
  {
    id: 51,
    title:
      "Cuál de los siguientes antimicrobianos actúan sobre la pared del Pneumocystis jirovecii? Señale la opción CORRECTA",
    option1: "Trimetoprim Sulfametoxazol",
    option2: "Posaconazol",
    option3: "Candinas",
    option4: "5- fluorocitosina",
    correct: "Trimetoprim Sulfametoxazol",
  },
  {
    id: 52,
    title:
      "Las siguientes son características de la pared de la célula fúngica, EXCEPTO:",
    option1:
      "Presenta una estructura fibrilar y una sustancia amorfa de polisacáridos.",
    option2:
      "La síntesis activa de la pared ocurre en el extremo hifal en los hongos miceliales.",
    option3:
      "En Paracoccidioides brasiliensis la composición cualitativa y cuantitativa de los constituyentes de la pared es la misma en la forma filamentosa y levaduriforme",
    option4: "Limita la entrada de agua al interior de la célula fúngica",
    correct:
      "En Paracoccidioides brasiliensis la composición cualitativa y cuantitativa de los constituyentes de la pared es la misma en la forma filamentosa y levaduriforme",
  },
  {
    id: 53,
    title:
      "Durante el transporte de elementos antígenos en los conidios de Aspergillus fumigatus hacia el espacio paracelular entre las células epiteliales y las células dendríticas, Señale la opción CORRECTA",
    option1:
      "Transitando por vesículas que coalescen en vesículas primarias que viajan hacia la línea apical",
    option2:
      "Vía de seudohifas por un proceso dependiente de clatrina de transporte vesicular",
    option3:
      "Vesículas secundarias de transporte por endocitosis vesicular no revestidas.",
    option4: "Procesos fagocitarios por endocitosis pinocitica",
    correct:
      "Transitando por vesículas que coalescen en vesículas primarias que viajan hacia la línea apical",
  },
  {
    id: 53,
    title:
      "Las siguientes son afirmaciones correspondientes a Sporothrix schenkii, EXCEPTO:",
    option1: "La principal vía de ingreso es cutánea",
    option2:
      "Las manifestaciones clínicas del síndrome linfangítico nodular corresponden a un complejo de primoinfección",
    option3: "Es una especie monomorfa",
    option4:
      "Los conidios presentan una gp70 kDa que media la adherencia a la matriz extracelular",
    correct: "Es una especie monomorfa",
  },
  {
    id: 54,
    title:
      "Las siguientes son características consideradas en la identificación fúngica de los hongos miceliales, EXCEPTO:",
    option1: "El tabicamiento",
    option2: "Las formaciones especiales del talo vegetativo",
    option3: "El tipo de nutrición",
    option4: "El origen de los conidios blásticos o tállicos",
    correct: "El tipo de nutrición",
  },
  {
    id: 55,
    title:
      "Las siguientes afirmaciones corresponden a Cryptococcus neoformans, EXCEPTO:",
    option1: "Se presenta en forma importante en coinfecciones con el HIV",
    option2:
      "Puede persistir en el pulmón gracias a un aumento de su tamaño como mecanismo de evasión inmunológica",
    option3:
      "Produce manitol que contribuye al edema y al aumento de la presión endocraneana.",
    option4:
      "Un componente importante en su pared lo constituye el glucuronoxilomanano.",
    correct:
      "Produce manitol que contribuye al edema y al aumento de la presión endocraneana.",
  },
  {
    id: 56,
    title:
      "Con respecto a la neumocistosis y a las siguientes opciones: I- Se produce tempranamente en la infancia y II- Se la observa asociada a pacientes con trasplante de órganos sólidos (TOS) y de células progenitoras hematopoyéticas (TCPH). Señale la opción CORRECTA:",
    option1: "La primera opción es correcta y la segunda es falsa",
    option2: "Ambas opciones son falsas",
    option3: "Ambas opciones son correctas",
    option4: "La primera opción es falsa y la segunda es correcta.",
    correct: "Ambas opciones son correctas",
  },
  {
    id: 57,
    title:
      "Las siguientes opciones son características de la aspergilosis broncopulmonar, EXCEPTO:",
    option1: "Se produce por hiperreactividad inmune",
    option2:
      "Las especies de Aspergillus desarrollan en el pulmón produciendo lesiones migratorias",
    option3:
      "Los antígenos fúngicos son procesados y presentados a las células T promoviendo un perfil de tipo Th2",
    option4:
      "Se requiere de cavidades preformadas para el desarrollo de esta forma de aspergilosis",
    correct:
      "Los antígenos fúngicos son procesados y presentados a las células T promoviendo un perfil de tipo Th2",
  },
  {
    id: 58,
    title:
      "Las siguientes son relaciones entre el elemento fúngico infectante, la enfermedad fúngica y el factor predisponente, EXCEPTO:",
    option1: "Levaduras / cromoblastomicosis / sobrecarga de hierro",
    option2: "Basidiosporas / criptococosis / trasplante de riñón",
    option3: "Esporangiosporas / mucormicosis / desnutrición grave",
    option4:
      "Clamidoartroconidios o artroconidios / coccidioidomicosis / embarazo",
    correct: "Basidiosporas / criptococosis / trasplante de riñón",
  },
  {
    id: 59,
    title:
      "Con respecto a la especie fúngica y su vía de diseminación en el huésped, señale la opción CORRECTA:",
    option1:
      "Pneumocystis jirovecii / atraviesa la barrera hematoencefálica por transcitosis",
    option2: "Trichophyton rubrum / compromiso de la dermis por contigüidad",
    option3:
      "Fonsecaea pedrosoi / translocación a través de la mucosa colónica",
    option4: "Madurella spp / compromiso óseo por contigüidad",
    correct:
      "Pneumocystis jirovecii / atraviesa la barrera hematoencefálica por transcitosis",
  },
  {
    id: 60,
    title:
      "Con respecto al ergosterol presente en la célula fúngica, señale la opción INCORRECTA:",
    option1:
      "Su síntesis se encuentra disminuida en la célula fúngica en tratamientos previos con azoles",
    option2:
      "Es importante en procesos de endocitosis, formación de vacuolas y estabilización de las proteínas de membrana",
    option3:
      "Puede ser enmascarado por otros esteroles y esto puede llevar a la resistencia a la anfotericina B",
    option4:
      "Es liberado desde la célula fúngica como señuelo evadiendo la fagocitosis",
    correct:
      "Es liberado desde la célula fúngica como señuelo evadiendo la fagocitosis",
  },
  {
    id: 61,
    title:
      "Las siguientes situaciones predisponen a la adquisición de una micosis por especies de Fusarium, EXCEPTO:",
    option1: "Uso de antibióticos de amplio espectro",
    option2: "Traumatismos importantes contaminados con suelo (tierra)",
    option3: "Quimioterapia en enfermedades oncohematológicas",
    option4:
      "Onicomicosis por especies de Fusarium en pacientes con neutropenia prolongada",
    correct: "Quimioterapia en enfermedades oncohematológicas",
  },
  {
    id: 62,
    title:
      "Con respecto a los factores de virulencia de las micosis sistémicas endémicas y su correspondiente agente etiológico, señale la opción INCORRECTA:",
    option1:
      "Enmascaramiento del β (1-3) glucano / Paracoccidioides brasiliensis",
    option2: "Parasitismo intracelular del macrófago / Histoplasma capsulatum",
    option3:
      "Producción de arginasa I en el interior del macrófago / Coccidioides posadasii",
    option4: "Dimorfismo hifa levadura / Coccidioides immitis",
    correct:
      "Producción de arginasa I en el interior del macrófago / Coccidioides posadasii",
  },
  {
    id: 63,
    title:
      "En los micetomas se observa: I- Tumoración debido a la formación de abscesos, drenaje de los mismos por trayectos fistulosos y presencia de granos. II- Los agentes productores de granos blancos son originados por especies de Aspergillus, Acremonium, entre otras. Con respecto a las opciones I y II, señale la opción CORRECTA:",
    option1: "La primera aseveración es correcta y la segunda es falsa",
    option2: "Ambas aseveraciones son correctas",
    option3: "La segunda aseveración es correcta y la primera es falsa",
    option4: "Ambas aseveraciones son falsas",
    correct: "Ambas aseveraciones son correctas",
  },
  {
    id: 64,
    title:
      "La reactivación de una histoplasmosis o coccidiomicosis ocurre en un individuo que ha sufrido la primoinfección y presenta actualmente una de las siguientes condiciones, EXCEPTO:",
    option1: "Un recuento de linfocitos TCD4 menor de 200 células/mm3",
    option2: "Diálisis y/o discrasias sanguíneas",
    option3: "Emplea drogas inmunosupresoras como los antagonistas TNFα",
    option4: "Es un transplantado de órganos sólidos (riñón)",
    correct: "Es un transplantado de órganos sólidos (riñón)",
  },
  {
    id: 65,
    title:
      "Los siguientes eventos permiten la adquisición del fenotipo resistente al fluconazol en C albicans EXCEPTO:",
    option1: "Sucesivos tratamientos con el azólico",
    option2: "Resistencia cruzada para tratamiento previo con caspofungina",
    option3: "Sobreproducción de las bombas de eflujo",
    option4:
      "Mutaciones puntuales en el gen que codifica para la enzima blanco",
    correct: "Resistencia cruzada para tratamiento previo con caspofungina",
  },
  {
    id: 66,
    title:
      "Con respecto a la diversidad y variabilidad viral, indique la opción INCORRECTA:",
    option1:
      "La variabilidad viral de los virus con genoma ARN es muy semejante, dado que está solo influída por la carencia de lectura de prueba de las respectivas polimerasas o transcriptasas inversas.",
    option2:
      "Los rinovirus humanos exhiben mayor diversidad que los virus parainfluenza humanos.",
    option3: "El HCV exhibe mayor variabilidad que el virus sarampión",
    option4: "El virus dengue exhibe mayor diversidad que el virus polio",
    correct:
      "La variabilidad viral de los virus con genoma ARN es muy semejante, dado que está solo influída por la carencia de lectura de prueba de las respectivas polimerasas o transcriptasas inversas.",
  },
  {
    id: 67,
    title:
      "Los siguientes factores/eventos contribuyen a la generación de cepas de virus influenza A con potencial pandémico, EXCEPTO:",
    option1: "Hospedadores no-humanos",
    option2:
      "Replicación de cepas con mayor aptitud replicativa (fitness) en células epiteliales.",
    option3: "Coinfección de una misma célula por diferentes subtipos",
    option4: "Naturaleza del genoma viral.",
    correct: "Naturaleza del genoma viral.",
  },
  {
    id: 68,
    title:
      "Los siguientes fenómenos que acontecen en la infección por citomegalovirus humano (CMVh) contribuyen a su evasión a la respuesta inmune, EXCEPTO:",
    option1:
      "Disminución de la expresión de CMH-I/ reconocimiento inmune inadecuado",
    option2:
      "Entrada de pp71 (proteína del tegumento) al núcleo celular/ expresión de genes inmediato tempranos (genes alfa) que desencadenan transcripción de genes beta (tempranos)",
    option3:
      "Expresión viral en la membrana celular de CMH-I similar / inhibición de la actividad citotóxica de células NK.",
    option4:
      "Expresión de viroquinas simil IL-10/ modulación de la respuesta inmune.",
    correct:
      "Expresión viral en la membrana celular de CMH-I similar / inhibición de la actividad citotóxica de células NK.",
  },
  {
    id: 69,
    title:
      "Con respecto a la infección por virus sarampión, indique la opción INCORRECTA:",
    option1:
      "La linfopenia contribuye al silenciamiento del sistema inmune durante la fase aguda.",
    option2:
      "Un paciente que se infecta con este agente y que posee el receptor nectina-4 deletéado en el sitio de unión para el virus, no podrá desarrollar la fase viremica ni la diseminación viral en el organismo.",
    option3:
      "La panencefalitis esclerosante subaguda acontece al cabo de años de infección, por acumulo de nucleocápsides del virus sarampión en el SNC y sigue un curso habitualmente fatal.",
    option4:
      "La inmunosupresión celular durante la fase aguda está asociada a una respuesta predominantemente Th2",
    correct:
      "La panencefalitis esclerosante subaguda acontece al cabo de años de infección, por acumulo de nucleocápsides del virus sarampión en el SNC y sigue un curso habitualmente fatal.",
  },
  {
    id: 70,
    title:
      "Con respecto a los genotipos y serotipos virales, indique la opción INCORRECTA:",
    option1: "Un serotipo puede comprender múltiples genotipos",
    option2:
      "Algunos genotipos del HBV están relacionados con un curso evolutivo más grave",
    option3:
      "Un individuo que se infecta exclusivamente con una población viral del genotipo 1 del HCV, puede exhibir el genotipo 2 al cabo de décadas de infección persistente sin mediar sobreinfección",
    option4:
      "Los individuos inmunocompetentes que se infectan con virus sarampión, rubeola o parotiditis, adquieren habitualmente inmunidad protectora de larga duración frente a la respectiva re exposición viral, dado que los 3 virus poseen un único serotipo.",
    correct:
      "Un individuo que se infecta exclusivamente con una población viral del genotipo 1 del HCV, puede exhibir el genotipo 2 al cabo de décadas de infección persistente sin mediar sobreinfección",
  },
  {
    id: 71,
    title:
      "Con respecto a la patogénesis de las infecciones por adenovirus, indique el enunciado INCORRECTO.",
    option1:
      "Tras la infección de células epiteliales de la mucosa respiratoria puede sobrevenir la diseminación por sangre",
    option2:
      "El virus puede desarrollar una fase de latencia en células linfoides de diferente localización y reactivarse ante el inmunocompromiso.",
    option3:
      "Al igual que el virus sincicial respiratorio, afecta células superficiales de la mucosa respiratoria.",
    option4:
      "Es un virus capaz de afectar la presentación antigénica y los mecanismos antivirales mediados por interferones en células infectadas.",
    correct:
      "Al igual que el virus sincicial respiratorio, afecta células superficiales de la mucosa respiratoria.",
  },
  {
    id: 72,
    title:
      "La expresión de los siguientes componentes de los virus pertenecientes a la familia Herpesviridae permite el mantenimiento de la latencia, EXCEPTO:",
    option1: "EBNA/ EBV",
    option2: "ICP0/ HSV",
    option3: "LANA/ HHV-8",
    option4: "LUNA/ hCMV",
    correct: "ICP0/ HSV",
  },
  {
    id: 73,
    title:
      "Con respecto a las infecciones por rotavirus, indique la opción INCORRECTA:",
    option1:
      "Este virus puede infectar células cromafines que liberan serotonina, lo que se asocia a la promoción de la emesis (vómito)",
    option2:
      "La disrupción de las uniones estrechas entre enterocitos promovida por la respuesta inflamatoria con linfocitos Th17 genera precozmente una diarrea acuosa",
    option3:
      "La estimulación del sistema nervioso autónomo durante la infección promueve el peristaltismo intestinal",
    option4:
      "NSP4 puede promover -entre otros- efectos tóxicos en células no infectadas y además alterar uniones estrechas intercelulares, lo cual aumenta el volumen de la diarrea acuosa.",
    correct:
      "La estimulación del sistema nervioso autónomo durante la infección promueve el peristaltismo intestinal",
  },
  {
    id: 74,
    title: "Indique la asociación etiológica INCORRECTA:",
    option1: "Herpangina/ virus herpes simplex",
    option2: "Encefalitis aguda no epidérmica/ virus herpes simplex",
    option3: "Enfermedad mano pie boca /Virus Coxsackie A",
    option4: "Miocarditis aguda / virus Coxsackie B",
    correct: "Herpangina/ virus herpes simplex",
  },
  {
    id: 75,
    title:
      "Con respecto a la permisividad celular para la infección por el virus de inmunodeficiencia humana tipo I (HIV-1), indique el enunciado INCORRECTO:",
    option1:
      "El receptor (CD4) y los co-receptores (CCR5, CXCR4) definen el tropismo viral.",
    option2:
      "La generación de progenie viral es directamente influenciada por el estado de activación celular",
    option3:
      "El estado de la cromatina celular es determinante para que ocurra la expresión de los genes virales contenidos en el provirus",
    option4: "La transcripción inversa ocurre solo en células permisivas.",
    correct: "La transcripción inversa ocurre solo en células permisivas.",
  },
  {
    id: 76,
    title:
      "Las siguientes asociaciones se vinculan con el linfoma de Burkitt endémico, EXCEPTO:",
    option1:
      "La translocación cromosómica '8;14' / inhibición de apoptosis por EBV en linfocitos B",
    option2:
      "La síntesis incrementada de AID (activation induced cytidine deaminase o citidina deaminasa inducida por activación) / presencia de hemozoina de Plasmodium",
    option3:
      "La participación de las proteínas de membrana LMPs de EBV / activación y proliferación de LB",
    option4:
      "La presencia de anticuerpos heterófilos / formación de inmunocomplejos con antígenos parasitarios",
    correct:
      "La presencia de anticuerpos heterófilos / formación de inmunocomplejos con antígenos parasitarios",
  },
  {
    id: 77,
    title:
      "Con respecto a los mecanismos de evasión viral a la respuesta inmune, indique la opción INCORRECTA:",
    option1:
      "HIV inhibe respectivamente la actividad de los LT CD8 y de las NK, mediante la inhibición de la expresión de CMH-I clásicas y la exposición de HLA-E (CMH-I no clásica) en la superficie celular.",
    option2:
      "HCV altera tanto la síntesis del IFN-I como las vías de señalización dependientes del mismo",
    option3:
      "Los virus que promueven infecciones persistentes crónicas se asocian habitualmente a una respuesta inmune celular defectuosa",
    option4:
      "Los virus que producen infecciones persistentes latentes son los ADN virus que promueven la expresión de las proteínas LATs para impedir el reconocimiento de antígenos virales.",
    correct:
      "Los virus que producen infecciones persistentes latentes son los ADN virus que promueven la expresión de las proteínas LATs para impedir el reconocimiento de antígenos virales.",
  },
  {
    id: 78,
    title:
      "Los siguientes son eventos asociados al carcinoma de cuello uterino por HPV, EXCEPTO:",
    option1:
      "La integración del genoma viral es una condición indispensable para la oncogénesis por este agente",
    option2:
      "Cofactores relacionados con el hospedador (por ej, tabaquismo y anticonceptivos orales) contribuyen a la formación de este tumor.",
    option3:
      "La infección por una población de HPV del genotipo 16 implica inexorablemente un proceso oncogénico al cabo de décadas de infección.",
    option4:
      "La disrupción del gen regulador E2 promueve la actividad exacerbada de genes virales que inhiben proteínas celulares oncosupresoras.",
    correct:
      "La infección por una población de HPV del genotipo 16 implica inexorablemente un proceso oncogénico al cabo de décadas de infección.",
  },
  {
    id: 79,
    title:
      "Con respecto a la patogénesis de las infecciones virales, indique la opción INCORRECTA:",
    option1:
      "Un mismo virus puede utilizar distintos receptores sucesivamente en una misma célula (ej. HCV; herpes simplex, determinados Coxsackie); o en diferentes células susceptibles (ej. HIV)",
    option2:
      "Diferentes virus pueden ingresar a las células utilizando un mismo receptor celular (por ej, virus Coxsackie/ciertos adenovirus)",
    option3:
      "Una misma especie viral puede promover infecciones con un curso diferente según la edad del individuo (ej. parvovirus (eritrovirus) B19 en el niño vs el adulto; HBV en el neonato vs el adulto)",
    option4:
      "Los virus que promueven efectos citolíticos in vitro corresponden a aquellos que generan la destrucción celular por un mecanismo directo in vivo",
    correct:
      "Un mismo virus puede utilizar distintos receptores sucesivamente en una misma célula (ej. HCV; herpes simplex, determinados Coxsackie); o en diferentes células susceptibles (ej. HIV)",
  },
  {
    id: 80,
    title:
      "Con respecto a los mecanismos de defensa antiviral, indique la opción INCORRECTA:",
    option1:
      "Una célula puede detectar la presencia de ciertos virus aún sin producirse la infección productiva de la misma",
    option2:
      "El reconocimiento viral por helicasas celulares promueve la síntesis de interferones tipo I y III",
    option3:
      "Los interferones de tipo I pueden afectar la transcripción y la traducción de genes virales y celulares por lo que actúan como agentes antivirales y antiproliferativos.",
    option4:
      "Una misma estirpe celular infectada (separadamente) por dos especies virales diferentes disparan los mismos mecanismos de defensa de la respuesta innata",
    correct:
      "Una misma estirpe celular infectada (separadamente) por dos especies virales diferentes disparan los mismos mecanismos de defensa de la respuesta innata",
  },
  {
    id: 81,
    title:
      "Con respecto a la patogenicidad y virulencia de los siguientes agentes virales en el humano, indique la opción CORRECTA:",
    option1:
      "El virus rabia se asocia a baja patogenicidad y elevada virulencia",
    option2: "El virus polio se asocia a alta patogenicidad y baja virulencia",
    option3: "El virus sarampión es más patógeno que el virus dengue",
    option4: "HTLV-I es más patógeno que HIV",
    correct: "El virus sarampión es más patógeno que el virus dengue",
  },
  {
    id: 82,
    title:
      "Con respecto a la patogenicidad y virulencia de los siguientes agentes virales en el humano, indique la opción INCORRECTA:",
    option1:
      "Las células susceptibles y no permisivas permiten la síntesis de progenie viral previamente a la reactivación de la infección latente",
    option2:
      "Los linfocitos B son susceptibles pero no permisivos para el virus Epstein Barr",
    option3:
      "El endotelio capilar placentario es susceptible y permisivo para el virus Zika",
    option4:
      "Los LT CD4 con la deleción Δ32 en el correceptor CCR5 son susceptibles y permisivos a poblaciones de HIV R5 tropicas, generando en ellas mayor aptitud replicativa.",
    correct:
      "Los linfocitos B son susceptibles pero no permisivos para el virus Epstein Barr",
  },
  {
    id: 83,
    title: "Con respecto a la replicación viral, indique la opción CORRECTA:",
    option1:
      "Los virus que integran su genoma al celular deben codificar una integrasa viral",
    option2:
      "Los virus que poseen una copia de genoma ARN bicatenario (-/+) asociada al virion no requieren llevar asociada al mismo una polimerasa, dado que la hebra (+) actúa como ARN mensajero.",
    option3:
      "El virus influenza replica en el núcleo dado que la ARN polimerasa II celular replica su genoma",
    option4:
      "Los virus con genoma ADN que carecen de una ADN polimerasa, deben replicar en células en mitosis (como el parvovirus B19) o en las que promuevan el ciclo celular (como los papilomavirus humanos) para utilizar la enzima celular homónima.",
    correct:
      "El virus influenza replica en el núcleo dado que la ARN polimerasa II celular replica su genoma",
  },
  {
    id: 84,
    title:
      "¿Cuál de los siguientes virus produce habitualmente infecciones localizadas?",
    option1: "Parotiditis",
    option2: "Fiebre amarilla",
    option3: "Citomegalovirus humano",
    option4: "Virus papiloma humano",
    correct: "Parotiditis",
  },
  {
    id: 85,
    title:
      "Si a Ud le encargaran la responsabilidad de preparar una vacuna a virus vivo y atenuado contra un virus emergente cultivable, ¿utilizaría una de las siguientes estrategias para cuantificar la infectividad de la misma? Indique la opción CORRECTA",
    option1: "La carga viral (genomas/ml de suspensión vacunal)",
    option2:
      "El número de partículas infecciosas al M.E/ml de suspensión vacunal",
    option3:
      "El título viral (UFP [unidades formadoras de placa]/ ml de suspensión vacunal)",
    option4:
      "La cantidad de antígenos virales de superficie/ ml de suspensión vacunal (ELISA)",
    correct:
      "El título viral (UFP [unidades formadoras de placa]/ ml de suspensión vacunal)",
  },
  {
    id: 86,
    title:
      "Con respecto a la patogénesis de las infecciones por arbovirus, indique la opción CORRECTA:",
    option1: "La proteína NS1 de los flavivirus es una virotoxina",
    option2:
      "Un neonato agammaglobulinémico NO puede experimentar un dengue grave ante la primoinfección por virus dengue-1, si su madre padeció una infección por otro serotipo de dengue durante el 6to mes de dicho embarazo.",
    option3:
      "La infección cutánea por ciertos arbovirus en el sitio de inoculación promueve inmediatamente una respuesta local vigorosa, policlonal y multispecífica con perfil Th1",
    option4:
      "La transmisión vectorial solo acontece mediante la picadura de hembras adultas de mosquitos",
    correct:
      "La infección cutánea por ciertos arbovirus en el sitio de inoculación promueve inmediatamente una respuesta local vigorosa, policlonal y multispecífica con perfil Th1",
  },
  {
    id: 87,
    title:
      "Con respecto a la patogénesis de la infección por HCV, indique la opción CORRECTA",
    option1:
      "Los bajos niveles de IL-21 circulantes favorecen la persistencia viral",
    option2:
      "La esteatosis hepatocitaria inducida es un mecanismo de defensa para evitar la insulino resistencia",
    option3: "El daño tisular está circunscrito al hígado exclusivamente",
    option4:
      "La crioglobulinemia mixta es un evento que solo padecen los individuos agammaglobulinémicos.",
    correct:
      "Los bajos niveles de IL-21 circulantes favorecen la persistencia viral",
  },
  {
    id: 88,
    title:
      "¿Cuál de los siguientes eventos patogénicos es común a la infección por HBV y por HCV?",
    option1:
      "La activación temprana de genes ISGs (Interferon sensitive genes) durante la etapa aguda.",
    option2:
      "La utilización del mismo receptor para ingresar a los hepatocitos",
    option3:
      "La liberación de viroquinas con perfil Th2 durante la infección crónica",
    option4:
      "El agotamiento de la respuesta de LT CD8 durante la infección crónica",
    correct:
      "La utilización del mismo receptor para ingresar a los hepatocitos",
  },
  {
    id: 89,
    title: "¿Cuál de los siguientes eventos es mediado por mecanismos inmunes?",
    option1: "Apoptosis y piroptosis en hepatocitos infectados con HCV",
    option2:
      "Sinsicios por lisis/ fusión de la membrana plasmática de LT CD150 (SLAM) con glicoproteína del virus sarampión",
    option3:
      "Necrosis del lóbulo temporal del encéfalo infectado por virus herpes simplex-1",
    option4:
      "Linfopenia en la mononucleosis infecciosa por el virus Epstein Barr, mediada por LT CD8 específicos",
    correct:
      "Sinsicios por lisis/ fusión de la membrana plasmática de LT CD150 (SLAM) con glicoproteína del virus sarampión",
  },
  {
    id: 90,
    title:
      "Con respecto a la oncogénesis viral, ¿indique qué factor es común a la producción de tumores entre los virus mencionados?",
    option1:
      "Hepatocarcinoma (HCC) por HBV y HCV / integración de los genomas virales al genoma de los hepatocitos",
    option2: "Linfomas por HCV y EBV / inhibición de la telomerasa",
    option3:
      "Carcinoma de cuello uterino por HPV y HCC por HBV / inhibición de p53",
    option4:
      "Linfomas por EBV y por HTLV-1 / secreción de viroquinas IL-12 similares",
    correct:
      "Hepatocarcinoma (HCC) por HBV y HCV / integración de los genomas virales al genoma de los hepatocitos",
  },
];

let farmacoQuestions = [
  {
    id: 1,
    title:
      "En una infusión intravenosa continua el cociente pico/valle es igual a:",
    option1: "0",
    option2: "1",
    option3: "2",
    option4: "4",
    correct: "1",
  },
  {
    id: 2,
    title:
      "La VM de una droga administrada por vía IV, y con cinética de orden 1, es de 16 horas. El cociente pico/valle, una vez alcanzada la meseta, es de 2. Cada cuantas horas se ingiere el fármaco?",
    option1: "16hs",
    option2: "32hs",
    option3: "64 hs",
    option4: "128hs",
    correct: "16hs",
  },
  {
    id: 3,
    title: "El fator de acumulación depende exclusivamente de:",
    option1: "El intervalo interdosis y la vida media",
    option2: "Dosis de mantenimiento y la vida media",
    option3: "El intervalo interdosis y el mecanismo de absorción",
    option4: "La vía de administración y el clearance",
    correct: "El intervalo interdosis y la vida media",
  },
  {
    id: 4,
    title:
      "Un fármaco que posee una vida media de 12 horas se administra con un patrón de dosificación de 200mg cada 6hs vía oral. Teniendo en cuenta que se decide aumentar la dosis a 400mg cada 6hs, el tiempo que se tardara en alcanzar una nueva concentración plasmática en estadio estacionario es:",
    option1: "6hs",
    option2: "12hs",
    option3: "24hs",
    option4: "48hs",
    correct: "48hs",
  },
  {
    id: 5,
    title:
      "Una droga administrada por vía oral, en meseta, alcanza una concentración de 100mg. Teniendo en cuenta que su FA es 2 y que tiene una BD del 10%, ¿cuál será la DM?",
    option1: "250mg",
    option2: "50mg",
    option3: "500mg",
    option4: "100mg",
    correct: "500mg",
  },
  {
    id: 6,
    title:
      "La VM de una droga administrada por vía IV es 4hs. Una vez alcanzada la meseta, el cociente pico/valle es de 8. Cada cuantas horas se administra esta droga?",
    option1: "2hs",
    option2: "4hs",
    option3: "12hs",
    option4: "16hs",
    correct: "12hs",
  },
  {
    id: 7,
    title:
      "Cuantas vidas medias deberán transcurrir para que se elimine el 85% de una droga?",
    option1: "1 VM",
    option2: "2 VM",
    option3: "3 VM",
    option4: "4 VM",
    correct: "3 VM",
  },
  {
    id: 8,
    title:
      "Si la dosis de una droga es de 0,75mg/día y la VM es de 48 horas. ¿Cuál sería la dosis de carga de la droga?",
    option1: "0,99 mg",
    option2: "1,50 mg",
    option3: "2,55 mg",
    option4: "1,16 mg",
    correct: "2,55 mg",
  },
  {
    id: 9,
    title:
      "La morfina es un analgésico de elevada eficacia. En presencia de naloxona requiere una mayor concentración de morfina para obtener un alivio completo del dolor, ya que por sí misma la naloxona no tiene efecto. Se puede deducir que:",
    option1: "La naloxona es un antagonista competitivo",
    option2:
      "La morfina es un agonista completo y la naloxona un agonista parcial",
    option3: "La morfina es menos eficaz que la naloxona",
    option4: "La morfina es menos potente que la naloxona",
    correct: "La naloxona es un antagonista competitivo",
  },
  {
    id: 10,
    title: "Indique cuál de las siguientes afirmaciones es correcta:",
    option1:
      "Si 100mg del fármaco X producen igual respuesta que 1g del fármaco Z, X es más eficaz que Z",
    option2: "Cuanto mayor es la eficacia, mayor es la potencia de un fármaco",
    option3:
      "Al seleccionar un fármaco, la potencia suele ser más importante que la eficacia",
    option4:
      "Si 100mg del fármaco X producen igual respuesta que 1g del fármaco Z, X es más potente que Z",
    correct:
      "Si 100mg del fármaco X producen igual respuesta que 1g del fármaco Z, X es más potente que Z",
  },
  {
    id: 11,
    title:
      "Las acciones de un antagonista competitivo se caracteriza entre otras cosas por:",
    option1: "Modifican la acción de un antagonista",
    option2: "Disminuye la potencia observada con un agonista",
    option3:
      "Desvía la curva dosis respuesta de un agonista hacia la izquierda",
    option4: "Disminuye la respuesta máxima de un agonista",
    correct: "Disminuye la potencia observada con un agonista",
  },
  {
    id: 12,
    title:
      "H y G se unen al mismo receptor. H es un agonista con una Pce50 de 8 y una actividad intrínseca de 1. En presencia de 10-8M de la droga G, la Pce50 de H es de 7 y su actividad intrínseca es de 1. Entonces podemos concluir que:",
    option1: "G es un agonista parcial",
    option2: "G es un antagonista competitivo",
    option3: "G es un antagonista no competitivo",
    option4: "G es un agonista total",
    correct: "G es un antagonista competitivo",
  },
  {
    id: 13,
    title:
      "Se realizaron curvas dosis-respuesta a 4 drogas obteniéndose los siguientes resultados: Droga A: CE50=10^-7 M; Droga B: CE50=10 mM; Droga C: pCE50=8; Droga D: pCE50= 5. Ordene las drogas según su potencia (de más potente a menos potente)",
    option1: "B > A > D > C",
    option2: "C > A > D > B",
    option3: "D > C > B > A",
    option4: "C > B > D > A",
    correct: "C > A > D > B",
  },
  {
    id: 14,
    title:
      "Se realiza un experimento de órgano aislado y los resultados se plasman en un gráfico curva dosis-respuesta. Este se realiza con concentraciones crecientes de una droga M y con concentraciones fijas y crecientes de una droga Y. En el gráfico se observa un desplazamiento de la curva para la droga M hacia la derecha, sin modificaciones en la altura máxima. De esto se infiere que:",
    option1:
      "La droga M es un antagonista no competitivo, mientras que la droga Y es un agonista completo",
    option2:
      "La droga M es un agonista completo, mientras que la droga Y es un antagonista no competitivo",
    option3:
      "La droga M es un antagonista competitivo, mientras que la droga Y es un agonista completo",
    option4:
      "La droga M es un agonista completo, mientras que la droga Y es un antagonista competitivo",
    correct:
      "La droga M es un agonista completo, mientras que la droga Y es un antagonista competitivo",
  },
  {
    id: 15,
    title:
      "A es una agonista total y B un agonista parcial que se unen al mismo receptor. Entonces la eficacia de la droga A es…",
    option1: "Igual a la de la droga B",
    option2: "Menor a la de la droga B",
    option3: "Mayor a la de la droga B",
    option4: "Menor o igual a la de la droga B",
    correct: "Mayor a la de la droga B",
  },
  {
    id: 16,
    title:
      "Si 10mg de naproxeno inducen la misma respuesta analgésica que 100mg de ibuprofeno, se puede concluir que el naproxeno…",
    option1: "Es más eficaz que el ibuprofeno",
    option2: "Es más potente que el ibuprofeno",
    option3: "Es un agonista completo y el ibuprofeno es un agonista parcial",
    option4: "Es un antagonista competitivo",
    correct: "Es más potente que el ibuprofeno",
  },
  {
    id: 17,
    title:
      "En presencia de una concentración fija de un antagonista competitivo reversible, la curva de concentración-respuesta del agonista se corre a…",
    option1: "La izquierda, sin cambios en la respuesta máxima",
    option2: "La izquierda, con cambios en la respuesta máxima",
    option3: "La derecha, sin cambios en la respuesta máxima",
    option4: "La derecha, con cambios en la respuesta máxima",
    correct: "La derecha, sin cambios en la respuesta máxima",
  },
  {
    id: 18,
    title: "En un gráfico de Scatchard, la pendiente de la recta representa:",
    option1: "Bmax",
    option2: "1/Kd",
    option3: "1/Bmax",
    option4: "Kd",
    correct: "1/Kd",
  },
  {
    id: 19,
    title:
      "¿Cuál de los siguientes enunciados determinaría una “regulación en más” de los rc β1 adrenérgicos postsinápticos?",
    option1: "Uso diario de isoproterenol por 15 días, un agonista del rc β1.",
    option2:
      "Uso diario de anfetaminas por 15 días que ocasionan que libere noradrenalina.",
    option3: "Uso diario de propranolol por 15 días, un antagonista de rc β1.",
    option4:
      "Una enfermedad que induce el incremento de la actividad de las neuronas que liberan noradrenalina.",
    correct: "Uso diario de propranolol por 15 días, un antagonista de rc β1.",
  },
  {
    id: 20,
    title:
      "Se administran hormonas tiroideas en un tejido cardíaco de rata durante 15 días y luego se hace Binding de Radioligando para evaluar la densidad de rc β1. En el gráfico de Scatchard correspondiente se verá:",
    option1:
      "Disminución de la pendiente por tratarse de un Up- Regulation heterológo, sin modificaciones de la Bmax.",
    option2:
      "Aumento de la pendiente por tratarse de un Up- Regulation heterólogo y aumento de la Bmax.",
    option3:
      "Disminución de la pendiente por tratarse de un Up Regulation heterólogo y disminución de la Bmax.",
    option4:
      "Aumento de la Bmax por tratarse de un Up-Regulation heterólogo, sin modificaciones en la pendiente.",
    correct:
      "Aumento de la Bmax por tratarse de un Up-Regulation heterólogo, sin modificaciones en la pendiente.",
  },
  {
    id: 21,
    title: "La potencia de un fármaco… :",
    option1: "antagonista no competitivo se puede expresar como CI50.",
    option2: "antagonista competitivo reversible se puede expresar como EC50.",
    option3: "agonista completo se puede expresar como IC50.",
    option4: "agonista parcial se puede expresar como CI50.",
    correct: "antagonista no competitivo se puede expresar como CI50.",
  },
  {
    id: 22,
    title:
      "El significado de la Kd, disociación de un ligando a su receptor es:",
    option1:
      "Corresponde a la concentración de fármaco en la cual el 10% de los receptores se hallan ocupados.",
    option2:
      "Corresponde a la concentración de fármaco en la cual el 50% de los receptores se hallan ocupados.",
    option3:
      "Corresponde a la concentración de fármaco en la cual el 75% de los receptores se hallan ocupados.",
    option4:
      "Corresponde a la concentración de fármaco en la cual el 100% de los receptores se hallan ocupados.",
    correct:
      "Corresponde a la concentración de fármaco en la cual el 50% de los receptores se hallan ocupados.",
  },
  {
    id: 23,
    title:
      "El propranolol es un antagonista β1 y β2 adrenérgico utilizado en el tratamiento de la hipertensión arterial. En su administración crónica puede desarrollarse la aparición de efectos secundarios como consecuencia de…",
    option1: "Regulación en más de los rc β post-sinápticos",
    option2: "Desensibilización de los rc β post-sinápticos",
    option3: "Aumento de la liberación de catecolaminas",
    option4: "Bloqueo de la liberación de noradrenalina",
    correct: "Regulación en más de los rc β post-sinápticos",
  },
  {
    id: 24,
    title:
      "Al administrar una dosis creciente de un antagonista competitivo de un fármaco agonista…",
    option1:
      "Se observará una disminución de la eficacia del fármaco agonista.",
    option2:
      "La curva de dosis-respuesta del agonista se desplazará hacia la izquierda.",
    option3:
      "Se observará un desplazamiento hacia la derecha de la curva dosis-respuesta del agonista, con disminución de la respuesta máxima.",
    option4:
      "Se observará un desplazamiento hacia la derecha de la curva dosis-respuesta del agonista, sin disminución de la respuesta máxima.",
    correct:
      "Se observará un desplazamiento hacia la derecha de la curva dosis-respuesta del agonista, sin disminución de la respuesta máxima.",
  },
  {
    id: 25,
    title:
      "En un experimento en el que se administra una sustancia a una dosis fija de un antagonista irreversible en presencia de concentraciones crecientes de un agonista, observamos que…",
    option1:
      "Se desplaza la curva dosis-respuesta del agonista hacia la derecha sin cambios en el Emax",
    option2:
      "Se desplaza la curva dosis-respuesta del agonista hacia la izquierda con cambios en el Emax",
    option3: "Disminuye la pendiente de la curva dosis-respuesta del agonista",
    option4: "Disminuye la respuesta máxima del agonista",
    correct: "Disminuye la respuesta máxima del agonista",
  },
  {
    id: 26,
    title:
      "Cuál de los siguientes ejemplos se corresponde con un antagonismo competitivo reversible?",
    option1: "El efecto del propranolol sobre los rc adrenérgicos",
    option2: "El efecto del propranolol sobre los rc muscarínicos",
    option3: "El efecto del isoproterenol sobre los rc adrenérgicos",
    option4: "El efecto de la acetilcolina sobre los rc nicotínicos",
    correct: "El efecto del propranolol sobre los rc adrenérgicos",
  },
  {
    id: 27,
    title:
      "Cuál de los siguientes ejemplos se corresponde con un antagonismo no competitivo?",
    option1: "El efecto del propranolol sobre los rc adrenérgicos",
    option2: "El efecto del propranolol sobre los rc muscarínicos",
    option3: "El efecto del isoproterenol sobre los rc adrenérgicos",
    option4: "El efecto de la acetilcolina sobre los rc nicotínicos",
    correct: "El efecto del propranolol sobre los rc muscarínicos",
  },
  {
    id: 28,
    title:
      "El metoprolol es un antagonista selectivo de los rc β1 adrenérgicos. En el tratamiento crónico de la hipertensión arterial puede observarse…",
    option1: "Regulación en más de los rc β1 postsinápticos.",
    option2: "Regulación en menos de los rc β1 postsinápticos.",
    option3: "Desensibilización de los rc β1 postsinápticos.",
    option4: "Aumento de la liberación de noradrenalina.",
    correct: "Regulación en más de los rc β1 postsinápticos.",
  },
  {
    id: 29,
    title: "En una gráfica semilogarítmica dosis-respuesta…",
    option1:
      "El eje Y representa la concentración de fármaco en moles por litro.",
    option2:
      "El eje X representa la respuesta biológica a cada dosis de fármaco.",
    option3:
      "El eje Y representa la respuesta biológica a cada dosis de fármaco.",
    option4:
      "El eje X representa la concentración de fármaco en mililitros por litro.",
    correct:
      "El eje Y representa la respuesta biológica a cada dosis de fármaco.",
  },
  {
    id: 30,
    title: "En relación a los antagonistas no competitivos es correcto que…",
    option1: "Bloquean la actividad del agonista incrementando la CE50",
    option2: "Bloquean la actividad del agonista sin modificar el Emax",
    option3: "Bloquean la actividad del agonista incrementando el Emax",
    option4: "Bloquean la actividad del agonista disminuyendo el Emax",
    correct: "Bloquean la actividad del agonista disminuyendo el Emax",
  },
  {
    id: 31,
    title: "Indique cuál de las siguientes afirmaciones es incorrecta…",
    option1:
      "Un antagonista no competitivo desplaza la curva dosis-respuesta del agonista hacia la derecha y disminuye la respuesta máxima.",
    option2:
      "Un antagonista reversible desplaza la curva dosis-respuesta del agonista hacia la derecha, sin modificar la respuesta máxima.",
    option3:
      "La presencia de un antagonista reversible aumenta la CE50 del agonista.",
    option4:
      "La presencia de un antagonista reversible aumenta la eficacia del agonista.",
    correct:
      "La presencia de un antagonista reversible aumenta la eficacia del agonista.",
  },
  {
    id: 32,
    title:
      "¿Qué prueba se utiliza para detectar la presencia de bacterias coliformes en el agua?",
    option1: "Prueba de coagulasa",
    option2: "Prueba de catalasa",
    option3: "Prueba de oxidasa",
    option4: "Prueba de fermentación de lactosa",
    correct: "Prueba de fermentación de lactosa",
  },
  {
    id: 33,
    title:
      "Se administra una droga A Ácida con pka 3 a un paciente. Considerando como pH urinario 6, se verá:",
    option1:
      "Aumento de la Fracción Ionizada (FI) de la droga A con una disminución de su excreción.",
    option2: "Aumento de la FI de la droga A con aumento en su excreción",
    option3:
      "Aumento de la Fracción No Ionizada (FNI) de la droga A con aumento en su excreción",
    option4: "Aumento de la FNI de la droga A con disminución en su excreción",
    correct: "Aumento de la FI de la droga A con aumento en su excreción",
  },
  {
    id: 34,
    title:
      "La droga X, que tiene una Vida media de 3 hs con eliminación exclusiva por metabolismo microsomal hepático y sin variaciones en el Volumen de distribución, se administra a tres grupos de pacientes. Grupo 1: metabolismo normal. Grupo 2: metabolismo acelerado. Grupo 3: metabolismo enlentecido. La meseta va a alcanzarse:",
    option1: "En todos los grupos al mismo tiempo",
    option2: "Primero en el grupo 1, a las 12 hs",
    option3: "Primero en el grupo 2, en menos de 12 hs",
    option4: "Primero en el grupo 3, en menos de 12 hs",
    correct: "Primero en el grupo 2, en menos de 12 hs",
  },
  {
    id: 35,
    title:
      "La absorción, distribución, metabolismo y excreción de un fármaco implican el paso a través de numerosas membranas celulares. Seleccione, de las siguientes características de la molécula, cual favorece más el pasaje a través de las mismas:",
    option1: "Liposolubilidad y grado de ionización.",
    option2: "Número de moléculas, liposolubilidad y grado de ionización.",
    option3:
      "Tamaño y estructura molecular, grado de ionización y liposolubilidad.",
    option4:
      "Estructura y tamaño molecular, grado de ionización y número de moléculas.",
    correct:
      "Tamaño y estructura molecular, grado de ionización y liposolubilidad.",
  },
  {
    id: 36,
    title:
      "La membrana plasmática es una barrera biológica compuesta, principalmente, por una bicapa de lípidos anfipáticos y proteínas de membrana enclavadas que cumplen múltiples funciones. Esta barrera es la que deben atravesar los fármacos durante su paso por el organismo. Seleccione la correcta con respecto a los mecanismos y/o modos de transporte a través de las membranas celulares:",
    option1:
      "La pinocitosis y la exocitosis son mecanismos transporte importantes para moléculas de cualquier tamaño.",
    option2:
      "La difusión facilitada es el mecanismo de transporte más comúnmente utilizado para los fármacos.",
    option3:
      "La reversibilidad y la bidireccionalidad son características propias de la difusión simple.",
    option4:
      "La difusión simple es el mecanismo de transporte más comúnmente utilizado por los fármacos.",
    correct:
      "La difusión simple es el mecanismo de transporte más comúnmente utilizado por los fármacos.",
  },
  {
    id: 37,
    title:
      "Muchos fármacos son ácidos o bases débiles que en solución acuosa están en forma ionizada y no ionizada. Seleccione la correcta con respecto a la influencia del medio en los fármacos ionizables.",
    option1:
      "La forma no ionizada de una base débil aumenta a medida que disminuye el ph del medio.",
    option2:
      "En estado estable, se acumulará un fármaco básico en el lado más básico de la membrana y viceversa.",
    option3:
      "La distribución de un electrolito débil depende de su pKa y el gradiente de ph a través de la membrana.",
    option4:
      "En estado estable se acumulará un fármaco ácido en el lado más ácido de la membrana y viceversa.",
    correct:
      "La distribución de un electrolito débil depende de su pKa y el gradiente de ph a través de la membrana.",
  },
  {
    id: 38,
    title:
      "La loratadina es un antagonista de los receptores de histamina utilizado para distintas formas de alergia. Su mecanismo de acción es el mismo que el de la difenhidramina (conocido popularmente como Benadryl), sin embargo, debido a que esta última es capaz de pasar a SNC, genera sedación como efecto colateral. ¿Cuál de las siguientes afirmaciones considera apropiada para explicar este hecho?",
    option1:
      "La loratadina es una base débil con un pKa de 4,33 que en el plasma (ph 6,5) se encuentra mayormente ionizada.",
    option2:
      "La loratadina es un ácido débil con un pKa de 4,33 que en el plasma (ph 6,5) se encuentra mayormente ionizada.",
    option3:
      "La loratadina es un ácido débil con un pKa de 6,5 que en el plasma (ph 6,5) se encuentra mayormente ionizada.",
    option4:
      "La loratadina es una base débil con un pKa de 6,5 que en el plasma (ph 6,5) se encuentra mayormente ionizada.",
    correct:
      "La loratadina es una base débil con un pKa de 6,5 que en el plasma (ph 6,5) se encuentra mayormente ionizada.",
  },
  {
    id: 39,
    title:
      "Aunque la difusión pasiva domina el movimiento a través de la membrana de la mayoría de los fármacos, los mecanismos mediados por transportador (transporte activo y difusión facilitada) también desempeñan funciones importantes. Seleccione la opción correcta respecto a los mecanismos de transporte de membrana mediados por proteínas:",
    option1:
      "Es saturable y, además, puede ser inhibido de forma competitiva por otros sustratos.",
    option2:
      "La velocidad de paso es, en general, más lenta que en la difusión pasiva.",
    option3:
      "La fuerza impulsora es siempre el gradiente electroquímico del soluto transportado.",
    option4:
      "La velocidad de paso, según la ley de Fick, será tanto mayor cuanto menor sea el tamaño de la molécula.",
    correct:
      "Es saturable y, además, puede ser inhibido de forma competitiva por otros sustratos.",
  },
  {
    id: 40,
    title:
      "Las drogas A y B se unen exclusivamente a la albúmina mientras que la droga C se une con alta afinidad a la alfa-1-glicoproteína ácida. La droga A tiene un pKa de 1, la droga B un pKa de 6 y la droga C un pKa de 4. ¿Cómo será la velocidad de absorción de estas tres drogas en el estómago (pKa 1,5)?",
    option1: "A>B>C",
    option2: "B>A>C",
    option3: "C>A>B",
    option4: "A>C>B",
    correct: "A>B>C",
  },
  {
    id: 41,
    title: "Señale la incorrecta",
    option1:
      "Como regla general una droga liposoluble tiene alta unión a proteínas, y tras el metabolismo hepático se vuelve hidrosoluble, con menor unión a proteínas, peor difusión de barreras y menor reabsorción renal.",
    option2:
      "Generalmente los metabolitos son inactivos o mucho menos activos, pero en ocasiones puede ser más activos, incluso más tóxicos.",
    option3:
      "Si el metabolito es más tóxico, tras inducir el metabolismo puede resultar la disminución de la toxicidad de la droga.",
    option4: "Todas son correctas.",
    correct:
      "Si el metabolito es más tóxico, tras inducir el metabolismo puede resultar la disminución de la toxicidad de la droga.",
  },
  {
    id: 42,
    title: "Respecto al transporte",
    option1:
      "La albúmina tiene mayor especificidad para transportar cualquier droga.",
    option2:
      "La alfa-1-glicoproteína ácida transporta con mayor capacidad las drogas ácidas.",
    option3:
      "La albúmina tiene mayor capacidad para transportar cualquier droga.",
    option4:
      "La alfa-1-glicoproteína ácida transporta con mayor afinidad las drogas ácidas.",
    correct:
      "La albúmina tiene mayor capacidad para transportar cualquier droga.",
  },
  {
    id: 43,
    title:
      "En un paciente con insuficiencia renal, se espera que la vida media de un fármaco eliminado por vía renal sea:",
    option1: "Más corta",
    option2: "Más larga",
    option3: "Igual",
    option4: "Depende de la fracción eliminada",
    correct: "Más larga",
  },
  {
    id: 44,
    title:
      "En una enfermedad hepática grave, se espera que la vida media de un fármaco metabolizado en el hígado sea:",
    option1: "Más corta",
    option2: "Igual",
    option3: "Más larga",
    option4: "Depende del grado de unión a proteínas",
    correct: "Más larga",
  },
  {
    id: 45,
    title:
      "Sobre la variabilidad de la respuesta farmacológica, señale la opción incorrecta:",
    option1:
      "La respuesta farmacológica puede ser distinta según la patología del paciente",
    option2: "La respuesta farmacológica varía según el sexo del paciente",
    option3: "La respuesta farmacológica varía según la edad del paciente",
    option4: "La respuesta farmacológica no varía según el peso del paciente",
    correct: "La respuesta farmacológica no varía según el peso del paciente",
  },
  {
    id: 46,
    title: "Sobre la farmacocinética en el embarazo, es incorrecto que:",
    option1:
      "El paso transplacentario de fármacos es mayor en el primer trimestre",
    option2: "El metabolismo hepático de los fármacos puede alterarse",
    option3: "La eliminación renal de los fármacos puede alterarse",
    option4: "El volumen de distribución de los fármacos puede alterarse",
    correct:
      "El paso transplacentario de fármacos es mayor en el primer trimestre",
  },
  {
    id: 47,
    title: "Sobre la farmacocinética en neonatos, es incorrecto que:",
    option1: "El metabolismo hepático está disminuido",
    option2: "Eliminación renal disminuida",
    option3: "Volumen de distribución aumentado",
    option4: "Absorción gastrointestinal aumentada",
    correct: "Absorción gastrointestinal aumentada",
  },
  {
    id: 48,
    title: "Sobre la farmacocinética en ancianos, es incorrecto que:",
    option1: "Eliminación renal disminuida",
    option2: "Metabolismo hepático disminuido",
    option3: "Volumen de distribución aumentado",
    option4: "Absorción gastrointestinal disminuida",
    correct: "Volumen de distribución aumentado",
  },
  {
    id: 49,
    title:
      "En un paciente obeso, respecto a los fármacos lipofílicos, se espera que el volumen de distribución:",
    option1: "Aumente",
    option2: "Disminuya",
    option3: "Permanezca igual",
    option4: "Varíe según el grado de unión a proteínas",
    correct: "Aumente",
  },
  {
    id: 50,
    title: "La fracción de eliminación (Ke) de un fármaco se define como:",
    option1: "La fracción de la dosis eliminada por minuto",
    option2: "La fracción de la concentración plasmática eliminada por minuto",
    option3: "La fracción de la dosis absorbida por minuto",
    option4: "La fracción de la concentración plasmática absorbida por minuto",
    correct: "La fracción de la concentración plasmática eliminada por minuto",
  },
  {
    id: 51,
    title: "El aclaramiento de un fármaco (Cl) se define como:",
    option1: "El volumen de plasma del cual se elimina el fármaco por minuto",
    option2: "El volumen de plasma del cual se absorbe el fármaco por minuto",
    option3: "El volumen de sangre del cual se elimina el fármaco por minuto",
    option4: "El volumen de sangre del cual se absorbe el fármaco por minuto",
    correct: "El volumen de plasma del cual se elimina el fármaco por minuto",
  },
  {
    id: 52,
    title: "La biodisponibilidad de un fármaco se define como:",
    option1:
      "El porcentaje de la dosis administrada que alcanza la circulación sistémica",
    option2:
      "El porcentaje de la dosis administrada que se elimina por el riñón",
    option3:
      "El porcentaje de la dosis administrada que se metaboliza en el hígado",
    option4:
      "El porcentaje de la dosis administrada que se une a proteínas plasmáticas",
    correct:
      "El porcentaje de la dosis administrada que alcanza la circulación sistémica",
  },
  {
    id: 53,
    title: "Señale la incorrecta",
    option1:
      "Una droga con volumen de distribución muy alto, está muy concentrada en el plasma",
    option2:
      "Una droga con volumen de distribución muy alto, tiene poca concentración en el plasma",
    option3:
      "Una droga con volumen de distribución bajo, se encuentra principalmente en el plasma",
    option4:
      "Una droga con volumen de distribución bajo, tiene alta concentración en el plasma",
    correct:
      "Una droga con volumen de distribución muy alto, está muy concentrada en el plasma",
  },
  {
    id: 54,
    title: "Sobre la farmacodinamia, es incorrecto que:",
    option1:
      "Los fármacos pueden actuar por mecanismos distintos a la unión a receptores",
    option2: "Todos los fármacos actúan uniéndose a receptores específicos",
    option3: "Un mismo fármaco puede tener más de un sitio de acción",
    option4:
      "La acción de un fármaco puede depender de la interacción con enzimas",
    correct: "Todos los fármacos actúan uniéndose a receptores específicos",
  },
  {
    id: 55,
    title: "Un agonista parcial es:",
    option1: "Un fármaco que se une a un receptor y lo activa al máximo",
    option2: "Un fármaco que se une a un receptor pero no lo activa",
    option3:
      "Un fármaco que se une a un receptor y lo activa, pero no al máximo",
    option4: "Un fármaco que se une a un receptor y lo bloquea",
    correct:
      "Un fármaco que se une a un receptor y lo activa, pero no al máximo",
  },
  {
    id: 56,
    title: "Un antagonista competitivo:",
    option1: "Se une al receptor en un sitio distinto al agonista",
    option2: "Se une al receptor en el mismo sitio que el agonista",
    option3: "Se une al receptor y lo activa",
    option4: "Se une al receptor y lo bloquea de manera irreversible",
    correct: "Se une al receptor en el mismo sitio que el agonista",
  },
  {
    id: 57,
    title: "Un antagonista no competitivo:",
    option1: "Se une al receptor en el mismo sitio que el agonista",
    option2: "Se une al receptor y lo activa",
    option3: "Se une al receptor en un sitio distinto al agonista",
    option4: "Se une al receptor y lo bloquea de manera reversible",
    correct: "Se une al receptor en un sitio distinto al agonista",
  },
  {
    id: 58,
    title: "La potencia de un fármaco se refiere a:",
    option1: "La cantidad de fármaco necesaria para producir un efecto",
    option2: "La capacidad del fármaco para producir un efecto máximo",
    option3: "La velocidad con la que el fármaco produce un efecto",
    option4: "La duración del efecto del fármaco",
    correct: "La cantidad de fármaco necesaria para producir un efecto",
  },
  {
    id: 59,
    title: "La eficacia de un fármaco se refiere a:",
    option1: "La cantidad de fármaco necesaria para producir un efecto",
    option2: "La capacidad del fármaco para producir un efecto máximo",
    option3: "La velocidad con la que el fármaco produce un efecto",
    option4: "La duración del efecto del fármaco",
    correct: "La capacidad del fármaco para producir un efecto máximo",
  },
  {
    id: 60,
    title: "La selectividad de un fármaco se refiere a:",
    option1: "La capacidad del fármaco para unirse a un receptor específico",
    option2: "La cantidad de fármaco necesaria para producir un efecto",
    option3: "La velocidad con la que el fármaco produce un efecto",
    option4: "La duración del efecto del fármaco",
    correct: "La capacidad del fármaco para unirse a un receptor específico",
  },
  {
    id: 61,
    title:
      "¿Cuál de las siguientes afirmaciones es incorrecta respecto a los opioides?",
    option1:
      "La codeína es un agonista parcial muy útil como agente antitusivo",
    option2:
      "El fentanilo es un agonista sintético, hasta 80 veces más potente que la morfina",
    option3:
      "La nalbufina es un agonista completo de receptores Mu, muy útil para el tratamiento del dolor",
    option4:
      "El dextropropoxifeno es un opioide mucho más potente que la morfina y por ende con mayor frecuencia de efectos adversos",
    correct:
      "El dextropropoxifeno es un opioide mucho más potente que la morfina y por ende con mayor frecuencia de efectos adversos",
  },
  {
    id: 62,
    title: "¿A cuántos mg de betametasona equivalen 125 mg de Triamcinolona?",
    option1: "167",
    option2: "23",
    option3: "74",
    option4: "130",
    correct: "167",
  },
  {
    id: 63,
    title:
      "¿Cuál de los siguientes es un efecto adverso característico del Rasburicase?",
    option1: "Diarrea",
    option2: "Depresión de médula ósea",
    option3: "Hipersensibilidad",
    option4: "Cefaleas frontales",
    correct: "Hipersensibilidad",
  },
  {
    id: 64,
    title:
      "Indique qué AINE sería de elección como analgésico en una paciente embarazada de 30 semanas:",
    option1: "Indometacina",
    option2: "Ketorolac",
    option3: "AAS",
    option4: "Paracetamol",
    correct: "Paracetamol",
  },
  {
    id: 65,
    title:
      "¿Qué relajante muscular usaría en un paciente con insuficiencia renal?",
    option1: "Atracurio",
    option2: "Succinilcolina",
    option3: "Pancuronio",
    option4: "Mivacurio",
    correct: "Atracurio",
  },
  {
    id: 66,
    title:
      "Llega a la guardia de su hospital un paciente en coma, con pupilas mióticas y depresión respiratoria. ¿Qué conducta tomaría?",
    option1: "Sospecha una intoxicación con opioides e indica naloxona iv",
    option2: "Sospecha una intoxicación con organofosforados e indica atropina",
    option3:
      "Sospecha una intoxicación con opioides e indica naltrexona vía oral",
    option4:
      "Sospecha una intoxicación con organofosforados e indica pralidoxima",
    correct: "Sospecha una intoxicación con opioides e indica naloxona iv",
  },
  {
    id: 67,
    title: "Con respecto a los opioides, es correcto afirmar que:",
    option1:
      "La codeína es un agonista parcial muy útil como agente antitusivo",
    option2:
      "El fentanilo es un agonista sintético, hasta 80 veces más potente que la morfina",
    option3:
      "La nalbufina es un agonista completo de receptores Mu, muy útil para el tratamiento del dolor",
    option4:
      "El dextropropoxifeno es un opioide mucho más potente que la morfina y por ende con mayor frecuencia de efectos adversos",
    correct:
      "El fentanilo es un agonista sintético, hasta 80 veces más potente que la morfina",
  },
  {
    id: 68,
    title:
      "¿Qué estrategia terapéutica no es útil para minimizar la inhibición del eje Hipotalamo-Hipofiso-Adrenal en un tratamiento prolongado con corticoides?",
    option1:
      "Administrar 2/4 de la dosis en la mañana, 1/4 en la tarde y 1/4 en la cena",
    option2: "Utilizarlos por vía tópica o inhalatoria",
    option3: "Utilizar la mínima dosis posible",
    option4: "Administrar el fármaco en días alternos",
    correct:
      "Administrar 2/4 de la dosis en la mañana, 1/4 en la tarde y 1/4 en la cena",
  },
  {
    id: 69,
    title: "El rasburicase es un fármaco utilizado para:",
    option1: "Tratamiento del dolor, muy útil como analgésico",
    option2:
      "Tratamiento del asma infantil, muy útil para tratamientos crónicos",
    option3:
      "Tratamiento de hiperuricemia maligna, ya que cataliza la oxidación de ácido úrico a alantoína",
    option4:
      "Tratamiento del ataque agudo de gota, ya que es útil como uricosúrico",
    correct:
      "Tratamiento de hiperuricemia maligna, ya que cataliza la oxidación de ácido úrico a alantoína",
  },
  {
    id: 70,
    title:
      "En un paciente en tratamiento crónico con corticoides vía oral, puedo observar como efecto adverso todos los siguientes menos:",
    option1: "Aspecto cushingoide",
    option2: "Osteoporosis",
    option3: "Alteraciones cutáneas",
    option4: "Hipoglucemia",
    correct: "Hipoglucemia",
  },
  {
    id: 71,
    title: "El mecanismo de acción de la lidocaína reside en:",
    option1: "El bloqueo de canales de Calcio voltaje dependiente",
    option2: "La estimulación de receptores Mu",
    option3: "El bloqueo de canales de sodio voltaje dependiente",
    option4: "La estimulación de receptores NMDA",
    correct: "El bloqueo de canales de sodio voltaje dependiente",
  },
  {
    id: 72,
    title:
      "La hipertermia maligna es una condición patológica que se presenta principalmente al asociar:",
    option1: "Lidocaína y atracurio",
    option2: "Pancuronio y bupivacaína",
    option3: "Halotano y succinilcolina",
    option4: "Sevofluorano y propofol",
    correct: "Halotano y succinilcolina",
  },
  {
    id: 73,
    title:
      "En cuanto a la dipirona, ¿cuál de las siguientes afirmaciones es incorrecta?",
    option1: "Es un AINE derivado de la anilina con poco efecto antipirético",
    option2: "Es un AINE que se encuentra dentro del grupo de las pirazolonas",
    option3: "Es muy útil como antipirético y analgésico",
    option4:
      "Puede producir como efecto adverso agranulocitosis y shock anafiláctico",
    correct: "Es un AINE derivado de la anilina con poco efecto antipirético",
  },
  {
    id: 74,
    title: "Respecto a los inhibidores selectivos de la COX-2:",
    option1:
      "Tienen mayor riesgo de producir efectos adversos a nivel gastrointestinal que los AINE que actúan sobre la COX-1",
    option2:
      "A bajas dosis, se utilizan como profilaxis para eventos cardioembólicos",
    option3:
      "Producen eventos tromboembólicos como uno de sus efectos adversos más graves",
    option4: "El celecoxib presenta una vida media de aproximadamente 48 horas",
    correct: "El celecoxib presenta una vida media de aproximadamente 48 horas",
  },
  {
    id: 75,
    title:
      "Ordene los siguientes fármacos según su riesgo de provocar lesión gastrointestinal (de menor riesgo a mayor riesgo):",
    option1: "Ibuprofeno – Celecoxib – Indometacina – Ketorolac",
    option2: "Ibuprofeno – Indometacina – Ketorolac – Celecoxib",
    option3: "Celecoxib – Indometacina – Ibuprofeno – Ketorolac",
    option4: "Celecoxib – Ibuprofeno – Indometacina – Ketorolac",
    correct: "Celecoxib – Ibuprofeno – Indometacina – Ketorolac",
  },
  {
    id: 76,
    title:
      "¿Cuál de las siguientes son acciones farmacológicas de los glucocorticoides?",
    option1: "Generan un aumento de la inmunidad ya que producen neutrofilia",
    option2:
      "Son inmunosupresores, pero generan aumento de la respuesta alérgica, ya que hay más ácido araquidónico disponible hacia la vía de leucotrienos",
    option3:
      "Son pro-inflamatorios ya que inhiben la expresión de COX-1 pero no de COX-2 en tejidos inflamados",
    option4:
      "Solo son antipiréticos si la fiebre corresponde a reacciones inflamatorias, pero no pueden evitar el efecto piretógeno de las endotoxinas",
    correct:
      "Son inmunosupresores, pero generan aumento de la respuesta alérgica, ya que hay más ácido araquidónico disponible hacia la vía de leucotrienos",
  },
  {
    id: 77,
    title:
      "¿Respecto a los glucocorticoides, cuál de los siguientes corresponde a un efecto adverso agudo?",
    option1: "Osteoporosis",
    option2: "Psicosis",
    option3: "Pérdida de masa muscular",
    option4: "Formación de estrías",
    correct: "Psicosis",
  },
  {
    id: 78,
    title:
      "¿Cuál de los siguientes no es un efecto adverso debido al uso prolongado de los glucocorticoides?",
    option1: "Osteoporosis",
    option2: "Hipertensión arterial",
    option3: "Insuficiencia suprarrenal aguda",
    option4: "Cataratas",
    correct: "Insuficiencia suprarrenal aguda",
  },
  {
    id: 79,
    title:
      "Elida, de 64 años, se encuentra tomando glucocorticoides y aspirina desde hace más de un año. El sábado por la mañana sufre una fractura de cadera debido a una caída de su propia altura y, debido a esto, es internada para someterse a una cirugía de reemplazo. Seleccione la conducta adecuada en relación con la medicación que se encuentra tomando la paciente.",
    option1:
      "Debería disminuirse de forma gradual la dosis del glucocorticoide y suspender la aspirina 10 días antes de la cirugía.",
    option2:
      "Debería suspenderse la administración de aspirina y aumentar la dosis del glucocorticoide 10 días antes de la cirugía.",
    option3:
      "Debería suspenderse la administración de aspirina y mantener la misma dosis del glucocorticoide durante la cirugía.",
    option4:
      "Debería aumentarse la dosis del glucocorticoide antes de la intervención y suspenderse la administración de aspirina 10 días antes de la cirugía",
    correct:
      "Debería suspenderse la administración de aspirina y mantener la misma dosis del glucocorticoide durante la cirugía.",
  },
  {
    id: 80,
    title:
      "¿Cuál de las siguientes drogas puede disminuir la eficacia del probenecid?",
    option1: "Paracetamol",
    option2: "Morfina",
    option3: "Colchicina",
    option4: "Aspirina",
    correct: "Aspirina",
  },
  {
    id: 81,
    title:
      "¿Cuál de los siguientes fármacos utilizaría como tratamiento de una hiperuricemia secundaria a un síndrome de lisis tumoral?",
    option1: "Colchicina",
    option2: "Benzbromarona",
    option3: "Febuxostat",
    option4: "Rasburicasa",
    correct: "Rasburicasa",
  },
  {
    id: 82,
    title: "¿Cuál de los siguientes no es un efecto adverso de la morfina?",
    option1: "Bradicardia e hipotensión ortostática",
    option2: "Incontinencia urinaria",
    option3: "Disminución del peristaltismo y secreciones",
    option4: "Disminución de las contracciones en el útero gravídico",
    correct: "Disminución de las contracciones en el útero gravídico",
  },
  {
    id: 83,
    title:
      "La Buprenorfina es un fármaco utilizado en el proceso de deshabituación opioidea al igual que la Metadona, pero a diferencia de esta última tienen menos probabilidades de provocar una intoxicación opioidea. ¿A qué se debe esto?",
    option1: "A su muy baja biodisponibilidad por vía oral",
    option2: "A su actividad intrínseca < 1",
    option3: "A su rápida metabolización hepática",
    option4: "A su alta interacción con otras drogas",
    correct: "A su actividad intrínseca < 1",
  },
  {
    id: 84,
    title: "En cuanto a la morfina:",
    option1: "Su metabolito más activo es la morfina-3-glucurónido",
    option2: "Se puede administrar por vía intratecal",
    option3:
      "Es uno de los opioides que no produce constipación como efecto adverso",
    option4: "Un signo típico de su intoxicación es la midriasis arreactiva",
    correct: "Su metabolito más activo es la morfina-3-glucurónido",
  },
  {
    id: 85,
    title: "Respecto a los objetivos de la anestesia, indique la correcta:",
    option1:
      "Bloqueo sensitivo (analgesia), para el cual puedo usar drogas como atropina",
    option2:
      "Bloqueo de la conciencia (sedación), para la cual puedo usar opioides",
    option3: "Bloqueo autonómico, puedo usar benzodiacepinas",
    option4: "Bloqueo motor, para el cual puedo usar relajantes musculares",
    correct:
      "Bloqueo de la conciencia (sedación), para la cual puedo usar opioides",
  },
  {
    id: 86,
    title:
      "¿Cuál de los siguientes es un líquido volátil utilizado en anestesia?",
    option1: "Ciclopropano",
    option2: "Tiopental sódico",
    option3: "Sevofluorano",
    option4: "Ketamina",
    correct: "Sevofluorano",
  },
  {
    id: 87,
    title: "¿Qué relajante usaría ante un paciente con falla renal?",
    option1:
      "Atracurio porque se metaboliza a nivel hepático y se elimina vía biliar",
    option2: "Tubocurarina (curare) ya que no tiene metabolismo activo",
    option3: "Pancuronio ya que sufre degradación de hoffman",
    option4: "Atracurio ya que sufre degradación de hoffman",
    correct: "Atracurio ya que sufre degradación de hoffman",
  },
];

export function get_Fisio_Question() {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  let randomNumber = getRandomInt(1, 40);
  let randomQuestion = fisioQuestions.find((e) => e.id === randomNumber);

  return {
    type: FETCH_QUESTION,
    payload: randomQuestion,
  };
}

export function get_Farmaco_Question() {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  let randomNumber = getRandomInt(1, 40);
  let randomQuestion = farmacoQuestions.find((e) => e.id === randomNumber);

  return {
    type: FETCH_QUESTION,
    payload: randomQuestion,
  };
}

export function get_Micro_Question() {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  let randomNumber = getRandomInt(1, 90);
  let randomQuestion = microQuestions.find((e) => e.id === randomNumber);

  return {
    type: FETCH_QUESTION,
    payload: randomQuestion,
  };
}

export function get_Fisio_Question_List(search) {
  return function (dispatch) {
    axios(`/videogames?name=${search}`).then((res) =>
      dispatch({ type: FETCH_LIST, payload: res.data })
    );
  };
}
