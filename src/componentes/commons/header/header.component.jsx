import React from 'react';
import './header.style.css';

export default function HeaderComponent({username,onExit}){

    return(
        <header className='header'>
                <h2 className='header__title'>Welcom to Codeable Keep <strong> {username} </strong></h2>
                <button className='header__button' onClick={()=>{onExit()}}>
                    EXIT
                </button>
        </header>
    );
}