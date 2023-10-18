
import React from 'react'
import './Card.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import Image from './Image.jpg'


const Card = ( { id, title, tag, userId, status, priority } ) => {
	return (
		<>
			<div className="card">
				<div className="top">
					<span className="title">{id}</span>
					<div className="img-container">
						<div className="img-cont">
							<img src={Image} className="userImg" />
						</div>
						<div className="status"></div>
					</div>
				</div>
				<div className="middle">
					<span className="heading">{title}</span>
				</div>
				<div className="footer">
					<div className="icon">
						<FontAwesomeIcon icon={faTriangleExclamation} style={{ color: "#6b6f76", }} />
					</div>
					<div className="featReq">
						<div className="circle"></div>
						{tag}
					</div>
				</div>

			</div>
		</>
	)
}

export default Card;