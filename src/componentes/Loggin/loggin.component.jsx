import styles from "./loggin.style.css";

export default function LoggingComponent(){
    return(
        <div className="container">
            <form action="post" className="loggin__form">
                <div className="input-group">
                    <h1 className="loggin__title">Welcome To Codeable Keep</h1>
                    <label htmlFor="usermane">username</label>
                    <input type="text" 
                        placeholder="username Here"
                        name="username" 
                        id="username"
                        className="input"
                        required
                        />
                    <button type="submit" className="button">
                    Enter
                    </button>    
                </div>
            </form>
        </div>
    );
}