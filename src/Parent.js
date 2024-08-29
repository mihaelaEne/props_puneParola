import React, { useState } from 'react';
import Child from './Child';

function Parent() {
  const [showDetails, setShowDetails] = useState(false);

  const afiseazaDetalii = (parola) => {
    if (parola === '123') {
      setShowDetails(true);
    } else {
      alert("Parola incorectă!");
    }
  };

  return (
    <div>
      <Child verificaParola={afiseazaDetalii} />
      {showDetails && (
        <div style={{ marginTop: 20, padding: 10, border: '1px solid black' }}>
          <h2>Detalii Locație</h2>
          <p>Nume: Parc test</p>
          <p>Adresă: Strada Test, Nr. 0000, Oraș</p>
          <p>Orar: 08:00 - 22:00</p>
        </div>
      )}
    </div>
  );
}

export default Parent;
