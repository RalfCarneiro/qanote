// scripts.js

function salvarAnotacao() {
    var nota = document.getElementById('noteText').value.trim();
    if (nota !== '') {
        var dataAtual = new Date().toLocaleString();
        var dataHoraFormatada = dataAtual.split(',').join(' -');
        var anotacoes = JSON.parse(localStorage.getItem('anotacoes')) || {};
        if (!anotacoes[dataHoraFormatada]) {
            anotacoes[dataHoraFormatada] = [];
        }
        nota = nota.replace(/\n/g, '<br>');
        anotacoes[dataHoraFormatada].push(nota);
        localStorage.setItem('anotacoes', JSON.stringify(anotacoes));
        exibirAnotacoes();
        document.getElementById('noteText').value = '';
        showSnackbar('Anotação salva com sucesso!');
    } else {
        showSnackbar('Por favor, insira uma anotação antes de salvar.');
    }
}

function exibirAnotacoes() {
    var anotacoes = JSON.parse(localStorage.getItem('anotacoes')) || {};
    var datas = Object.keys(anotacoes).sort(function(a, b) {
        return new Date(a) - new Date(b);
    });

    var notasHTML = '';
    for (var i = 0; i < datas.length; i++) {
        var data = datas[i];
        notasHTML += '<div class="anotacao" onclick="excluirAnotacao(this)">';
        notasHTML += '<h3>' + data + '</h3>';
        var horas = anotacoes[data];
        for (var j = 0; j < horas.length; j++) {
            var hora = horas[j];
            notasHTML += '<p class="nota" onclick="editarNota(this)">' + hora + '</p>';
        }
        notasHTML += '</div>';
    }
    document.getElementById('anotacoesSalvas').innerHTML = notasHTML;
}

function limparAnotacoes() {
    localStorage.removeItem('anotacoes');
    exibirAnotacoes();
}

function editarNota(elemento) {
    var notaAntiga = elemento.textContent;
    elemento.classList.add('editando');
    var novoConteudo = prompt('Edite sua nota:', notaAntiga);
    if (novoConteudo !== null && novoConteudo.trim() !== '') {
        elemento.textContent = novoConteudo.trim();
        salvarAnotacao();
    } else {
        elemento.classList.remove('editando');
    }
}

function excluirAnotacao(elemento) {
    if (confirm('Tem certeza de que deseja excluir esta anotação?')) {
        var dataDaAnotacao = elemento.querySelector('h3').textContent.trim();
        var anotacoes = JSON.parse(localStorage.getItem('anotacoes')) || {};

        if (anotacoes[dataDaAnotacao]) {
            delete anotacoes[dataDaAnotacao];
            localStorage.setItem('anotacoes', JSON.stringify(anotacoes));
            exibirAnotacoes();
        }
    }
}

function fecharEIrParaLogin() {
    window.close();
    window.location.href = 'login.html';
}

window.onload = exibirAnotacoes;
