import React from 'react';
import { Link } from 'react-router-dom'

import './card.css'

const Card = ({ ckt, image }) => {

    return (
        <Link to={`/service/${ckt.id}`} className='card_link'>
            <article className='card_article'>
                <img src={image + ckt.id} alt={ckt.nom} />
                <div>{ckt.nom}</div>
            </article>
        </Link>
    );
};

export default Card;