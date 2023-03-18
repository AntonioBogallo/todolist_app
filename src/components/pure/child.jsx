import React, { useRef } from 'react';

const Child = ({ name,send }) => {

  const messageRef = useRef('')

  function pressButton(){
    const text = messageRef.current.value
    alert(`Text input ${text}`)
  }

  function pressButtonParams(text){
    alert(`Text: ${text}`);
  }

    return (
        <div>
            <p onMouseOver={() => console.log("On mouse over")}>Child Component</p>
            <button onClick={() => console.log("Boton 1 pulsado")}>Button 1</button>
            <button onClick={pressButton}>Button 2</button>
            <button onClick={() => pressButtonParams("Hello")}>Button 3</button>
            <input placeholder='Insert a text' onFocus={() => console.log("Input focus")} onChange={(e) => console.log(e.target.value)} onCopy={() => console.log("Copied text from input")} ref={messageRef} />
        <button onClick={() => send(messageRef.current.value) }>Send message</button>
        </div>
    );
}

export default Child;
