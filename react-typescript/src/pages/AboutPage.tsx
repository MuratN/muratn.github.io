import React from 'react';
import { useHistory } from 'react-router-dom';

export const AboutPage: React.FC = () => {
    const history = useHistory()
    return (
        <React.Fragment>
            <h1>Information page</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corrupti,
                architecto reprehenderit repudiandae voluptates voluptatem! Reprehenderit
                exercitationem, cum facere corrupti modi eius minima voluptatem, quam qui
                quibusdam quis eveniet necessitatibus!
            </p>
            <button className="btn" onClick={() => history.push('/')}>Back to list</button>
        </React.Fragment>
    )
}