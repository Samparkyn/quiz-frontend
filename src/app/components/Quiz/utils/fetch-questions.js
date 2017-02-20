export function fetchQuestions() {
  return fetch('http://localhost:3000/quiz/questions')
  .then(res => res.json())
  .catch(error => {
    console.error(error);
  });
}
