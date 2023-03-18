import React,{useState} from 'react';

const Example1 = () => {

    const valorInicial = 0;
    const personaInicial = {
        nombre: "Antonio",
        email: "antonio@ejemplo.com"
    }

    const [contador,setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /**
     * Funcion para actualizar el estado privado que contiene el contador
     */

    function incrementarContador(){
        // ? funcionParaCambiar(nuevoValor)
        setContador(contador + 1);
    }

    /**
     * Funcion para actualizar el estado persona en el componente
     */

    function actualizarPersona(){
        setPersona({
            nombre: "Miguel",
            email: "miguel@ejemplo.com"
        })
    }

    return (
        <div>
            <h1>
                ***Ejemplo de useState()***
            </h1>
            <h2>
                CONTADOR: { contador }
            </h2>
            <h2>
                DATOS DE LA PERSONA:
            </h2>
            <h3>
                NOMBRE: { persona.nombre }
            </h3>
            <h4>
                EMAIL: { persona.email }
            </h4>
            
            <div>
                <button onClick={incrementarContador}>Incrementar Contador</button>
                <button onClick={actualizarPersona}>Actualizar Persona</button>
            </div>
        </div>
    );
}

export default Example1;
