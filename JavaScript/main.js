//import calcularCustoIngrediente from './funcoes.js'

    var somaTotal = 0;

 const botaoPrecificarEl = [
     document.querySelector('#btPrecificarL1'),
     document.querySelector('#btPrecificarL2'),
     document.querySelector('#btPrecificarL3'),
     document.querySelector('#btPrecificarL4'),
     document.querySelector('#btPrecificarL5'),
     document.querySelector('#btPrecificarL6'),
     document.querySelector('#btPrecificarL7'),
     document.querySelector('#btPrecificarL8'),
     document.querySelector('#btPrecificarL9'),
     document.querySelector('#btPrecificarL10'),
     document.querySelector('#btPrecificarL11'),
     document.querySelector('#btPrecificarL12')
 ];

 const botaoAtualizarEl = [
    document.querySelector('#btAtualizarL1'),
    document.querySelector('#btAtualizarL2'),
    document.querySelector('#btAtualizarL3'),
    document.querySelector('#btAtualizarL4'),
    document.querySelector('#btAtualizarL5'),
    document.querySelector('#btAtualizarL6'),
    document.querySelector('#btAtualizarL7'),
    document.querySelector('#btAtualizarL8'),
    document.querySelector('#btAtualizarL9'),
    document.querySelector('#btAtualizarL10'),
    document.querySelector('#btAtualizarL11'),
    document.querySelector('#btAtualizarL12')
 ];

 const precoCompraEl = [
     document.querySelector('#idPrecoCompraL1'),
     document.querySelector('#idPrecoCompraL2'),
     document.querySelector('#idPrecoCompraL3'),
     document.querySelector('#idPrecoCompraL4'),
     document.querySelector('#idPrecoCompraL5'),
     document.querySelector('#idPrecoCompraL6'),
     document.querySelector('#idPrecoCompraL7'),
     document.querySelector('#idPrecoCompraL8'),
     document.querySelector('#idPrecoCompraL9'),
     document.querySelector('#idPrecoCompraL10'),
     document.querySelector('#idPrecoCompraL11'),
     document.querySelector('#idPrecoCompraL12')
 ];

 const quantidadeUsadaEl = [
     document.querySelector('#idQuantidadeUsadaL1'),
     document.querySelector('#idQuantidadeUsadaL2'),
     document.querySelector('#idQuantidadeUsadaL3'),
     document.querySelector('#idQuantidadeUsadaL4'),
     document.querySelector('#idQuantidadeUsadaL5'),
     document.querySelector('#idQuantidadeUsadaL6'),
     document.querySelector('#idQuantidadeUsadaL7'),
     document.querySelector('#idQuantidadeUsadaL8'),
     document.querySelector('#idQuantidadeUsadaL9'),
     document.querySelector('#idQuantidadeUsadaL10'),
     document.querySelector('#idQuantidadeUsadaL11'),
     document.querySelector('#idQuantidadeUsadaL12')
 ];

 const quantidadeTotalEl = [
     document.querySelector('#idQuantidadeTotalL1'),
     document.querySelector('#idQuantidadeTotalL2'),
     document.querySelector('#idQuantidadeTotalL3'),
     document.querySelector('#idQuantidadeTotalL4'),
     document.querySelector('#idQuantidadeTotalL5'),
     document.querySelector('#idQuantidadeTotalL6'),
     document.querySelector('#idQuantidadeTotalL7'),
     document.querySelector('#idQuantidadeTotalL8'),
     document.querySelector('#idQuantidadeTotalL9'),
     document.querySelector('#idQuantidadeTotalL10'),
     document.querySelector('#idQuantidadeTotalL11'),
     document.querySelector('#idQuantidadeTotalL12')
 ];

 const celulaBotaoPrecificar = [
    document.querySelector('#celulaBotaoPrecificarL1'),
    document.querySelector('#celulaBotaoPrecificarL2'),
    document.querySelector('#celulaBotaoPrecificarL3'),
    document.querySelector('#celulaBotaoPrecificarL4'),
    document.querySelector('#celulaBotaoPrecificarL5'),
    document.querySelector('#celulaBotaoPrecificarL6'),
    document.querySelector('#celulaBotaoPrecificarL7'),
    document.querySelector('#celulaBotaoPrecificarL8'),
    document.querySelector('#celulaBotaoPrecificarL9'),
    document.querySelector('#celulaBotaoPrecificarL10'),
    document.querySelector('#celulaBotaoPrecificarL11'),
    document.querySelector('#celulaBotaoPrecificarL12')
 ]

 const celulaCustoIngredienteEl = [
    document.querySelector('#celulaCustoIngredienteL1'),
    document.querySelector('#celulaCustoIngredienteL2'),
    document.querySelector('#celulaCustoIngredienteL3'),
    document.querySelector('#celulaCustoIngredienteL4'),
    document.querySelector('#celulaCustoIngredienteL5'),
    document.querySelector('#celulaCustoIngredienteL6'),
    document.querySelector('#celulaCustoIngredienteL7'),
    document.querySelector('#celulaCustoIngredienteL8'),
    document.querySelector('#celulaCustoIngredienteL9'),
    document.querySelector('#celulaCustoIngredienteL10'),
    document.querySelector('#celulaCustoIngredienteL11'),
    document.querySelector('#celulaCustoIngredienteL12')
 ];

 //FUNÇÃO PARA A SOMA INCREMENTAL DOS CUSTOS DE TODOS OS INGREDIENTES
 function calculoCustoTotal(calculoIngrediente) {
    if((calculoIngrediente.isNaN) || (calculoIngrediente == 0)) {
        console.log('CALCULO RESULTADO EM NaN.');
    } else {
        somaTotal += Number(calculoIngrediente);
        console.log(calculoIngrediente=" ----> Calculo Ingrediente");
        console.log(somaTotal.toFixed(2)+" -> SOMA TOTAL");
        document.querySelector('#colunaValorTotal').innerHTML = `<p>Custo total da receita: R$ ${somaTotal.toFixed(2).replace('-','')}</p>`;
        if(somaTotal.isNaN) {
            console.log('Soma Total Nula');
        } else {
            return somaTotal;
        }
    }
 }

 //FUNÇÃO PARA CALCULAR OS CUSTOS DE CADA INGREDIENTE

