import React from "react";
import HeaderComponent from "../commons/header/header.component";
import LoggingComponent from "../Loggin/loggin.component";
export default function AppIndex(){
    const [username, setUsername] = React.useState(()=>{
        return window.localStorage.getItem('username') || ''; // Valor por defecto ''
    });
    
    React.useEffect(()=>{
        window.localStorage.setItem('username',username);
    },[username]);

    function OnSubmit(value){
        setUsername(value);
    }

    function onExit(){
        // window.localStorage.clear();
        // window.location.reload();
        setUsername("");
    }

    return(
        <div>
            {
                username?(
                    <HeaderComponent username = {username} onExit={onExit}/>
                ):(
                    <LoggingComponent OnSubmit = {OnSubmit}/>
                )
            }
        </div>
    );
}
