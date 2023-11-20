const form = document.getElementById('form-atividade');

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

function validaTelefone(telefone) {
    return telefone.length === 11;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputNomePessoa = document.getElementById('nome-pessoa');
    const inputTelPessoa = document.getElementById('numero-tel');

    const nomeValido = validaNome(inputNomePessoa.value);
    const telefoneValido = validaTelefone(inputTelPessoa.value);

    if (nomeValido) {
        inputNomePessoa.classList.remove('campo-invalido');
    } else {
        inputNomePessoa.classList.add('campo-invalido');
    }

    if (telefoneValido) {
        inputTelPessoa.classList.remove('campo-invalido');
    } else {
        inputTelPessoa.classList.add('campo-invalido');
    }

    const formEValido = nomeValido && telefoneValido;

    if (formEValido) {
        const linha = `<tr>
            <td>${inputNomePessoa.value}</td>
            <td>${inputTelPessoa.value}</td>
            </tr>`;

        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML += linha;

        // Limpar os campos após adicionar à tabela
        inputNomePessoa.value = '';
        inputTelPessoa.value = '';

        // Remover as classes de campo inválido
        inputNomePessoa.classList.remove('campo-invalido');
        inputTelPessoa.classList.remove('campo-invalido');
        
        alert("Tudo certo");
    }

    else {
        alert("Por favor, corrija os campos destacados.");
    }
});