function calcularCustoIngrediente(precoCompra, quantidadeUsada, quantidadeTotal, linha) {

    if((precoCompra == "") || (precoCompra.isNaN)) {
        alert(`Problema na linha ${linha} da tabela de precificação! É necessário inserir o preço pelo qual o ingrediente foi comprado!`);
    } else {
        if((quantidadeUsada == "") || (quantidadeUsada.isNaN)) {
            alert(`Problema na linha ${linha} da tabela de precificação! É necessário inserir a quantidade do ingrediente que será usado na receita!`);
        } else {
            if((quantidadeTotal == "") || (quantidadeTotal.isNaN)) {
                alert(`Problema na linha ${linha} da tabela de precificação! É necessário inserir a quantidade total da embalagem do ingrediente!`);
            } else {
                if(quantidadeUsada <= quantidadeTotal) {
                    let custoIngrediente = (precoCompra * quantidadeUsada) / quantidadeTotal;
                    if((custoIngrediente == "") || (custoIngrediente.isNaN)) {
                        custoIngrediente = 0;
                    }
                    console.log(custoIngrediente+" ---> CUSTO DO INGREDIENTE");
                    console.log(calculoCustoTotal(custoIngrediente.toFixed(2))+" -> CALCULO CUSTO TOTAL");
                    return custoIngrediente.toFixed(2);
                } else {
                    alert(`Problema na linha ${linha}! A quantidade usada deve ser menor ou igual à quantidade total do ingrediente.`);
                }
            }
        }
    }

    return '0,00';
        
}

//*************************************************** EVENTOS DA PRIMEIRA LINHA DA TABELA DE PRECIFICAÇÃO **************************************************/

