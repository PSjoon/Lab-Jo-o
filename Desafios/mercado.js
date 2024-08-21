var total = 700
var troco = 0
var pagamento = 500

if (total <= pagamento) {
    troco = pagamento-total

    console.log(`Troco total: R$ ${troco}`)
}else{
    troco = pagamento-total

    console.log(`Ficou devendo: R$ ${troco}`)
}