import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <>
            <nav >
                <div className="nav">
                    <ul className="list">
                        <li><NavLink to="/" exact >Home</NavLink></li>
                        <li><NavLink to="/search" >Search</NavLink></li>
                        <li><NavLink to="/about" >About NASA</NavLink></li>

                    </ul>
                </div>


            </nav>

        </>
    );
}

export default Navigation;