//EVENTO AO CLICAR NO BOTÃO PRECIFICAR DA PRIMEIRA LINHA DA TABELA

botaoPrecificarEl[0].addEventListener('click', function() {
    let linha = 0;
    let precoCompra = Number(precoCompraEl[linha].value.replace(',','.'));
    let quantidadeUsada = Number(quantidadeUsadaEl[linha].value);
    let quantidadeTotal = Number(quantidadeTotalEl[linha].value);
    console.log(`${precoCompra}, ${quantidadeUsada}, ${quantidadeTotal}`);
    let resultado = `R$ ${calcularCustoIngrediente(precoCompra, quantidadeUsada, quantidadeTotal, linha+1)}`;

    if((precoCompra != "") && (quantidadeUsada != "") && (quantidadeTotal != "")) {
        botaoPrecificarEl[linha].classList.add('input-button-oculto');
        botaoAtualizarEl[linha].classList.remove('input-button-oculto');
        botaoAtualizarEl[linha].classList.add('input-button');
        document.querySelector(`#celulaCustoIngredienteL${linha+1}`).innerHTML = resultado;
    }

});

//EVENTO AO CLICAR NO BOTÃO PRECIFICAR DA PRIMEIRA LINHA DA TABELA

botaoAtualizarEl[0].addEventListener('click', function() {
    let linha = 0;
    quantidadeUsadaEl[linha].value = "";
    quantidadeTotalEl[linha].value = "";
    precoCompraEl[linha].value = "";

    calculoCustoTotal(Number(-celulaCustoIngredienteEl[linha].getInnerHTML().substring(3).replace(',','.')));

    celulaCustoIngredienteEl[linha].innerHTML = 'R$0.00'
    botaoAtualizarEl[linha].classList.add('input-button-oculto');
    botaoPrecificarEl[linha].classList.remove('input-button-oculto');

});


//*************************************************** EVENTOS DA SEGUNDA LINHA DA TABELA DE PRECIFICAÇÃO **************************************************/

//EVENTO AO CLICAR NO BOTÃO PRECIFICAR DA SEGUNDA LINHA DA TABELA

botaoPrecificarEl[1].addEventListener('click', function() {
    let linha = 1;
    let precoCompra = Number(precoCompraEl[linha].value.replace(',','.'));
    let quantidadeUsada = Number(quantidadeUsadaEl[linha].value);
    let quantidadeTotal = Number(quantidadeTotalEl[linha].value);
    console.log(`${precoCompra}, ${quantidadeUsada}, ${quantidadeTotal}`);
    let resultado = `R$ ${calcularCustoIngrediente(precoCompra, quantidadeUsada, quantidadeTotal, linha+1)}`;

    if((precoCompra != "") && (quantidadeUsada != "") && (quantidadeTotal != "")) {
        botaoPrecificarEl[linha].classList.add('input-button-oculto');
        botaoAtualizarEl[linha].classList.remove('input-button-oculto');
        botaoAtualizarEl[linha].classList.add('input-button');
        document.querySelector(`#celulaCustoIngredienteL${linha+1}`).innerHTML = resultado;
    }

});

//EVENTO AO CLICAR NO BOTÃO PRECIFICAR DA SEGUNDA LINHA DA TABELA

botaoAtualizarEl[1].addEventListener('click', function() {
    let linha = 1;
    quantidadeUsadaEl[linha].value = "";
    quantidadeTotalEl[linha].value = "";
    precoCompraEl[linha].value = "";

    calculoCustoTotal(Number(-celulaCustoIngredienteEl[linha].getInnerHTML().substring(3).replace(',','.')));

    celulaCustoIngredienteEl[linha].innerHTML = 'R$0.00'
    botaoAtualizarEl[linha].classList.add('input-button-oculto');
    botaoPrecificarEl[linha].classList.remove('input-button-oculto');

});

