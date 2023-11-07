import React from "react";
import './loggin.style.css'; // Cambio en la importación de estilos

export default function LoggingComponent() {
    const [username, setUsername] = React.useState('');

    function handleSubmit(event) {
        event.preventDefault();
        localStorage.setItem('username', username); // Guarda el nombre de usuario en el localStorage al enviar el formulario
    }

    return (
        <div className="container">
            <form className="loggin__form" onSubmit={handleSubmit}>
                <div className="input-group">
                    <h1 className="loggin__title">Welcome To Codeable Keep</h1>
                    <label htmlFor="username">username</label> {/* Corrección en el atributo "for" */}
                    <input
                        type="text"
                        placeholder="Username Here"
                        name="username"
                        id="username"
                        className="input"
                        required
                        value={username} // Agrega el valor del estado al campo de entrada
                        onChange={(e) => setUsername(e.target.value)} // Maneja los cambios en el campo de entrada
                    />
                    <button type="submit" className="button">
                        Enter
                    </button>
                </div>
            </form>
        </div>
    );
}
