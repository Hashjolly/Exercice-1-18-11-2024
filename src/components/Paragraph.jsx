import { useState } from 'react';

export function Paragraph() {
    const [isHello, setIsHello] = useState(true);

    return (
        <div>
            <p>{isHello ? 'Hello' : 'Goodbye'}</p>
            <button onClick={() => setIsHello(!isHello)}>
                Changer le texte
            </button>
        </div>
    );
}