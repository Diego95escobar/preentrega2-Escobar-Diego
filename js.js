let producto = ['No a escogido ningun producto','Impresora 3d F', 'Impresora 3d F', 'Impresora', 'Pack Filamento','Pack Resina'];

const productosComprar = new Array();     

    let respuesta = true;

    for (respuesta; respuesta == true;){
    resultadoProducto = window.prompt('¿Que producto desea comprar? \n 1.Impresora 3d F \n 2.Impresora 3d F \n 3.Impresora \n 4.Pack Filamento \n 5.Pack Resina');
    
        if(resultadoProducto == 0){
            window.alert('Escoga por favor un producto');
        }else if(resultadoProducto == 1){
            insertarProducto = producto[1];
            productosComprar.push(insertarProducto);
            respuesta = window.confirm('¿Quiere comprar otro producto?');
        }else if(resultadoProducto == 2){
            insertarProducto = producto[2];
            productosComprar.push(insertarProducto);
            respuesta = window.confirm('¿Quiere comprar otro producto?');
        }else if(resultadoProducto == 3){
            insertarProducto = producto[3];
            productosComprar.push(insertarProducto);
            respuesta = window.confirm('¿Quiere comprar otro producto?');
        }else if(resultadoProducto == 4){
            insertarProducto = producto[4];
            productosComprar.push(insertarProducto);
            respuesta = window.confirm('¿Quiere comprar otro producto?');
        }else if(resultadoProducto == 5){
            insertarProducto = producto[5];
            productosComprar.push(insertarProducto);
            respuesta = window.confirm('¿Quiere comprar otro producto?');
        }
    }
    
    let unicosElementos = [];
    let contadorDeVecesrepetidas = [];
    let contador = 1;

    for (let i = 0; i < productosComprar.length; i++){
        if (productosComprar[i+1] === productosComprar[i]){
            contador++;
        }else{
            unicosElementos.push(productosComprar[i]);
            contadorDeVecesrepetidas.push(contador);
            contador = 1;
        }
    }

    let Subtotal1 = 0;
    let Subtotal2 = 0;
    let Subtotal3 = 0;
    let Subtotal4 = 0;
    let Subtotal5 = 0;

    for (let c = 0; c < unicosElementos.length; c++) {
        console.log('El valor de ' + unicosElementos[c] + ' se repite ' + contadorDeVecesrepetidas[c]);
            if(contiene = unicosElementos[c].includes('Impresora 3d F')){        
                Impresora3dF = '250000' * 1.25; //1.25 es el iva
                Subtotal1 = Impresora3dF * contadorDeVecesrepetidas[c];
                console.log(Subtotal1);
            }
            if(contiene = unicosElementos[c].includes('Impresora 3d R')){        
                Impresora3dR = '350000' * 1.25; //1.25 es el iva
                Subtotal2 = Impresora3dR * contadorDeVecesrepetidas[c];
                console.log(Subtotal2);
            }
            if(contiene = unicosElementos[c].includes('Impresora')){        
                Impresora = '150000' * 1.25; //1.25 es el iva
                Subtotal3 = Impresora * contadorDeVecesrepetidas[c];
                console.log(Subtotal3);
            }
            if(contiene = unicosElementos[c].includes('Pack Filamento')){        
                PackFilamento = '120000' * 1.25; //1.25 es el iva
                Subtotal4 = PackFilamento * contadorDeVecesrepetidas[c];
                console.log(Subtotal4);                
            }
            if(contiene = unicosElementos[c].includes('Pack Resina')){        
                PackResina = '170000' * 1.25; //1.25 es el iva
                Subtotal5 = PackResina * contadorDeVecesrepetidas[c];
                console.log(Subtotal5);                            
            }                    
        }

        total = Subtotal1 + Subtotal2 + Subtotal3 + Subtotal4 + Subtotal5;
        console.log('el resultado a pagar es ' + total);