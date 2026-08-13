function verificarAprovacao(media) {
    if (media >= 7) {
        return"Aprovado";
    } else {
        return"Reprovado";
    }
}
console.log(verificarAprovacao(8));
console.log(verificarAprovacao(6));