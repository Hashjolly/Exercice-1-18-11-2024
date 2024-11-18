export function Children({ children, color }) {
    return (
        <div style={{ color: color }}>
            {children}
            <h3>Composant Enfant</h3>
        </div>
    );
}