//*************************************************** EVENTOS DA TERCEIRA LINHA DA TABELA DE PRECIFICAÇÃO **************************************************/

//EVENTO AO CLICAR NO BOTÃO PRECIFICAR DA TERCEIRA LINHA DA TABELA

botaoPrecificarEl[2].addEventListener('click', function() {
    let linha = 2;
    let precoCompra = Number(precoCompraEl[linha].value.replace(',','.'));
    let quantidadeUsada = Number(quantidadeUsadaEl[linha].value);
    let quantidadeTotal = Number(quantidadeTotalEl[linha].value);
    console.log(`${precoCompra}, ${quantidadeUsada}, ${quantidadeTotal}`);
    let resultado = `R$ ${calcularCustoIngrediente(precoCompra, quantidadeUsada, quantidadeTotal, linha+1)}`;

    if((precoCompra != "") && (quantidadeUsada != "") && (quantidadeTotal != "")) {
        botaoPrecificarEl[linha].classList.add('input-button-oculto');
        botaoAtualizarEl[linha].classList.remove('input-button-oculto');
        botaoAtualizarEl[linha].classList.add('input-button');
        document.querySelector(`#celulaCustoIngredienteL${linha+1}`).innerHTML = resultado;
    }

});

//EVENTO AO CLICAR NO BOTÃO ATUALIZAR DA TERCEIRA LINHA DA TABELA

botaoAtualizarEl[2].addEventListener('click', function() {
    let linha = 2;
    quantidadeUsadaEl[linha].value = "";
    quantidadeTotalEl[linha].value = "";
    precoCompraEl[linha].value = "";

    calculoCustoTotal(Number(-celulaCustoIngredienteEl[linha].getInnerHTML().substring(3).replace(',','.')));

    celulaCustoIngredienteEl[linha].innerHTML = 'R$0.00'
    botaoAtualizarEl[linha].classList.add('input-button-oculto');
    botaoPrecificarEl[linha].classList.remove('input-button-oculto');

});

//*************************************************** EVENTOS DA QUARTA LINHA DA TABELA DE PRECIFICAÇÃO **************************************************/

//EVENTO AO CLICAR NO BOTÃO PRECIFICAR DA QUARTA LINHA DA TABELA

botaoPrecificarEl[3].addEventListener('click', function() {
    let linha = 3;
    let precoCompra = Number(precoCompraEl[linha].value.replace(',','.'));
    let quantidadeUsada = Number(quantidadeUsadaEl[linha].value);
    let quantidadeTotal = Number(quantidadeTotalEl[linha].value);
    console.log(`${precoCompra}, ${quantidadeUsada}, ${quantidadeTotal}`);
    let resultado = `R$ ${calcularCustoIngrediente(precoCompra, quantidadeUsada, quantidadeTotal, linha+1)}`;

    if((precoCompra != "") && (quantidadeUsada != "") && (quantidadeTotal != "")) {
        botaoPrecificarEl[linha].classList.add('input-button-oculto');
        botaoAtualizarEl[linha].classList.remove('input-button-oculto');
        botaoAtualizarEl[linha].classList.add('input-button');
        document.querySelector(`#celulaCustoIngredienteL${linha+1}`).innerHTML = resultado;
    }

});

//EVENTO AO CLICAR NO BOTÃO ATUALIZAR DA QUARTA LINHA DA TABELA

botaoAtualizarEl[3].addEventListener('click', function() {
    let linha = 3;
    quantidadeUsadaEl[linha].value = "";
    quantidadeTotalEl[linha].value = "";
    precoCompraEl[linha].value = "";

    calculoCustoTotal(Number(-celulaCustoIngredienteEl[linha].getInnerHTML().substring(3).replace(',','.')));

    celulaCustoIngredienteEl[linha].innerHTML = 'R$0.00'
    botaoAtualizarEl[linha].classList.add('input-button-oculto');
    botaoPrecificarEl[linha].classList.remove('input-button-oculto');

});

//*************************************************** EVENTOS DA QUINTA LINHA DA TABELA DE PRECIFICAÇÃO **************************************************/

