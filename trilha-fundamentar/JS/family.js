const family = {
  incomes: [4800, 2500, 600],
  expenses: [50, 150, 90, 40, 127.90, 500, 500, 854, 200]
}

function sum(array) {
  let total = 0;

  for (let value of array) {
    total += value;
  }
  return total
}

function calculateBalance() {
  const calculateIncomes = sum(family.incomes)
  const calculateExpenses = sum(family.expenses)
  const total = calculateIncomes - calculateExpenses

  const itsOk = total == 0;
  const itsNot = total < 0;

  if (itsOk) {
    console.log("OK, mas precisam guardar dinheiro")
  }
  if (itsNot) {
    console.log("DÉBITO!!!!")
  }
  if (!itsOk && !itsNot) {
    console.log(`Saldo: R$${total.toFixed(2)},\n **Guardem na poupança**`)
  }
}

calculateBalance()