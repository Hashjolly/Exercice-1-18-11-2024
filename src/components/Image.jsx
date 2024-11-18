import { useState } from 'react';

export function Image() {
    const [isFirstImage, setIsFirstImage] = useState(true);

    return (
        <div>
            <img 
                src={isFirstImage 
                    ? 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTq1KZI9GbrTXSAmN0cj7bxaR7lweiUfwxRbGiVgH8SfSVKJyH1' 
                    : 'https://www.zoologiste.com/images/main/lama.jpg'} 
                alt="Dynamic" 
                style={{ width: '500px', height: 'auto' }} 
            />
            <button onClick={() => setIsFirstImage(!isFirstImage)}>
                Changer l'image
            </button>
        </div>
    );
}
