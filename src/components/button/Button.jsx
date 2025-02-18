
function Button({ icon, text, className = "", type = "" }) {
    return (
        <button type={type} className={className}>
            <span>{icon}</span> {text}
        </button>
    );
}

export default Button;
