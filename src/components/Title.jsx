import { useState } from 'react';
import '../Title.css';


export function Title() {
    const [isBlue, setIsBlue] = useState(true);

    return (
        <div>
            <h1 style={{ color: isBlue ? 'blue' : 'red' }}>
                Mon Titre
            </h1>
            <button onClick={() => setIsBlue(!isBlue)}>
                Changer la couleur du titre
            </button>
        </div>
    );
}