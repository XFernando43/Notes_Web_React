import React from "react";
import './loggin.style.css'; // Cambio en la importación de estilos

export default function LoggingComponent({onSubmit}) {
    const [value, setValue] = React.useState("");   
    
    function updateInfo(event){
        event.preventDefault();
        onSubmit(value);
    }

    return (
        <div className="container">
            <form className="loggin__form" onSubmit={updateInfo}>
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
                        onChange={(e) => setValue(e.target.value)} 
                    />
                    <button type="submit" className="button">
                        Enter
                    </button>
                </div>
            </form>
        </div>
    );
}
