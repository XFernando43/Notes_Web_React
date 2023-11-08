import './sidebar.style.css';
import brace from '../../../assets/braces.svg'
import trash from '../../../assets/trash.svg'
import React from 'react';
export default function SidebarComponent(){
    // const [value, setValue] = React.useState(false);

    return(
       
        <aside className='sidebar_container'>
            <ul className='list_Container'>
                <li className='Page_link selected'>
                    <img src={brace} alt="" />
                    <h2 className='option'>
                        Notes
                    </h2>
                </li>

                <li className='Page_link selected'>
                    <img src={trash} alt="" />
                    <h2 className='option'>
                        Trash
                    </h2>
                </li>
            </ul>
        </aside>
    );
}