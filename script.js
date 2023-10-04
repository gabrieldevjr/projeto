var btn = window.document.getElementById('b_enviar')

function enviar() {
    const inputNome = document.querySelector('.nome_form');
    var nome = inputNome.value
    nome.trim()
    nome = nome.toUpperCase()
    const inputEmail = document.querySelector('.email_form');
    var email = inputEmail.value
    email.trim()
    email = email.toLowerCase()
    const inputTelefone = document.querySelector('.telefone_form');
    var telefone = inputTelefone.value
    telefone.trim()
    const inputProduto = document.querySelector('.produto_form');
    var produto = inputProduto.value
    produto.trim()
    produto = produto.toLowerCase()
    const selectMarca = document.querySelector('.select_marca');
    var marca = selectMarca.value
    const areaMensagem = document.querySelector('.mensagem_form');
    var mensagem = areaMensagem.value
    mensagem.trim()
    var nome_caracter = nome.split('')
    var nomeInvalid = false
    var reg = ["@","!","#","$","%","^","&","*","(","-","_",")","/","\\",".","<",">","=","?","[","]","{","}","+",":",";","|","¨",",",'"',"'","ª","º","§","¹","²","³","£","¬","`","´","~"]
    nome_caracter.forEach((caracter) => {
        reg.forEach((regra) => {
            if ((isNaN(caracter) == false && caracter != " ") || caracter.includes(regra)) {
                nomeInvalid = true
            }
        })
    })

    if (nome != "" && (nomeInvalid || nome.length < 6)) {
        alert("Nome inválido.")
        inputNome.value = ''

    } else {
        nomeValid = true
    }

    if (email.includes("@") && email.includes(".") && email.length >=8 && email.includes(" ") == false) {
        emailValid = true;

    } else {
        if (email != '') { 
            alert("Email inválido.")
            inputEmail.value = ''
        }
    }

    if (isNaN(telefone) == false && telefone.length >= 10 && telefone.includes(" ") == false) {
        numeroValid = true
        
                
    } else {
        if (telefone != '') { 
            alert("Telefone inválido. Somente números (Ex: 7912345678).")
            inputTelefone.value = ''
        }
    }

    if (produto.length >= 3 && isNaN(produto)) {
        produtoValid = true 

    } else {
        if (produto != '') { 
            alert("Produto inválido.")
            inputProduto.value = ''
        }
    }
    
    if (mensagem.length >= 10 && isNaN(mensagem)) {
        mensagemValid = true 

    } else {
        if (mensagem != '') { 
            alert("Mensagem inválida.")
            areaMensagem.value = ''
        }
    }

    if (nomeValid && emailValid && numeroValid && produtoValid && marca != "" && mensagemValid) {
        alert(`Obrigado ${nome} por entrar em contato.\nSua mensagem foi enviada com sucesso!\nConte conosco sempre que precisar :)`)
        inputNome.value = '';
        inputEmail.value = '';
        inputTelefone.value = '';
        inputProduto.value = '';
        selectMarca.value = '';
        areaMensagem.value = '';
        window.location.href = "index.html";

    }

}
