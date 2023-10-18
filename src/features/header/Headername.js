import React from 'react';
import './Headername.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleExclamation, faCircleHalfStroke, faCircleXmark, faEllipsis, faSignal, faVolumeHigh, faVolumeLow } from '@fortawesome/free-solid-svg-icons';


const HeaderCard = ({ text,length}) => {
    const make=(text)=>{
        if(text==='In progress'){
            return <FontAwesomeIcon icon={faCircleHalfStroke} style={{color: "#e7f070",}} />
        }
        else if(text=="Done"){
            return <FontAwesomeIcon icon={faCircleCheck} style={{color: "#4a3776",}} />;
        }
        else if(text==='Canceled'){
            return <FontAwesomeIcon icon={faCircleXmark} style={{color: "#524f54",}} />;
        }
        else if(text==='High'){
            return <FontAwesomeIcon icon={faSignal} style={{color: "#28292a",}} />;
        }
        else if(text==="Urgent"){
            return <FontAwesomeIcon icon={faCircleExclamation} style={{color: "#ff6c47",}} />;
        }
        else if(text==='Low'){
            return <FontAwesomeIcon icon={faVolumeLow} style={{color: "#1e3815",}} />
        }
        else if(text==='Medium'){
            return <FontAwesomeIcon icon={faVolumeHigh} style={{color: "#285b24",}} />;
        }
        else{
            return <div className='header-card-icon'></div>
        }
      }
    return (
        <div className="header-card">
            <div className="header-card-main">
                <div className="first-content">
                    <div >{make(text)}</div>
                    <span className='header-card-text'>{text}</span>
                    <span className="length">{length}</span>
                </div>
                <div className="second-content">
                    <div className="plus">+</div>
                    <div className="dots"><FontAwesomeIcon icon={faEllipsis} style={{ color: "#7c838d", }} /></div>
                </div>
            </div>
        </div>
    )
}

export default HeaderCard;