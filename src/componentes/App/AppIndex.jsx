import LoggingComponent from "../Loggin/loggin.component";
import React from "react";
export default function AppIndex(){
    const [username, setUsername] = React.useState('');

    React.useEffect(()=>{
        window.localStorage.setItem('username',username);
    },[username]);

    function updateUsername(value){
        setUsername(value);
    }

    return (
        <div>

        {
            username?(
                <h1>Hola</h1>
            ):(
            <LoggingComponent updateUsername={updateUsername} />
            )
        }

        </div>
    
    );
}