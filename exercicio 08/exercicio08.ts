// 8. Loop for...of (Soma de array) Resultado da soma total é 150
let numeros: number[] = [10, 20, 30, 40, 50];
let soma = 0;
for (let n of numeros) {
    soma += n;
}
console.log(`Soma total: ${soma}`);
