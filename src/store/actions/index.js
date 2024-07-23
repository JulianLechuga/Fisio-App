import { fisioQuestions, farmacoQuestions, microQuestions, microBacteriumQuestions, microFungiQuestions, microVirusQuestions } from "../../constants/questions"
export const FETCH_QUESTION = "FETCH_QUESTION";
export const FETCH_LIST = "FETCH_LIST";
export const GENERATE_EXAM = "GENERATE_EXAM";
export const RESET_EXAM = "RESET_EXAM";

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

export function get_Micro_Virus_Question() {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  let randomNumber = getRandomInt(1, 90);
  let randomQuestion = microVirusQuestions.find((e) => e.id === randomNumber);

  return {
    type: FETCH_QUESTION,
    payload: randomQuestion,
  };
}

export function get_Micro_Bacterium_Question() {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  let randomNumber = getRandomInt(1, 90);
  let randomQuestion = microBacteriumQuestions.find((e) => e.id === randomNumber);

  return {
    type: FETCH_QUESTION,
    payload: randomQuestion,
  };
}

export function get_Micro_Fungi_Question() {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  let randomNumber = getRandomInt(1, 90);
  let randomQuestion = microFungiQuestions.find((e) => e.id === randomNumber);

  return {
    type: FETCH_QUESTION,
    payload: randomQuestion,
  };
}

export function generate_exam_model(subject, amount = 40) {
  if (!subject) {
    throw new Error('No se especificó el tema');
  }
  let questionsArray;
  if (subject === 'fisio') {
    questionsArray = fisioQuestions;
  } else if (subject === 'farmaco') {
    questionsArray = farmacoQuestions;
  } else if (subject === 'micro') {
    questionsArray = microQuestions;
  } else if (subject === 'microvirus') {
    questionsArray = microVirusQuestions;
  } else if (subject === 'microfungi') {
    questionsArray = microFungiQuestions;
  } else if (subject === 'microbacterium') {
    questionsArray = microBacteriumQuestions;
  } else {
    throw new Error('No se especificó el tema');
  }

  const randomQuestions = [];
  const totalQuestions = questionsArray.length;
  for (let i = 0; i < amount; i++) {
    const randomIndex = Math.floor(Math.random() * totalQuestions);
    randomQuestions.push(questionsArray[randomIndex]);
  }

  return {
    type: GENERATE_EXAM,
    payload: randomQuestions,
  };
}

export function reset_exam() {

  return {
    type: RESET_EXAM,
    payload: [],
  };
}