const valoresProdutos =[28.50, 12.99, 18.90, 100.20, 40.50];
valoresProdutos.push(30.65);

const pagamentoDinheiro = 300.00;

const valorTotal = valoresProdutos.reduce((acumulador, valorAtual)=>{
    return acumulador = acumulador + valorAtual;
});
console.log(`O valor total da compra é de ${valorTotal}`);

let troco = pagamentoDinheiro - valorTotal;

console.log(`O valor do troco é de ${troco}`);

valoresProdutos.push(0);

if(valoresProdutos.push(0)){
    console.log('Compra finalizada');
}