//EVENTO AO CLICAR NO BOTÃO PRECIFICAR DA QUINTA LINHA DA TABELA

botaoPrecificarEl[4].addEventListener('click', function() {
    let linha = 4;
    let precoCompra = Number(precoCompraEl[linha].value.replace(',','.'));
    let quantidadeUsada = Number(quantidadeUsadaEl[linha].value);
    let quantidadeTotal = Number(quantidadeTotalEl[linha].value);
    console.log(`${precoCompra}, ${quantidadeUsada}, ${quantidadeTotal}`);
    let resultado = `R$ ${calcularCustoIngrediente(precoCompra, quantidadeUsada, quantidadeTotal, linha+1)}`;

    if((precoCompra != "") && (quantidadeUsada != "") && (quantidadeTotal != "")) {
        botaoPrecificarEl[linha].classList.add('input-button-oculto');
        botaoAtualizarEl[linha].classList.remove('input-button-oculto');
        botaoAtualizarEl[linha].classList.add('input-button');
        document.querySelector(`#celulaCustoIngredienteL${linha+1}`).innerHTML = resultado;
    }

});

//EVENTO AO CLICAR NO BOTÃO ATUALIZAR DA QUINTA LINHA DA TABELA

botaoAtualizarEl[4].addEventListener('click', function() {
    let linha = 4;
    quantidadeUsadaEl[linha].value = "";
    quantidadeTotalEl[linha].value = "";
    precoCompraEl[linha].value = "";

    calculoCustoTotal(Number(-celulaCustoIngredienteEl[linha].getInnerHTML().substring(3).replace(',','.')));

    celulaCustoIngredienteEl[linha].innerHTML = 'R$0.00'
    botaoAtualizarEl[linha].classList.add('input-button-oculto');
    botaoPrecificarEl[linha].classList.remove('input-button-oculto');

});

//*************************************************** EVENTOS DA SEXTA LINHA DA TABELA DE PRECIFICAÇÃO **************************************************/

//EVENTO AO CLICAR NO BOTÃO PRECIFICAR DA SEXTA LINHA DA TABELA

botaoPrecificarEl[5].addEventListener('click', function() {
    let linha = 5;
    let precoCompra = Number(precoCompraEl[linha].value.replace(',','.'));
    let quantidadeUsada = Number(quantidadeUsadaEl[linha].value);
    let quantidadeTotal = Number(quantidadeTotalEl[linha].value);
    console.log(`${precoCompra}, ${quantidadeUsada}, ${quantidadeTotal}`);
    let resultado = `R$ ${calcularCustoIngrediente(precoCompra, quantidadeUsada, quantidadeTotal, linha+1)}`;

    if((precoCompra != "") && (quantidadeUsada != "") && (quantidadeTotal != "")) {
        botaoPrecificarEl[linha].classList.add('input-button-oculto');
        botaoAtualizarEl[linha].classList.remove('input-button-oculto');
        botaoAtualizarEl[linha].classList.add('input-button');
        document.querySelector(`#celulaCustoIngredienteL${linha+1}`).innerHTML = resultado;
    }

});

//EVENTO AO CLICAR NO BOTÃO ATUALIZAR DA SEXTA LINHA DA TABELA

botaoAtualizarEl[5].addEventListener('click', function() {
    let linha = 5;
    quantidadeUsadaEl[linha].value = "";
    quantidadeTotalEl[linha].value = "";
    precoCompraEl[linha].value = "";

    calculoCustoTotal(Number(-celulaCustoIngredienteEl[linha].getInnerHTML().substring(3).replace(',','.')));

    celulaCustoIngredienteEl[linha].innerHTML = 'R$0.00'
    botaoAtualizarEl[linha].classList.add('input-button-oculto');
    botaoPrecificarEl[linha].classList.remove('input-button-oculto');

});

//*************************************************** EVENTOS DA SÉTIMA LINHA DA TABELA DE PRECIFICAÇÃO **************************************************/

