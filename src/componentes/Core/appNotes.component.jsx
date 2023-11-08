import HeaderComponent from "../commons/header/header.component";
import SidebarComponent from "../commons/sidebar/sidebar.component";
export default function AppNotesComponent({username, onExit}){
    return(
        <div>
            <HeaderComponent username={username} onExit={onExit}/>      
            <SidebarComponent/>
        </div>
    );
}