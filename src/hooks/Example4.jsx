/**
 * Ejemplo para entender el uso de props.children
 */

import React from 'react';

const Example4 = (props) => {
    return (
        <div>
            <h1>*** Ejemplo de CHILDREN PROPS ***</h1>
            <h2>
                Nombre: {props.nombre}
            </h2>
             {/* Props.children pintará por defecto aquello que se encuentre
             entre las etiquetas de apertura y de cierre de este componente desde el componente
             de orden superior */}
             {props.children}
        </div>
    );
}

export default Example4;
