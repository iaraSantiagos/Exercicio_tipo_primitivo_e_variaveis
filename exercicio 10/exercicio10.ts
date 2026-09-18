// 10. Desafio (Par ou ímpar em array)
let lista: number[] = [3, 8, 12, 15, 22];
for (let num of lista) {
    let tipo = num % 2 === 0 ? "par" : "ímpar";
    console.log(`O número ${num} é ${tipo}`);
}