import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link, Navigate } from "react-router-dom";
import { useRef } from "react";
import { useEffect } from "react";


const Navbar = ({setState,setOrder}) => {
    // const [showMediaIcons, setShowMediaIcons] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef(null);
    // const [order, setOrder] = useState('priority');
    const handleMenu = (e) => {
        e.stopPropagation();
        setShowMenu((prev) => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowMenu(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className="navbar">
                <div className="display">
                    <div className="main-display" onClick={handleMenu}>
                        <FontAwesomeIcon icon={faSliders} style={{ color: "#363a3f", }} />
                        <div className="text">Display</div>
                        <FontAwesomeIcon icon={faChevronDown} style={{ color: "#6a717c", }} />
                    </div>
                </div>
                
            </div>
            {showMenu && (<div className="menu" ref={menuRef}>
                <div className="element">
                    <span className="category">Grouping</span>
                    <select className="select" onChange={e=>setState(e.target.value)}>
                      <option value="status">Status</option>
                      <option value="user">User</option>
                      <option value="priority">Priority</option>
                    </select>
                </div>
                <div className="element">
                    <span className="category">Ordering</span>
                    <select className="select" onChange={e=>setOrder(e.target.value)}>
                      <option value="priority">Priority</option>
                      <option value="title">Title</option>
                    </select>
                </div>
            </div>)
            }
        </>
    );
};


export default Navbar;

