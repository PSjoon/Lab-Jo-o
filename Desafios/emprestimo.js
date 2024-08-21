// rendaMinima = 2000
// idade = 15

// if (rendaMinima >= 2000 && idade >= 18 ) {
//     console.log('Você pode receber o emprestimo')
// }else{
//     console.log('Você não pode receber o emprestimo')
// }

let rendaMinima = 2000;
let idade = 18;

let mensagem = (rendaMinima >= 2000 && idade >= 18) 
    ? 'Você pode receber o empréstimo' 
    : 'Você não pode receber o empréstimo';

console.log(mensagem);