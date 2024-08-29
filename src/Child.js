import React, { useRef } from 'react';

function Child({ verificaParola }) {
  const passwordRef = useRef(null);

  const handleClick = () => {
    const parola = passwordRef.current.value;
    verificaParola(parola);
  };

  return (
    <div>
      <input ref={passwordRef} type="password" placeholder="Introdu parola" />
      <button onClick={handleClick}>Afișează Detalii</button>
    </div>
  );
}

export default Child;
