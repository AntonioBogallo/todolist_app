import React, { useEffect } from 'react';

const AllCycles = () => {

    useEffect(() => {
        console.log("Componente creado");

        const intervalID = setInterval(() => {
            document.title= `${new Date()}`
            console.log("Actualizacion del componente");
        },1000);

        return () => {
            console.log("El componente va a desaparecer");
            document.title = "El tiempo de ha detenido"
            clearInterval(intervalID)
        };
    }, []);

    return (
        <div>
            
        </div>
    );
}

export default AllCycles;
