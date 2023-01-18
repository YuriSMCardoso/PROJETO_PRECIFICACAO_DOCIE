export function calcularCustoIngrediente(precoCompra, quantidadeUsada, quantidadeTotal) {
    let custoIngrediente = (precoCompra * quantidadeUsada) / quantidadeTotal;
    return custoIngrediente;
}