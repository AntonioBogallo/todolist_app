import React, {useState} from 'react';

// Definiendo estilos en constantes

// ? Estilo para usuario loggeado
const loggedStyle = {
    color: 'blue'    
}

// ? Estilo para usuario NO loggeado

const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}

const GreetingStyled = (props) => {

    // Estado para controlar si el usuario está o no loggeado

    const [logged, setLogged] = useState(false);

    return (
        <div style={ logged ? loggedStyle : unloggedStyle }>
            {
                logged ? (<p>Hola, {props.name}</p>) : (<p>Please login</p>)
            }
            <button onClick={() => {
                console.log('boton pulsado');
                setLogged(!logged);
            }}>
                { logged ? 'Logout' : 'Login' }
            </button>
        </div>
    );
}

export default GreetingStyled;
