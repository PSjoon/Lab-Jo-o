// function ehPalindromo(palavra) {
//     x = palavra.reverse()
//     console.log(x)
// }

// ehPalindromo("teste")

function ehPalindromo(palavra) {
    // Converte a palavra para minúsculas e remove espaços
    palavra = palavra.toLowerCase().replace(/\s+/g, "")
  
    // Inverte a palavra
    const palavraInvertida = palavra.split("").reverse().join("")
    console.log(typeof palavraInvertida)
  
    // Compara a palavra original com a palavra invertida
    return palavra === palavraInvertida
  }
  
  // Exemplos de uso da função
  console.log(ehPalindromo("arara")) // Saída: true
  console.log(ehPalindromo("banana")) // Saída: false
  console.log(ehPalindromo("A man a plan a canal Panama")) // Saída: true