let nota1 = 6;
let nota2 = 7;
let nota3 = 8;
let nota4 = 5;
        
  let media_final = (nota1 + nota2 + nota3 + nota4) / 4;
        
  if (media_final >= 7) {
            console.log("Média: " + media_final + " - Situação: Aprovado");
  } else if (media_final >= 5) {
            console.log("Média: " + media_final + " - Situação: Recuperação");
  } else {
            console.log("Média: " + media_final + " - Situação: Reprovado");
