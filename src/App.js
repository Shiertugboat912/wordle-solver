import './App.css';
import Grid from './components/grid.jsx';
import Suggest from './components/suggest';
import a from './data/data.js'
import React, { useState } from 'react';
import { Helmet } from 'react-helmet'
var globiter = 1;
var notinlist = [];
var istherebutnotcorrect = [];
var found = [];
var words;
console.log(a.length, a[0])
function check(word, x1, x2, x3, x4, x5) {
  word = word.toLowerCase();
  let wordinfo = {};
  wordinfo[word[0]] = { let: word[0], isthere: inthere(x1.style.backgroundColor), index: 0 };
  wordinfo[word[1]] = { let: word[1], isthere: inthere(x2.style.backgroundColor), index: 1 };
  wordinfo[word[2]] = { let: word[2], isthere: inthere(x3.style.backgroundColor), index: 2 };
  wordinfo[word[3]] = { let: word[3], isthere: inthere(x4.style.backgroundColor), index: 3 };
  wordinfo[word[4]] = { let: word[4], isthere: inthere(x5.style.backgroundColor), index: 4 };

  console.log(wordinfo);

  for (let x of Object.keys(wordinfo)) {
    if (wordinfo[x].isthere === 0)
      notinlist.push(wordinfo[x]);
    else if (wordinfo[x].isthere === 1)
      istherebutnotcorrect.push(wordinfo[x]);
    else if (wordinfo[x].isthere === 2)
      found.push(wordinfo[x]);
  }


  words = getwords(word);
  words = words.join(", ");
  console.log(words);

  return words;



}

function getwords(word) {
  let answer = new Set(a);
  for (let i of notinlist) {
    for (let x of answer) {
      if (x.includes(i.let)) {
        answer.delete(x);
      }
    }
  }

  for (let i of istherebutnotcorrect) {
    for (let x of answer) {
      if (x[i.index] === i.let)
        answer.delete(x);
      if (!x.includes(i.let))
        answer.delete(x);
    }
  }
  for (let i of found) {
    for (let x of answer) {
      if (x[i.index] !== i.let)
        answer.delete(x);
    }
  }


  let t = [...answer];

  return t;
}

function inthere(colour) {
  if (colour === "grey")
    return 0;
  if (colour === "yellow")
    return 1
  if (colour === "green")
    return 2

  return -1;

}
function checknSuggest() {
  console.log("checknSuggest");
  let x1, x2, x3, x4, x5, wordtocheck;
  switch (globiter) {
    case 1:
      x1 = document.getElementById("1");
      x2 = document.getElementById("2");
      x3 = document.getElementById("3");
      x4 = document.getElementById("4");
      x5 = document.getElementById("5");

      wordtocheck = x1.value + x2.value + x3.value + x4.value + x5.value;

      x1.disabled = true;
      x2.disabled = true;
      x3.disabled = true;
      x4.disabled = true;
      x5.disabled = true;
      console.log(wordtocheck);
      break;
    case 2:
      x1 = document.getElementById("6");
      x2 = document.getElementById("7");
      x3 = document.getElementById("8");
      x4 = document.getElementById("9");
      x5 = document.getElementById("10");

      wordtocheck = x1.value + x2.value + x3.value + x4.value + x5.value;

      x1.disabled = true;
      x2.disabled = true;
      x3.disabled = true;
      x4.disabled = true;
      x5.disabled = true;
      console.log(wordtocheck);
      break;
    case 3:
      x1 = document.getElementById("11");
      x2 = document.getElementById("12");
      x3 = document.getElementById("13");
      x4 = document.getElementById("14");
      x5 = document.getElementById("15");

      wordtocheck = x1.value + x2.value + x3.value + x4.value + x5.value;

      x1.disabled = true;
      x2.disabled = true;
      x3.disabled = true;
      x4.disabled = true;
      x5.disabled = true;
      console.log(wordtocheck);
      break;
    case 4:
      x1 = document.getElementById("16");
      x2 = document.getElementById("17");
      x3 = document.getElementById("18");
      x4 = document.getElementById("19");
      x5 = document.getElementById("20");

      wordtocheck = x1.value + x2.value + x3.value + x4.value + x5.value;

      x1.disabled = true;
      x2.disabled = true;
      x3.disabled = true;
      x4.disabled = true;
      x5.disabled = true;
      console.log(wordtocheck);
      break;
    case 5:
      x1 = document.getElementById("21");
      x2 = document.getElementById("22");
      x3 = document.getElementById("23");
      x4 = document.getElementById("24");
      x5 = document.getElementById("25");

      wordtocheck = x1.value + x2.value + x3.value + x4.value + x5.value;

      x1.disabled = true;
      x2.disabled = true;
      x3.disabled = true;
      x4.disabled = true;
      x5.disabled = true;
      console.log(wordtocheck);
      break;
    case 6:
      x1 = document.getElementById("26");
      x2 = document.getElementById("27");
      x3 = document.getElementById("28");
      x4 = document.getElementById("29");
      x5 = document.getElementById("30");

      wordtocheck = x1.value + x2.value + x3.value + x4.value + x5.value;

      x1.disabled = true;
      x2.disabled = true;
      x3.disabled = true;
      x4.disabled = true;
      x5.disabled = true;
      console.log(wordtocheck);
      break;

    default:
      break;



  }
  globiter++;


  return check(wordtocheck, x1, x2, x3, x4, x5);

}
function App() {

  const [words, setWords] = useState("");

  return (

    <div className='cont'>
      <Helmet>
        <title>Wordle-solver</title>
      </Helmet>
      <h1>Wordle Solver Lite</h1>
      <Grid />
      <br></br>
      <button onClick={() => setWords(checknSuggest)}>submit</button>
      <p>
        Possible Answers:<br />{words}</p>
    </div >


  );
}

export default App;
