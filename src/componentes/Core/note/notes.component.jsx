import React from "react";

const url_base = "https://codeable-keep-api-production.up.railway.app/api";

export default function NotesComponent({username}){
    const [notes, setNotes]=React.useState([]);


    React.useEffect(() => {
        const url = `${url_base}/${username}/notes`;
        fetch(url)
          .then((response) => {
            if (!response.ok) {
              alert("Something went wrong with the API");
            } else {
              return response.json();
            }
          })
          .then((data) => {
            setNotes(data.notes);
          })
          .catch((error) => {
            console.error('Hubo un error inesperado');
          });
      }, []);

    return(
        <div>
            hola soy el cuerpesito
            <ul>
                <h1>HOLA SOY UN CUERPOTE</h1>
                <button
                onClick={()=>{
                    console.log(notes)
                }}>
                    mostrar
                </button>

                {
                    notes.map((nota)=>(
                        <h1 key={nota.id}>{nota.id}</h1>
                    ))
                }

            </ul>
        </div>

    );
}