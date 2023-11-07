import LoggingComponent from "../Loggin/loggin.component";
import HeaderComponent from "../commons/header/header.component";
import React from "react";
export default function AppIndex(){
    const [username, setUsername] = React.useState('');

    React.useEffect(()=>{
        const storedUsername = window.localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    },[username]);

    React.useEffect(() => {
        if (username) {
            window.localStorage.setItem('username', username);
        }
    }, [username]);
    

    function updateUsername(value){
        setUsername(value);
    }


    return (
        <div>

        {
            username?(
                <HeaderComponent username = {username}/>
            ):(
                <LoggingComponent updateUsername={updateUsername} />
            )
        }

        </div>
    
    );
}