function adicionar(){
// recuperar valores nome do produto, quantidade e valor
let produto = document.getElementById('produto').value;
let nomeProduto = produto.split('-')[0];
let valorUnitatio = produto.split('R$')[1]
let quantidadePruduto = document.getElementById('quantidade').value;
// calcular o preço, e o nosso subtotal
let preco = quantidadePruduto * valorUnitatio;
console.log(nomeProduto);
console.log(valorUnitatio);
console.log(quantidadePruduto);
console.log(preco);
// adionar ao carrinho 
let carrinhoDeCompra = document.getElementById('lista-produtos'); 
let listaCarrinhoDeCompra = `<span class=texto-azul">${quantidadePruduto} x</span> ${nomeProduto} <span class="texto-azul">R$ ${preco}</span>`;
carrinhoDeCompra.querySelector('.carrinho__produtos__produto').innerHTML = listaCarrinhoDeCompra;
//atualizar valor total
}

function limpar() {
    
}