import React, {useState, useContext} from 'react';

/**
 * @returns Componente 1
 * Dispone de un contexto que va a tener valor
 * que recibe desde el padre
 */

const miContexto = React.createContext(null);

const Componente1 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h1>
                El token es: {state.token}
            </h1>
            <Componente2></Componente2>
        </div>
    );
}

const Componente2 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h2>
                La sesión es: {state.sesion}
            </h2>
        </div>
    );
}

export default function MiComponenteConContexto(){

    const estadoInicial = {
        token: "1234567",
        sesion: 1
    }

    // Creamos el estado de este componente
    const [sessionData, setsessionData] = useState(estadoInicial);

    function actualizarSesion(){
        setsessionData(
            {
                token: "JWT124568",
                sesion: sessionData.sesion + 1
            }
        )
    }


    return (
        <miContexto.Provider value={sessionData}>
            <Componente1></Componente1>
            <button onClick={actualizarSesion}>Actualizar Sesion</button>
        </miContexto.Provider>
    );
}