//EVENTO AO CLICAR NO BOTÃO PRECIFICAR DA SÉTIMA LINHA DA TABELA

botaoPrecificarEl[6].addEventListener('click', function() {
    let linha = 6;
    let precoCompra = Number(precoCompraEl[linha].value.replace(',','.'));
    let quantidadeUsada = Number(quantidadeUsadaEl[linha].value);
    let quantidadeTotal = Number(quantidadeTotalEl[linha].value);
    console.log(`${precoCompra}, ${quantidadeUsada}, ${quantidadeTotal}`);
    let resultado = `R$ ${calcularCustoIngrediente(precoCompra, quantidadeUsada, quantidadeTotal, linha+1)}`;

    if((precoCompra != "") && (quantidadeUsada != "") && (quantidadeTotal != "")) {
        botaoPrecificarEl[linha].classList.add('input-button-oculto');
        botaoAtualizarEl[linha].classList.remove('input-button-oculto');
        botaoAtualizarEl[linha].classList.add('input-button');
        document.querySelector(`#celulaCustoIngredienteL${linha+1}`).innerHTML = resultado;
    }

});

//EVENTO AO CLICAR NO BOTÃO ATUALIZAR DA SÉTIMA LINHA DA TABELA

botaoAtualizarEl[6].addEventListener('click', function() {
    let linha = 6;
    quantidadeUsadaEl[linha].value = "";
    quantidadeTotalEl[linha].value = "";
    precoCompraEl[linha].value = "";

    calculoCustoTotal(Number(-celulaCustoIngredienteEl[linha].getInnerHTML().substring(3).replace(',','.')));

    celulaCustoIngredienteEl[linha].innerHTML = 'R$0.00'
    botaoAtualizarEl[linha].classList.add('input-button-oculto');
    botaoPrecificarEl[linha].classList.remove('input-button-oculto');

});

//*************************************************** EVENTOS DA OITAVA LINHA DA TABELA DE PRECIFICAÇÃO **************************************************/

//EVENTO AO CLICAR NO BOTÃO PRECIFICAR DA OITAVA LINHA DA TABELA

botaoPrecificarEl[7].addEventListener('click', function() {
    let linha = 7;
    let precoCompra = Number(precoCompraEl[linha].value.replace(',','.'));
    let quantidadeUsada = Number(quantidadeUsadaEl[linha].value);
    let quantidadeTotal = Number(quantidadeTotalEl[linha].value);
    console.log(`${precoCompra}, ${quantidadeUsada}, ${quantidadeTotal}`);
    let resultado = `R$ ${calcularCustoIngrediente(precoCompra, quantidadeUsada, quantidadeTotal, linha+1)}`;

    if((precoCompra != "") && (quantidadeUsada != "") && (quantidadeTotal != "")) {
        botaoPrecificarEl[linha].classList.add('input-button-oculto');
        botaoAtualizarEl[linha].classList.remove('input-button-oculto');
        botaoAtualizarEl[linha].classList.add('input-button');
        document.querySelector(`#celulaCustoIngredienteL${linha+1}`).innerHTML = resultado;
    }

});

//EVENTO AO CLICAR NO BOTÃO ATUALIZAR DA OITAVA LINHA DA TABELA

botaoAtualizarEl[7].addEventListener('click', function() {
    let linha = 7;
    quantidadeUsadaEl[linha].value = "";
    quantidadeTotalEl[linha].value = "";
    precoCompraEl[linha].value = "";

    calculoCustoTotal(Number(-celulaCustoIngredienteEl[linha].getInnerHTML().substring(3).replace(',','.')));

    celulaCustoIngredienteEl[linha].innerHTML = 'R$0.00'
    botaoAtualizarEl[linha].classList.add('input-button-oculto');
    botaoPrecificarEl[linha].classList.remove('input-button-oculto');

});

//*************************************************** EVENTOS DA NONA LINHA DA TABELA DE PRECIFICAÇÃO **************************************************/

