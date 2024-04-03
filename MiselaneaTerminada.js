const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularAreaTriangulo() {
  rl.question('Ingresa la base del triángulo: ', (base) => {
    rl.question('Ingresa la altura del triángulo: ', (altura) => {
      const area = (base * altura) / 2;
      console.log('El área del triángulo es: ' + area);
      showMenu();
    });
  });
}

function sumarDosNumeros() {
  rl.question('Ingresa el primer número: ', (num1) => {
    rl.question('Ingresa el segundo número: ', (num2) => {
      const suma = parseInt(num1) + parseInt(num2);
      console.log('La suma de los números es: ' + suma);
      showMenu();
    });
  });
}

function elevarAlCuadrado() {
  rl.question('Ingresa un número: ', (numero) => {
    const cuadrado = Math.pow(numero, 2);
    console.log('El número elevado al cuadrado es: ' + cuadrado);
    showMenu();
  });
}

function eurosADolares() {
  rl.question('Ingresa la cantidad de euros: ', (euros) => {
    const dolares = euros * 1.17; // Suponiendo que 1 euro equivale a 1.17 dólares
    console.log(euros + ' euros son ' + dolares + ' dólares');
    showMenu();
  });
}

function calcularAreaPerimetroCuadrado() {
  rl.question('Ingresa el lado del cuadrado: ', (lado) => {
    const area = lado * lado;
    const perimetro = lado * 4;
    console.log('El área del cuadrado es: ' + area);
    console.log('El perímetro del cuadrado es: ' + perimetro);
    showMenu();
  });
}

function calcularAreaVolumenCilindro() {
  rl.question('Ingresa el radio del cilindro: ', (radio) => {
    rl.question('Ingresa la altura del cilindro: ', (altura) => {
      const area = Math.PI * radio * radio;
      const volumen = area * altura;
      console.log('El área del cilindro es: ' + area);
      console.log('El volumen del cilindro es: ' + volumen);
      showMenu();
    });
  });
}

function calcularLongitudAreaCircunferencia() {
  rl.question('Ingresa el radio de la circunferencia: ', (radio) => {
    const longitud = 2 * Math.PI * radio;
    const area = Math.PI * Math.pow(radio, 2);
    console.log('La longitud de la circunferencia es: ' + longitud);
    console.log('El área del círculo es: ' + area);
    showMenu();
  });
}

function calcularPromedioTresNumeros() {
  rl.question('Ingresa el primer número: ', (num1) => {
    rl.question('Ingresa el segundo número: ', (num2) => {
      rl.question('Ingresa el tercer número: ', (num3) => {
        const promedio = (parseInt(num1) + parseInt(num2) + parseInt(num3)) / 3;
        console.log('El promedio de los números es: ' + promedio);
        showMenu();
      });
    });
  });
}

function verificarPositivoNegativo() {
  rl.question('Ingresa un número: ', (numero) => {
    if (numero > 0) {
      console.log('El número ingresado es positivo.');
    } else if (numero < 0) {
      console.log('El número ingresado es negativo.');
    } else {
      console.log('El número ingresado es cero.');
    }
    showMenu();
  });
}

function mayorMenorNumeros() {
  rl.question('Ingresa el primer número: ', (num1) => {
    rl.question('Ingresa el segundo número: ', (num2) => {
      if (num1 > num2) {
        console.log('El primer número es mayor que el segundo.');
      } else if (num1 < num2) {
        console.log('El segundo número es mayor que el primero.');
      } else {
        console.log('Los números son iguales.');
      }
      showMenu();
    });
  });
}

function mayorMenorTresNumeros() {
  rl.question('Ingresa el primer número: ', (num1) => {
    rl.question('Ingresa el segundo número: ', (num2) => {
      rl.question('Ingresa el tercer número: ', (num3) => {
        const mayor = Math.max(num1, num2, num3);
        const menor = Math.min(num1, num2, num3);
        console.log('El número mayor es: ' + mayor);
        console.log('El número menor es: ' + menor);
        showMenu();
      });
    });
  });
}

function sumarOrestarSegunCondicion() {
  rl.question('Ingresa el primer número: ', (num1) => {
    rl.question('Ingresa el segundo número: ', (num2) => {
      if (num1 < num2) {
        console.log('La suma de los números es: ' + (parseInt(num1) + parseInt(num2)));
      } else {
        console.log('La resta de los números es: ' + (parseInt(num1) - parseInt(num2)));
      }
      showMenu();
    });
  });
}

function cocienteAB() {
  rl.question('Ingresa el valor de A: ', (a) => {
    rl.question('Ingresa el valor de B: ', (b) => {
      if (b == 0) {
        console.log('La división por cero no está definida.');
      } else {
        console.log('El cociente entre A y B es: ' + (a / b));
      }
      showMenu();
    });
  });
}

function sumaOmultiplicacionSegunCondicion() {
  rl.question('Ingresa el primer número: ', (num1) => {
    rl.question('Ingresa el segundo número: ', (num2) => {
      if (num1 < 0 || num2 < 0) {
        console.log('La suma de los números es: ' + (parseInt(num1) + parseInt(num2)));
      } else {
        console.log('La multiplicación de los números es: ' + (parseInt(num1) * parseInt(num2)));
      }
      showMenu();
    });
  });
}

function verificarAnoBisiesto() {
  rl.question('Ingresa un año: ', (ano) => {
    if ((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0) {
      console.log('El año ' + ano + ' es bisiesto.');
    } else {
      console.log('El año ' + ano + ' no es bisiesto.');
    }
    showMenu();
  });
}

function imprimirMultiplosDeTres() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
      console.log(i);
    }
  }
  showMenu();
}

