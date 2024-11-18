import { Children } from './Children';

export function Parent() {
    return (
        <div>
            <h2>Composant Parent</h2>
            <Children color="blue">
                Ici on transmets "Rouge"
            </Children>
            <Children color="red">
            Ici on transmets "Bleu"
            </Children>
        </div>
    );
}