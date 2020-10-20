const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

<<<<<<< HEAD
const titleCased = () => {
  return tutorials.map(titleCase => titleCase.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '))
=======
const titleCased = (tutorials.map(function (tutorial) => {
  tutorial = tutorial.split(' ');
  for (let i = 0; i < tutorial.length; i++) {
    tutorial[i] = tutorial[i].charAt(0).toUpperCase() + tutorial[i].slice(1);
  }
  return tutorial.join(' ');
>>>>>>> 9c9c18585f00767c22a63b6a9b248e2ce2d48fd7
}

