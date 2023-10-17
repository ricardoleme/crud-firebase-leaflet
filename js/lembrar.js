
    // Obtém o elemento do checkbox "Lembrar-me"
    let checkLembrar = document.getElementById("lembrar");

    // Obtém os campos de email e senha
    let campoEmail = document.getElementById("email");
    let campoSenha = document.getElementById("senha");

    // Verifica se o usuário optou por lembrar-se
    checkLembrar.addEventListener("click", function () {
        if (checkLembrar.checked) {
            // Se marcado, armazena os dados no localStorage
            localStorage.setItem("lembrarEmail", campoEmail.value);
            localStorage.setItem("lembrarSenha", campoSenha.value);
        } else {
            // Se desmarcado, remove os dados do localStorage
            localStorage.removeItem("lembrarEmail");
            localStorage.removeItem("lembrarSenha");
        }
    });

    // Verifica se há dados lembrados no localStorage ao carregar a página
    window.addEventListener("load", function () {
        let lembrarEmail = localStorage.getItem("lembrarEmail");
        let lembrarSenha = localStorage.getItem("lembrarSenha");

        if (lembrarEmail && lembrarSenha) {
            // Se existirem dados lembrados, preencha os campos de email e senha
            campoEmail.value = lembrarEmail;
            campoSenha.value = lembrarSenha;
            checkLembrar.checked = true; // Marque o checkbox
        }
    });

