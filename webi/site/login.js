// Função chamada quando o campo de email muda
function onChangeEmail() {
    toggleButtonsDisable(); // Atualiza o estado dos botões com base na validade do email
    toggleEmailErrors(); // Verifica e exibe mensagens de erro relacionadas ao email
}

// Função chamada quando o campo de senha muda
function onChangePassword() {
    toggleButtonsDisable(); // Atualiza o estado dos botões com base na validade da senha
    togglePasswordErrors(); // Verifica e exibe mensagens de erro relacionadas à senha
}

// Função para realizar o login usando Firebase
function login() {
    firebase.auth().signInWithEmailAndPassword(
        form.email().value, form.password().value // Obtém email e senha dos campos do formulário
    ).then(response => {
        window.location.href = "pages/home/quadro.html"; // Redireciona para a página do quadro após login bem-sucedido
    }).catch(error => {
        alert(getErrorMessage(error)); // Exibe a mensagem de erro se o login falhar
    });
}

// Função para obter uma mensagem de erro personalizada
function getErrorMessage(error) {
    if (error.code == "auth/user-not-found") {
        return "Usuário não encontrado"; // Mensagem específica para usuário não encontrado
    }
    return error.message; // Retorna a mensagem de erro padrão do Firebase
}

// Função para redirecionar para a página de registro
function register() {
    window.location.href = "index.html"; // Redireciona para a página de cadastro
}

// Função para alternar a exibição de mensagens de erro do email
function toggleEmailErrors() {
    const email = form.email().value; // Obtém o valor do campo de email
    form.emailRequiredError().style.display = email ? "none" : "block"; // Exibe ou oculta erro de email obrigatório
    
    // Verifica se o email é válido e exibe/oculta erro correspondente
    form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block"; 
}

// Função para alternar a exibição de mensagens de erro da senha
function togglePasswordErrors() {
    const password = form.password().value; // Obtém o valor do campo de senha
    form.passwordRequiredError().style.display = password ? "none" : "block"; // Exibe ou oculta erro de senha obrigatória
}

// Função para habilitar ou desabilitar botões com base na validade dos campos
function toggleButtonsDisable() {
    const emailValid = isEmailValid(); // Verifica se o email é válido
    form.recoverPasswordButton().disabled = !emailValid; // Habilita/desabilita botão de recuperação de senha

    const passwordValid = isPasswordValid(); // Verifica se a senha é válida
    form.loginButton().disabled = !emailValid || !passwordValid; // Habilita/desabilita botão de login
}

// Função para verificar se o email é válido
function isEmailValid() {
    const email = form.email().value; // Obtém o valor do campo de email
    if (!email) {
        return false; // Retorna falso se o campo de email estiver vazio
    }
    return validateEmail(email); // Retorna o resultado da validação do email
}

// Função para verificar se a senha é válida
function isPasswordValid() {
    return form.password().value ? true : false; // Retorna verdadeiro se a senha não estiver vazia
}

// Objeto para facilitar o acesso aos elementos do formulário
const form = {
    email: () => document.getElementById("email"), // Função para obter o campo de email
    emailInvalidError: () => document.getElementById("email-invalid-error"), // Função para obter o elemento de erro de email inválido
    emailRequiredError: () => document.getElementById("email-required-error"), // Função para obter o elemento de erro de email obrigatório
    loginButton: () => document.getElementById("login-button"), // Função para obter o botão de login
    password: () => document.getElementById("password"), // Função para obter o campo de senha
    passwordRequiredError: () => document.getElementById("password-required-error"), // Função para obter o elemento de erro de senha obrigatória
    recoverPasswordButton: () => document.getElementById("recover-password-button"), // Função para obter o botão de recuperação de senha
}