function imprimirNumerosImpares() {
  for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
  showMenu();
}

function imprimirNumerosPares() {
  for (let i = 2; i <= 100; i += 2) {
    console.log(i);
  }
  showMenu();
}

function imprimirCuadradosDelUnoAlTreinta() {
  for (let i = 1; i <= 30; i++) {
    console.log(i + ' al cuadrado es ' + Math.pow(i, 2));
  }
  showMenu();
}

function sumarCuadradosCienPrimeros() {
  let suma = 0;
  for (let i = 1; i <= 100; i++) {
    suma += Math.pow(i, 2);
  }
  console.log('La suma de los cuadrados de los cien primeros números naturales es: ' + suma);
  showMenu();
}

function mostrarNumerosComprendidos() {
  rl.question('Ingresa el primer número: ', (num1) => {
    rl.question('Ingresa el segundo número: ', (num2) => {
      for (let i = parseInt(num1); i <= parseInt(num2); i++) {
        console.log(i);
      }
      showMenu();
    });
  });
}

function sumarNumerosTeclado() {
  let suma = 0;
  rl.question('Ingresa un número (digita 0 para terminar): ', (numero) => {
    while (parseInt(numero) !== 0) {
      suma += parseInt(numero);
      rl.question('Ingresa otro número (digita 0 para terminar): ', (numero) => {
        if (parseInt(numero) === 0) {
          console.log('La suma de los números ingresados es: ' + suma);
          showMenu();
        }
      });
    }
  });
}

function showMenu() {
  console.log('\n--- Menú ---');
  console.log('1. Operadores');
  console.log('2. Condicionales');
  console.log('3. Ciclos');
  console.log('99. Salir');
  rl.question('Ingresa una opción: ', (option) => {
    switch (parseInt(option)) {
      case 1:
        console.log('\n--- Operadores ---');
        console.log('1. Calcular el área de un triángulo');
        console.log('2. Ingresar dos números y sumarlos');
        console.log('3. Ingresar un número y calcular su cuadrado');
        console.log('4. Convertir de euros a dólares');
        console.log('5. Calcular área y perímetro de un cuadrado');
        console.log('6. Calcular área y volumen de un cilindro');
        console.log('7. Calcular longitud y área de una circunferencia');
        console.log('8. Calcular promedio de tres números');
        rl.question('Ingresa una opción: ', (subOption) => {
          switch (parseInt(subOption)) {
            case 1:
              calcularAreaTriangulo();
              break;
            case 2:
              sumarDosNumeros();
              break;
            case 3:
              elevarAlCuadrado();
              break;
            case 4:
              eurosADolares();
              break;
            case 5:
              calcularAreaPerimetroCuadrado();
              break;
            case 6:
              calcularAreaVolumenCilindro();
              break;
            case 7:
              calcularLongitudAreaCircunferencia();
              break;
            case 8:
              calcularPromedioTresNumeros();
              break;
            default:
              console.log('Opción no válida');
              showMenu();
          }
        });
        break;
      case 2:
        console.log('\n--- Condicionales ---');
        console.log('1. Verificar si un número es positivo o negativo');
        console.log('2. Verificar mayor y menor entre dos números');
        console.log('3. Encontrar mayor y menor entre tres números');
        console.log('4. Sumar o restar según condición');
        console.log('5. Calcular cociente entre dos números');
        console.log('6. Sumar o multiplicar según condición');
        console.log('7. Verificar si un año es bisiesto');
        rl.question('Ingresa una opción: ', (subOption) => {
          switch (parseInt(subOption)) {
            case 1:
              verificarPositivoNegativo();
              break;
            case 2:
              mayorMenorNumeros();
              break;
            case 3:
              mayorMenorTresNumeros();
              break;
            case 4:
              sumarOrestarSegunCondicion();
              break;
            case 5:
              cocienteAB();
              break;
            case 6:
              sumaOmultiplicacionSegunCondicion();
              break;
            case 7:
              verificarAnoBisiesto();
              break;
            default:
              console.log('Opción no válida');
              showMenu();
          }
        });
        break;
      case 3:
        console.log('\n--- Ciclos ---');
        console.log('1. Imprimir múltiplos de 3 entre 1 y 100');
        console.log('2. Imprimir números impares entre 0 y 100');
        console.log('3. Imprimir números pares del 1 al 100');
        console.log('4. Imprimir cuadrados del 1 al 30');
        console.log('5. Sumar cuadrados de los cien primeros números naturales');
        console.log('6. Mostrar números entre dos valores');
        console.log('7. Sumar números ingresados por teclado');
        rl.question('Ingresa una opción: ', (subOption) => {
          switch (parseInt(subOption)) {
            case 1:
              imprimirMultiplosDeTres();
              break;
            case 2:
              imprimirNumerosImpares();
              break;
            case 3:
              imprimirNumerosPares();
              break;
            case 4:
              imprimirCuadradosDelUnoAlTreinta();
              break;
            case 5:
              sumarCuadradosCienPrimeros();
              break;
            case 6:
              mostrarNumerosComprendidos();
              break;
            case 7:
              sumarNumerosTeclado();
              break;
            default:
              console.log('Opción no válida');
              showMenu();
          }
        });
        break;
      case 99:
        rl.close();
        break;
      default:
        console.log('Opción no válida');
        showMenu();
    }
  });
}

showMenu();
