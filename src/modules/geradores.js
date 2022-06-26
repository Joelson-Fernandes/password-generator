// gera um valor aleatórios
const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
// gera letra maiúscula aleatoria
const geraMaiuscula = () => String.fromCharCode(rand(65, 90)); 
// gera letra minuscula aleatoria
const geraMinuscula = () => String.fromCharCode(rand(97, 122)); 
// gera numeros aleatoria
const geraNumeros = () => String.fromCharCode(rand(48, 57)); 
// gera simbolos aleatorio
const simbolos = '!@#$%¨&*()_+=/-+.,?{}^~';
const geraSimbolos = () => simbolos[rand(0, simbolos.length)] 

export default function geraSenha(qtd, maiuscula, minuscula, numeros, simbolos) {
    const senhaArr = [];
    qtd = Number(qtd);

    for (let i = 0; i < qtd; i++) {
        maiuscula && senhaArr.push(geraMaiuscula());
        minuscula && senhaArr.push(geraMinuscula());
        numeros && senhaArr.push(geraNumeros());
        simbolos && senhaArr.push(geraSimbolos());
    }

    return senhaArr.join('').slice(0, qtd);
}