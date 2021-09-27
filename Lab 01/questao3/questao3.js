let soma = 0;

for ( i=0; i<=1000; i++)
{
    if (i%2 == 0)
    {
        soma = soma + i;
        console.log("\n i: " +i)
    }
}
console.log("Soma dos números pares até 1000: " + soma)