//EVENTO AO CLICAR NO BOTÃO PRECIFICAR DA NONA LINHA DA TABELA

botaoPrecificarEl[8].addEventListener('click', function() {
    let linha = 8;
    let precoCompra = Number(precoCompraEl[linha].value.replace(',','.'));
    let quantidadeUsada = Number(quantidadeUsadaEl[linha].value);
    let quantidadeTotal = Number(quantidadeTotalEl[linha].value);
    console.log(`${precoCompra}, ${quantidadeUsada}, ${quantidadeTotal}`);
    let resultado = `R$ ${calcularCustoIngrediente(precoCompra, quantidadeUsada, quantidadeTotal, linha+1)}`;

    if((precoCompra != "") && (quantidadeUsada != "") && (quantidadeTotal != "")) {
        botaoPrecificarEl[linha].classList.add('input-button-oculto');
        botaoAtualizarEl[linha].classList.remove('input-button-oculto');
        botaoAtualizarEl[linha].classList.add('input-button');
        document.querySelector(`#celulaCustoIngredienteL${linha+1}`).innerHTML = resultado;
    }

});

//EVENTO AO CLICAR NO BOTÃO ATUALIZAR DA NONA LINHA DA TABELA

botaoAtualizarEl[8].addEventListener('click', function() {
    let linha = 8;
    quantidadeUsadaEl[linha].value = "";
    quantidadeTotalEl[linha].value = "";
    precoCompraEl[linha].value = "";

    calculoCustoTotal(Number(-celulaCustoIngredienteEl[linha].getInnerHTML().substring(3).replace(',','.')));

    celulaCustoIngredienteEl[linha].innerHTML = 'R$0.00'
    botaoAtualizarEl[linha].classList.add('input-button-oculto');
    botaoPrecificarEl[linha].classList.remove('input-button-oculto');

});

//*************************************************** EVENTOS DA DÉCIMA LINHA DA TABELA DE PRECIFICAÇÃO **************************************************/

//EVENTO AO CLICAR NO BOTÃO PRECIFICAR DA DÉCIMA LINHA DA TABELA

botaoPrecificarEl[9].addEventListener('click', function() {
    let linha = 9;
    let precoCompra = Number(precoCompraEl[linha].value.replace(',','.'));
    let quantidadeUsada = Number(quantidadeUsadaEl[linha].value);
    let quantidadeTotal = Number(quantidadeTotalEl[linha].value);
    console.log(`${precoCompra}, ${quantidadeUsada}, ${quantidadeTotal}`);
    let resultado = `R$ ${calcularCustoIngrediente(precoCompra, quantidadeUsada, quantidadeTotal, linha+1)}`;

    if((precoCompra != "") && (quantidadeUsada != "") && (quantidadeTotal != "")) {
        botaoPrecificarEl[linha].classList.add('input-button-oculto');
        botaoAtualizarEl[linha].classList.remove('input-button-oculto');
        botaoAtualizarEl[linha].classList.add('input-button');
        document.querySelector(`#celulaCustoIngredienteL${linha+1}`).innerHTML = resultado;
    }

});

//EVENTO AO CLICAR NO BOTÃO ATUALIZAR DA DÉCIMA LINHA DA TABELA

botaoAtualizarEl[9].addEventListener('click', function() {
    let linha = 9;
    quantidadeUsadaEl[linha].value = "";
    quantidadeTotalEl[linha].value = "";
    precoCompraEl[linha].value = "";

    calculoCustoTotal(Number(-celulaCustoIngredienteEl[linha].getInnerHTML().substring(3).replace(',','.')));

    celulaCustoIngredienteEl[linha].innerHTML = 'R$0.00'
    botaoAtualizarEl[linha].classList.add('input-button-oculto');
    botaoPrecificarEl[linha].classList.remove('input-button-oculto');

});

//*************************************************** EVENTOS DA DÉCIMA PRIMEIRA LINHA DA TABELA DE PRECIFICAÇÃO **************************************************/

