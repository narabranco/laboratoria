function checkAnswer1() {
  const elemento = document.getElementById("ialt2_1");
  console.log(elemento.checked);
  const score1 = 0;
  score1.value = sessionStorage.getItem("autosave");

  if (elemento.checked) {
    score1 = 1;
    alert("Parabéns, resposta certa!");
  } else {
    score1 = 0;
    alert("Resposta errada :(");
  }
  return score1;
}

function checkAnswer2() {
  const elemento = document.getElementById("ialt4_2");
  console.log(elemento.checked);
  var score2 = 0;

  if (elemento.checked) {
    score2 = 1;
    alert("Parabéns, resposta certa!");
  } else {
    score2 = 0;
    alert("Resposta errada :(");
  }
  return score2;
}
 
function checkAnswer3() {
  const elemento = document.getElementById("ialt1_3");
  console.log(elemento.checked);
  var score3 = 0;

  if (elemento.checked) {
    score3 = 1;
    alert("Parabéns, resposta certa!");
  } else {
    score3 = 0;
    alert("Resposta errada :(");
  }
  return score3;
}
    
function checkAnswer4() {
  const elemento = document.getElementById("ialt3_4");
  console.log(elemento.checked);
  var score4 = 0;

  if (elemento.checked) {
    score4 = 1;
    alert("Parabéns, resposta certa!");
  } else {
    score4 = 0;
    alert("Resposta errada :(");
  }
  return score4;
}

function checkAnswerPlus(score1, score2, score3, score4) {
  const somaScore = score1 + score2 + score3 + score4;
  alert("A soma do seu Score foi: " + somaScore);
}