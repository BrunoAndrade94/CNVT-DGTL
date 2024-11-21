const formula = (peso, idade, altura) => {
  const GEB = 10 * peso + 6.25 * altura - 5 * idade - 161;
  return GEB;
};

// ela
// const peso = 61.9;
// const idade = 27;
// const altura = 158;

const peso = 65;
const idade = 28;
const altura = 165;

console.log(formula(peso, idade, altura));
