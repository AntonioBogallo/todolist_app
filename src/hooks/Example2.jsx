import React, {useEffect,useState,useRef} from 'react';

const Example2 = () => {

    // Vamos a crear dos contadores distintos
    // Cada uno en un estado diferente

    const [contador1, setcontador1] = useState(0);
    const [contador2, setcontador2] = useState(0);

    // Vamos a crear una referencia con useRef() para asociar una variable
    // con un elemento del DOM del componente (vista HTML)

    const miRef = useRef();

    function incrementar1(){
        setcontador1(contador1 + 1);
    }

    function incrementar2(){
        setcontador2(contador2 + 1);
    }

    /**
     * Trabajando con useEffect
     */

    /**
     * ? caso 1: ejecutar SIEMPRE un snippet de codigo
     * cada vez que haya un cambio en el estado del componente
     * se ejecuta aquello que esté dentro del useEffect()
     */

    // useEffect(() => {

    //     console.log("Cambio en el estado del componente");
    //     console.log("Mostrando referencia a elemento del DOM");
    //     console.log(miRef);

    // });


    /**
     * ? caso 2: Ejecutar SOLO cuando cambie contador 1
     * Cada vez que haya un cambio en contador 1 se ejecuta lo que diga el useEffect
     * En caso de que cambie contador 2, no habrá ejecución
     */

    // useEffect(() => {
    //     console.log("Cambio en el estado del Contador 1");
    //     console.log("Mostrando referencia a elemento del DOM");
    //     console.log(miRef);
    // },[contador1]);

    /**
    * ? caso 3: Ejecutar SOLO cuando cambie contador 1 o contador2
    * Cada vez que haya un cambio en contador 1 o en contador 2 se ejecuta lo que diga el useEffect
    */
       useEffect(() => {
        console.log("Cambio en el estado del Contador 1 o 2");
        console.log("Mostrando referencia a elemento del DOM");
        console.log(miRef);
        },[contador1, contador2]);


    return (
        <div>
            <h1>***Ejemplo del useState(),useRef() y useEffect() ***</h1>
            <h2>CONTADOR 1: { contador1 }</h2>
            <h2>CONTADOR 2: { contador2 }</h2>
            {/* Elemento referenciado */}
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>
            {/* Botones para cambiar los contadores */}
            <div>
                <button onClick={incrementar1}>Incrementar contador 1</button>
                <button onClick={incrementar2}>Incrementar contador 2</button>
            </div>
        </div>
    );
}

export default Example2;
