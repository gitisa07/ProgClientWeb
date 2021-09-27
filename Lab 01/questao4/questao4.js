let a, b, resultado;

a = 0;
b = 1;
resultado = b;

for(let i = 1; i < 100; i++)
    {
        console.log(resultado);
        resultado = a + b;
        a = b;
        b = resultado;
    }
