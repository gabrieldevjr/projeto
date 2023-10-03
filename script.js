var btn = window.document.getElementById('b_enviar')

function enviar() {
    const inputNome = document.querySelector('.nome_form');
    var nome = inputNome.value
    const inputEmail = document.querySelector('.email_form');
    var email = inputEmail.value
    const inputTelefone = document.querySelector('.telefone_form');
    var telefone = inputTelefone.value
    const inputProduto = document.querySelector('.produto_form');
    var produto = inputProduto.value
    const selectMarca = document.querySelector('.select_marca');
    var marca = selectMarca.value
    const areaMensagem = document.querySelector('.mensagem_form');
    var mensagem = areaMensagem.value
    
    if (email.includes("@")) {
        var emailValid = true;

    } else {
        if (email != '') { 
            alert("Email inválido.")
            inputEmail.value = ''
        }
    }
    
    if (isNaN(telefone)) {
        alert("O número de telefone digitado não é um número.")
        inputTelefone.value = ''
        
    } else {
        var numeroValid = true
    }
    
    if (nome != "" && emailValid && email != "" && numeroValid && telefone != "" && produto != "" && marca != "" && mensagem != "") {
        alert(`Ok ${nome}! Sua mensagem foi enviada com sucesso!\nConte conosco sempre que precisar :)`)
        inputNome.value = '';
        inputEmail.value = '';
        inputTelefone.value = '';
        inputProduto.value = '';
        selectMarca.value = '';
        areaMensagem.value = '';
        window.location.href = "index.html";

    }
}
