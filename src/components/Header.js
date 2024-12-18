import React from 'react';
import '../styles.css';

export default function Header(){
return (<div className="header">
    <img className="logo" src={`${process.env.PUBLIC_URL}/logo.png`} alt="logoImg" />
    <h2 classname="app-subtitle" >It's time to popcorn! Find your next movie here... </h2>
</div>);
}