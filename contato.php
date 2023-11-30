<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="x-ua-compatible" content="ie-edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="style/style.css">
    <title>Contatos</title>
</head>
<body>
    <header>
        <nav class="navigation">
            <div class="home-img_contatos">
                <img src="images/gamer-logo-removebg-preview.png" alt="gamesstore">

            </div>
            
            <div class="area-de-contato">
                    <h1>Contate Me</h1>
            </div>
            <ul class="nav-menu">
                <li class="nav-item" name="inicio"><a href="index.php">Inicio</a></li>
               
            </ul>
            <div class="menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
    </header>
    <main>
        <section class="home">
            <div class="home-text_contato">
                <form method="POST" id="form_cad" class="form_contato">
                    <span id="msgAlertaStatus"></span>
                    <h3><font color="white" size="5">Preencha nosso formulário.</font></h3>
                    <h4 class="text_nome_form">Nome Completo:</h4>
                    <input type="text" id="nome" name="nome" class="nome_form" placeholder="Seu nome aqui"></input>
                    <h4 class="text_email_form">Email:</h4>
                    <input type="text" id="email"  name="email" class="email_form" placeholder="Seu email aqui"></input>
                    <h4 class="text_telefone_form">Telefone:</h4>
                    <input type="text" id="telefone"  name="telefone" class="telefone_form" placeholder="Seu telefone aqui"></input>
                    <h4 class="text_telefone_form">Produto:</h4>
                    <input type="text" id="produto"  name="produto" class="produto_form" placeholder="Seu produto aqui"></input>
                    <h4 class="text_marca_select">Selecione a Marca:</h4>
                    <select id="marca" name="marca"  name="marca" class="select_marca">
                            <option value="">Selecione</option>
                            <option value="sony">Sony</option>
                            <option value="microsoft">Microsoft</option>
                    </select>
                    <h4 class="text_mensagem_form">Descreva o Problema:</h4>
                    <textarea id="mensagem_user"  name="problema" class="mensagem_form" cols="30" rows="4" placeholder="Mensagem" aria-required="true" aria-invalid="false"></textarea><br>
                    <button id="b_enviar" type="submit" class="btn_enviar" >Enviar</button> 
                      
                </form>
                <div class="img-fer">
                    <img src="images/ferramenta-removebg-preview.png" alt="manutençao">
                </div>    
            
            
            </div>
            
        </section>
    </main>
    <script src="js/script.js"></script> 
    
            
</body>
</html>
