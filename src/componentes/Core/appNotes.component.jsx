import HeaderComponent from "../commons/header/header.component";
import SidebarComponent from "../commons/sidebar/sidebar.component";
import ListNoteComponent from "./list-notes/list-note.component";
export default function AppNotesComponent({username, onExit}){
    return(
        <div>
            <HeaderComponent username={username} onExit={onExit}/>      
            <SidebarComponent/>
            <main>
                <ListNoteComponent username={username}/>
            </main>
        </div>
    );
}