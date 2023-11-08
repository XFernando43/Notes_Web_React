import React from "react";
import NotesComponent from "../note/notes.component";
const url_base = "https://codeable-keep-api-production.up.railway.app/api";
export default function ListNoteComponent({username}){
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
            <NotesComponent/>
        </div>
    );
}