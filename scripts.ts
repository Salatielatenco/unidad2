class examen{

    public ejercicio1() : void {
        console.log("hola mundo")
        
    }

    public ejercicio2(): void{
        let saludo : string="hola mundo";
        console.log(saludo)
    }
    
    public ejercicio3(): void{
        let nombre : any= prompt("ingresa tu nombre")

        console.log('¡ hola !'+ " "+ nombre)
    }

    public ejercicio4():void{
        let nombre : any=prompt("ingresa tu nombre")
        let numero: any= prompt("ingresa un numero")
        numero = parseInt(numero);
        for (let i = 1; i <= numero; i++) {
            console.log (nombre + " " + i);
        }
    }

    public ejercicio5() :void{
        let nombre: any=prompt("ingrese su nombre completo")
        console.log(nombre.toUpperCase());
        console.log(nombre.toLowerCase());
    }

    public ejercicio6():void{
        let edad : any = prompt("Ingresa tu edad");
        edad = parseInt(edad);
        if(edad>=18){
            console.log("eres mayor de edad")
        }else{
            console.log("eres menor de edad")
        }

    }
    public ejercicio7():void{
        let password: any=("hola")
        let password1 : any=prompt("ingresa tu password")
        if(password===password1){
            console.log("la contraseña coinciden ")
        }else{
            console.log("no coinciden las contraseñas")
        }
    }
    public ejercicio8(): void{
        let palabra: any= prompt("ingrese una palabra")
        for (let i = 1; i < 11; i++) {
            console.log (palabra + " " + i);
        }
    }
    public ejercicio9():void{
        let edad: any = prompt("ingresa tu edad")
        edad = parseInt(edad);
        for (let i = 0; i < edad; i++) {
            console.log ("has cumplido" + " " + (i+1) +" " +"años" );
        }
    }
    public ejercicio10():void{
        let cantidad_invertir : any=prompt("ingresa una cantidad a invertir ")
        let intereses_anual: any=prompt("ingresa el interes anual")
        let años: any=prompt("ingresa el numero de años ")

        cantidad_invertir = parseInt (cantidad_invertir);
        intereses_anual = parseInt (intereses_anual);
        let porciento = intereses_anual/100;
        let ganancias1 = Math.pow(años,porciento);
        let ganancias2 =cantidad_invertir * ganancias1

        console.log("las ganacia futuras fueron " + " " + ganancias2  )
    }
}
const temas = new examen();
temas.ejercicio10();