const resultEl = document.querySelector("#result");
const lengthEl = document.querySelector("#length");
const uppercaseEl = document.querySelector("#uppercase");
const lowercaseEl = document.querySelector("#lowercase");
const numbersEl = document.querySelector("#numbers");
const symbolsEl = document.querySelector("#symbols");
const generateEl = document.querySelector("#generate");
const clipboardEl = document.querySelector("#clipboard");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

clipboardEl.addEventListener("click", () => {
  const password = resultEl.innerHTML;
  if (!password) {
    return;
  }
  navigator.clipboard.writeText(password).then(() => {
    alert("Password copied to clipboard!");
  });
  // const textarea = document.createElement("textarea");
  // textarea.value = password;
  // document.body.appendChild(textarea);
  // textarea.select();
  // document.execCommand("copy");
  // textarea.remove();
});

generateEl.addEventListener("click", (e) => {
  e.preventDefault();
  let password = "";
  if (
    uppercaseEl.checked ||
    lowercaseEl.checked ||
    numbersEl.checked ||
    symbolsEl.checked
  )
    for (let i = 0; i < +lengthEl.value; ) {
      let j = 0;
      if (j % 4 === 0 && uppercaseEl.checked && i < +lengthEl.value) {
        password += randomFunc.upper();
        i++;
      }
      j++;
      if (j % 4 === 1 && lowercaseEl.checked && i < +lengthEl.value) {
        password += randomFunc.lower();
        i++;
      }
      j++;

      if (j % 4 === 2 && numbersEl.checked && i < +lengthEl.value) {
        password += randomFunc.number();
        i++;
      }
      j++;

      if (j % 4 === 3 && symbolsEl.checked && i < +lengthEl.value) {
        password += randomFunc.symbol();
        i++;
      }
    }
  resultEl.innerText = password;
});

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
  const symbols = "~!@#$%^&*()_+=-{}[]:;`,./?";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// generateEl.addEventListener("click", () => {
//   const length = +lengthEl.value;
//   const hasLower = lowercaseEl.checked;
//   const hasUpper = uppercaseEl.checked;
//   const hasNumber = numbersEl.checked;
//   const hasSymbol = symbolsEl.checked;
//   resultEl.innerText = generatePassword(
//     hasLower,
//     hasUpper,
//     hasNumber,
//     hasSymbol,
//     length
//   );
// });

// function generatePassword(lower, upper, number, symbol, length) {
//   let generatePassword = "";
//   const typeCount = lower + upper + number + symbol;
//   if (typeCount === 0) {
//     return "";
//   }

//   const typeArr = [{ upper }, { lower }, { number }, { symbol }].filter(
//     (type) => Object.values(type)[0]
//   );
//   for (let i = 0; i < length; i += typeCount) {
//     typeArr.forEach((type) => {
//       const funcName = Object.keys(type)[0];
//       generatePassword += randomFunc[funcName]();
//     });
//   }
//   return (generatePassword = generatePassword.slice(0, length));
// }

/////////////////////////////////////////////////////////////////////////////
//COMPLETED