//EVENTO AO CLICAR NO BOTÃO PRECIFICAR DA DÉCIMA PRIMEIRA LINHA DA TABELA

botaoPrecificarEl[10].addEventListener('click', function() {
    let linha = 10;
    let precoCompra = Number(precoCompraEl[linha].value.replace(',','.'));
    let quantidadeUsada = Number(quantidadeUsadaEl[linha].value);
    let quantidadeTotal = Number(quantidadeTotalEl[linha].value);
    console.log(`${precoCompra}, ${quantidadeUsada}, ${quantidadeTotal}`);
    let resultado = `R$ ${calcularCustoIngrediente(precoCompra, quantidadeUsada, quantidadeTotal, linha+1)}`;

    if((precoCompra != "") && (quantidadeUsada != "") && (quantidadeTotal != "")) {
        botaoPrecificarEl[linha].classList.add('input-button-oculto');
        botaoAtualizarEl[linha].classList.remove('input-button-oculto');
        botaoAtualizarEl[linha].classList.add('input-button');
        document.querySelector(`#celulaCustoIngredienteL${linha+1}`).innerHTML = resultado;
    }

});

//EVENTO AO CLICAR NO BOTÃO ATUALIZAR DA DÉCIMA PRIMEIRA LINHA DA TABELA

botaoAtualizarEl[10].addEventListener('click', function() {
    let linha = 10;
    quantidadeUsadaEl[linha].value = "";
    quantidadeTotalEl[linha].value = "";
    precoCompraEl[linha].value = "";

    calculoCustoTotal(Number(-celulaCustoIngredienteEl[linha].getInnerHTML().substring(3).replace(',','.')));

    celulaCustoIngredienteEl[linha].innerHTML = 'R$0.00'
    botaoAtualizarEl[linha].classList.add('input-button-oculto');
    botaoPrecificarEl[linha].classList.remove('input-button-oculto');

});

//*************************************************** EVENTOS DA DÉCIMA SEGUNDA LINHA DA TABELA DE PRECIFICAÇÃO **************************************************/

//EVENTO AO CLICAR NO BOTÃO PRECIFICAR DA DÉCIMA SEGUNDA LINHA DA TABELA

botaoPrecificarEl[11].addEventListener('click', function() {
    let linha = 11;
    let precoCompra = Number(precoCompraEl[linha].value.replace(',','.'));
    let quantidadeUsada = Number(quantidadeUsadaEl[linha].value);
    let quantidadeTotal = Number(quantidadeTotalEl[linha].value);
    console.log(`${precoCompra}, ${quantidadeUsada}, ${quantidadeTotal}`);
    let resultado = `R$ ${calcularCustoIngrediente(precoCompra, quantidadeUsada, quantidadeTotal, linha+1)}`;

    if((precoCompra != "") && (quantidadeUsada != "") && (quantidadeTotal != "")) {
        botaoPrecificarEl[linha].classList.add('input-button-oculto');
        botaoAtualizarEl[linha].classList.remove('input-button-oculto');
        botaoAtualizarEl[linha].classList.add('input-button');
        document.querySelector(`#celulaCustoIngredienteL${linha+1}`).innerHTML = resultado;
    }

});

//EVENTO AO CLICAR NO BOTÃO ATUALIZAR DA DÉCIMA SEGUNDA LINHA DA TABELA

botaoAtualizarEl[11].addEventListener('click', function() {
    let linha = 11;
    quantidadeUsadaEl[linha].value = "";
    quantidadeTotalEl[linha].value = "";
    precoCompraEl[linha].value = "";

    calculoCustoTotal(Number(-celulaCustoIngredienteEl[linha].getInnerHTML().substring(3).replace(',','.')));

    celulaCustoIngredienteEl[linha].innerHTML = 'R$0.00'
    botaoAtualizarEl[linha].classList.add('input-button-oculto');
    botaoPrecificarEl[linha].classList.remove('input-button-oculto');

});