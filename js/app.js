function comprar(){
    let tipo = document.getElementById ('tipo-ingresso');
    let qtd = parseInt(document.getElementById ('qtd').value);
        
    console.log(`Tipo: ${tipo} Quantidade: ${qtd}`);
  
    if (isNaN(qtd) || qtd <= 0) {
        alert("Digite quantos ingressos você quer?.");
        return;
    } 


    if (tipo.value == 'pista'){
        comprarPista(qtd)
    } else if(tipo.value == 'inferior'){
             comprarInferior(qtd)
    } else {
            (tipo.value == 'superior')
             comprarSuperior(qtd)
    }

 
}

function comprarPista(qtd){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
        if(qtd > qtdPista){
           console.log(`Quantidade: ${qtd} Disponível ${qtdPista}`);
           alert('Lamento, não temos esta quantidade de ingressos');
        } else{
            qtdPista = qtdPista - qtd;
            document.getElementById('qtd-pista').textContent = qtdPista;
            alert('Compra Realizada com Sucesso!');
            limpar()
        }
        console.log(`QTD: ${qtd} qtd pista ${qtdPista}`);
}

function comprarInferior(qtd){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
        if(qtd > qtdInferior){
           console.log(`Quantidade: ${qtd} Disponível ${qtdInferior}`);
           alert('Lamento, não temos esta quantidade de ingressos');
        } else{
            qtdInferior = qtdInferior - qtd;
            document.getElementById('qtd-inferior').textContent = qtdInferior;
            alert('Compra Realizada com Sucesso!');
            limpar()
        }
        console.log(`QTD: ${qtd} qtd pista ${qtdInferior}`);
}

function comprarSuperior(qtd){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
        if(qtd > qtdSuperior){
           console.log(`Quantidade: ${qtd} Disponível ${qtdSuperior}`);
           alert('Lamento, não temos esta quantidade de ingressos');
        } else{
            qtdSuperior = qtdSuperior - qtd;
            document.getElementById('qtd-superior').textContent = qtdSuperior;
            alert('Compra Realizada com Sucesso!');
            limpar()
        }
        console.log(`QTD: ${qtd} qtd pista ${qtdSuperior}`);
}





function limpar(){
    document.getElementById ('tipo-ingresso').value = "";
    document.getElementById ('qtd').value = "";
}