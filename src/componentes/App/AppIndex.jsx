import React from "react";
import LoggingComponent from '../Loggin/loggin.component';
import AppNotesComponent from "../Core/appNotes.component";
export default function AppIndex(){
    const [username, setUsername] = React.useState(()=>
        window.localStorage.getItem('username') 
    );

    React.useEffect(()=>{
        window.localStorage.setItem('username',username);
    },[username])

    function onFormSubmit(value){
        setUsername(value)
    }
    function onExit(){
        setUsername("");
    }

    return (
        <div>
            {
                username?(
                    <AppNotesComponent username={username} onExit={onExit}/>
                ):(
                    <LoggingComponent onFormSubmit={onFormSubmit}/>
                )
            }
        </div>
    );

}
