document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    const tabelaContatos = document.getElementById('tabelaContatos');
    const tabelaContatosBody = tabelaContatos.querySelector('tbody');
    const novaLinha = tabelaContatosBody.insertRow();

    const celulaNome = novaLinha.insertCell(0);
    const celulaTelefone = novaLinha.insertCell(1);

    celulaNome.textContent = nome;
    celulaTelefone.textContent = telefone;

    document.getElementById('formContato').reset();
});