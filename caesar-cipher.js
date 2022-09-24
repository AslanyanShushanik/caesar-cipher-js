function getCipherLetter(
  characterCode,
  shift,
  startingCode,
  endingCode,
  encode
) {
  let quantity = endingCode - startingCode + 1;
  if (shift > quantity) shift = shift % quantity;
  if (!encode) shift = -shift;
  let shiftedIndx = (characterCode + shift) % (quantity + startingCode);
  if (shiftedIndx < startingCode && shift >= 0) {
    shiftedIndx += startingCode;
  }
  if (shiftedIndx < startingCode && shift < 0) {
    shiftedIndx = endingCode + shift + characterCode - startingCode + 1;
  }
  return String.fromCharCode(shiftedIndx);
}

function caesarCipher(text, shift, encode) {
  let cipheredText = "";
  for (let i = 0; i < text.length; i++) {
    let characterCode = text[i].charCodeAt(0);
    if (characterCode >= 48 && characterCode <= 57) {
      // numbers
      cipheredText += getCipherLetter(characterCode, shift, 48, 57, encode);
    } else if (characterCode >= 65 && characterCode <= 90) {
      // uppercase letters
      cipheredText += getCipherLetter(characterCode, shift, 65, 90, encode);
    } else if (characterCode >= 97 && characterCode <= 122) {
      // lowercase letters
      cipheredText += getCipherLetter(characterCode, shift, 97, 122, encode);
    } else {
      cipheredText += text[i];
    }
  }
  return cipheredText;
}

const encoded = caesarCipher(
  "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG 4 7 0 the quick brown fox jumps over the lazy dog",
  3,
  true
);
const decoded = caesarCipher(encoded, 3, false);

console.log(
  "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG 4 7 0 the quick brown fox jumps over the lazy dog"
);

const encodedLeft = caesarCipher(
  "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG 4 7 0 the quick brown fox jumps over the lazy dog",
  -3,
  true
);
const decodedLeft = caesarCipher(encodedLeft, -3, false);

// console.log(encoded);
// console.log(decoded);
// console.log(encodedLeft);
// console.log(decodedLeft);
