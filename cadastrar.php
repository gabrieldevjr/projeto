<?php
    include_once('conexao.php');

    $dados = filter_input_array(INPUT_POST, FILTER_DEFAULT);
    if(empty($dados['nome'])){
        $retorna = ['status' => false, 'msg' => "<p style='color:white; background:red margin:15px;'>Error: Preencha o campo nome</p>"];

    }elseif(empty($dados['email'])){
        $retorna = ['status' => false, 'msg' => "<p style='color:white; background:red; margin:15px;'>Error: Preencha o campo email</p>"];

    
    }elseif(empty($dados['telefone'])){
        $retorna = ['status' => false, 'msg' => "<p style='color:white; background:red; margin:15px;'>Error: Preencha o campo telefone</p>"];

    
    }elseif(empty($dados['produto'])){
        $retorna = ['status' => false, 'msg' => "<p style='color:white; background:red; margin:15px;'>Error: Preencha o campo produto</p>"];

    
    }elseif(empty($dados['marca'])){
        $retorna = ['status' => false, 'msg' => "<p style='color:white; background:red; margin:15px;'>Error: Selecione a marca</p>"];

    
    }elseif(empty($dados['problema'])){
        $retorna = ['status' => false, 'msg' => "<p style='color:white; background:red; margin:15px;'>Error: Preencha o campo problema</p>"];

    
    }else{
        try{
            $retorna = ['status' => true, 'msg' => "<p style='color:white; background:green; margin:15px;'>Formulário enviado com sucesso.</p>"];
            $nome = $dados['nome'];
            $email = $dados['email'];
            $telefone = $dados['telefone'];
            $produto = $dados['produto'];
            $marca = $dados['marca'];
            $problema = $dados['problema'];

            $query_user = mysqli_query($connection, "INSERT INTO clientes(Nome, Email, Telefone, Produto, Marca, Problema) VALUES ('$nome', '$email', '$telefone', '$produto', '$marca', '$problema')");
         

        }catch (Exception){
            $retorna = ['status' => false, 'msg' => "<p style='color:white; background:red; margin:15px;'>Error: Nome e/ou Email e/ou Telefone já foi registrado.</p>"];
        }
              
    }

    echo json_encode($retorna);
