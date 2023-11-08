import HeaderComponent from "../commons/header/header.component";
import SidebarComponent from "../commons/sidebar/sidebar.component";
import NotesComponent from "./note/notes.component";
export default function AppNotesComponent({username, onExit}){
    return(
        <div>
            <HeaderComponent username={username} onExit={onExit}/>      
            <SidebarComponent/>
            <main>
                <NotesComponent username={username}/>
            </main>
        </div>
    );
}