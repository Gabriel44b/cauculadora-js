
const telaresultado = document.querySelector('#telar');


const opporcentagen = document.querySelector('#opporcentagen');
const opdivisao = document.querySelector('#opdivisao');
const opmulti = document.querySelector('#opmulti');
const opsoma = document.querySelector('#opsoma');
const opsub = document.querySelector('#opsub');


const btn0 = document.querySelector('#btn-0');
const btn1 = document.querySelector('#btn-1');
const btn2 = document.querySelector('#btn-2');
const btn3 = document.querySelector('#btn-3');
const btn4 = document.querySelector('#btn-4');
const btn5 = document.querySelector('#btn-5');
const btn6 = document.querySelector('#btn-6');
const btn7 = document.querySelector('#btn-7');
const btn8 = document.querySelector('#btn-8');
const btn9 = document.querySelector('#btn-9');
const btnig = document.querySelector('#btn-equal')

function mostrar(numero){
    telaresultado.value =  telaresultado.value+numero;
}



btn0.addEventListener('click',function(){

    mostrar(0)
});

btn1.addEventListener('click',function(){

    mostrar(1)
})

btn2 .addEventListener('click',function(){

    mostrar(2)
})

btn3 .addEventListener('click',function(){

    mostrar(3)
})

btn4 .addEventListener('click' ,function(){

    mostrar(4)
})

btn5 .addEventListener('click' ,function(){

    mostrar(5)
})

btn6 .addEventListener('click' ,function(){

    mostrar(6)
})

btn7 .addEventListener('click' ,function(){

    mostrar(7)
})

btn8 .addEventListener('click',function(){

    mostrar(8)
})

btn9 .addEventListener('click',function(){

    mostrar(9)
})


let valor1;
let valor2;
let resultado;
let opselect;


function delet(){

    telaresultado.value = '';
};

opsoma .addEventListener('click',function(){

    valor1 = parseFloat(telaresultado.value);
    opselect = '+';
    delet();
    console.log(valor1);
    console.log(opselect);
});

opmulti .addEventListener('click',function(){

    valor1 = parseFloat(telaresultado.value);
    opselect = 'x';
    delet();
    console.log(valor1);
    console.log(opselect);
});

opsub .addEventListener('click',function(){

    valor1 = parseFloat(telaresultado.value);
    opselect = '-';
    delet();
    console.log(valor1);
    console.log(opselect);
});

opporcentagen .addEventListener('click',function(){

    delet();
});



btnig .addEventListener('click' ,function(){

    valor2 = parseFloat(telaresultado.value);
    console.log(valor2)
    console.log(valor1+opselect+valor2)
    if(opselect == '+'){

        resultado = valor1 + valor2;
    }

    else if(opselect == 'x'){

        resultado = valor1 * valor2;
    }

    else if(opselect =='-'){

        resultado = valor1 - valor2;
    }

    else{
        resultado = valor1/valor2;
    }
    delet();
    console.log(resultado)
    mostrar(resultado);
})

