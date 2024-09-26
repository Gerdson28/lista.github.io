// Função para validar um endereço de email
function validateEmail(email) {
    // Utiliza uma expressão regular para verificar se o email está no formato correto:
    // - Deve conter caracteres antes do "@" (pelo menos um)
    // - Deve conter "@" seguido por pelo menos um caractere e um ponto "."
    // - Deve conter caracteres após o ponto (pelo menos um)
    return /\S+@\S+\.\S+/.test(email); // Retorna verdadeiro se o email for válido, falso caso contrário
}
