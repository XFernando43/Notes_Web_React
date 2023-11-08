import React from "react";
import './notes.style.css'

export default function NotesComponent(){   

    return(
        <div className="card_container">
            <h1 className="card__title">Nota Ejemplo</h1>
            <p className="card__text">Cuerpo de nota</p>
        </div>

    );
}