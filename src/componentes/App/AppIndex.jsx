import React from "react";
import HeaderComponent from "../commons/header/header.component";
import LoggingComponent from "../Loggin/loggin.component";
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
                    <HeaderComponent username = {username} onExit = {onExit}/>
                ):(
                    <LoggingComponent onFormSubmit={onFormSubmit}/>
                )
            }
        </div>
    );

}
