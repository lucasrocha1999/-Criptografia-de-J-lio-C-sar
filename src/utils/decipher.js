/* eslint-disable no-unused-vars */
const decipherCaractere = (alfabetoArray, caractere, number) => {
  const position = alfabetoArray.indexOf(caractere);
  // Não é uma letra
  if (position < 0) {
    return caractere;
  }
  const positionDecoded = position - number;
  //verifica se será necessario pegar de forma 'reversa'
  if (positionDecoded >= 0) {
    return alfabetoArray[positionDecoded];
  } else {
    return alfabetoArray[alfabetoArray.length - positionDecoded * -1];
  }
};

export default function deciphered(number, text) {
  //gerando alfabeto lowercase
  const alfabetoArray = new Array(26)
    .fill(null)
    .map((_, index) => String.fromCharCode(97 + index));
  //gerando array da string convertido para lowercase
  const stringArray = text.toLowerCase().split("");
  const phraseDecipher = stringArray.reduce((frase, caractere) => {
    return (frase += decipherCaractere(alfabetoArray, caractere, number));
  }, "");
  return phraseDecipher;
}
