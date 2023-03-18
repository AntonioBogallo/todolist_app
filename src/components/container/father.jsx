import React from 'react';
import Child from '../pure/child';

const Father = () => {

    function showMessage(text){
        alert(`Message: ${text}`);
    }

    return (
        <div>
            <Child name={"Antonio"} send={showMessage}></Child>
        </div>
    );
}

export default Father;
