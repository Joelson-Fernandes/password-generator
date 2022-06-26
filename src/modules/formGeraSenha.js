import geraSenha from "./geradores";

const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const maiuscula = document.querySelector('.chk-maiusculas');
const minuscula = document.querySelector('.chk-minusculas');
const numeros = document.querySelector('.chk-numeros');
const simbolos = document.querySelector('.chk-simbolos');
const btnGerarSenha = document.querySelector('.gerar-senha');

export default () => {
    btnGerarSenha.addEventListener('click', () => {
    senhaGerada.innerHTML = gera();
    });
};

function gera() {
    const senha = geraSenha(
        qtdCaracteres.value,
        maiuscula.checked,
        minuscula.checked,
        numeros.checked,
        simbolos.checked
    );

    return senha || 'Nada selecionado.';
}