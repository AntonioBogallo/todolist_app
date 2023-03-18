/**
 * Ejemplo de componente de tipo clase que dispone de los 
 * metodos del ciclo de vida
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';


class LifeCycleExample extends Component {

    constructor(props){
        super(props)
        console.log("CONSTRUCTOR: Cuando se instancia el componente")
    }

    componentWillMount(){
        console.log("WILLMOUNT: antes del montaje del componente")
    }

    componentDidMount(){
        console.log("DIDMOUNT: justo al acabar el montaje del componente antes de renderizarlo")
    }

    componentWillReceiveProps(nextProps){
        console.log("WILLRECEIVEPROPS: si va a recibir nuevas props")
    }

    shouldComponentUpdate(nextProps,nextState){
        // return true or false
    }

    componentWillUpdate(){
        console.log("WILLUPDATE: antes de actualizarse")
    }

    componentDidUpdate(){
        console.log("DIDUPDATE: justo despues de actualizarse")
    }

    componentWillUnmount(){
        console.log("WILLUNMOUNT: justo antes de desaparecer")
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}


LifeCycleExample.propTypes = {

};


export default LifeCycleExample;


