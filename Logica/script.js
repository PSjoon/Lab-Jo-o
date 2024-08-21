function exemploVar() {
  var x = 10

  if (true) {
    var x = 20 // mesma variável
    // x = 30
    console.log(`Função Var: ${x}`) // 20
  }
  console.log(`Global Var: ${x}`) // 20
}

function exemploLet() {
  let y = 10
  if (true) {
    let y = 20 // variável diferente
    // y = 30
    console.log(`Função Let: ${y}`) // 20
  }
  console.log(`Global Let: ${y}`) // 10
}

function exemploConst() {
  const z = 10

  if (true) {
    const z = 20 // variável diferente
    soma = z + 1
    // z = 30 // não é possível alterar o valor de uma constante
    console.log(typeof soma)
    // console.log(`Função Const: ${soma}`) // 20
  }
  console.log(`Global Const: ${z}`) // 10
}

exemploConst()
// exemploLet()

// exemploVar()
