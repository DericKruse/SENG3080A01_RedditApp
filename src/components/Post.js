import React from 'react';

import * as G from '../Globals.js';

function Post(props) {
    let butText;
    if (G.favIDs.indexOf(props.post.id) == -1) {
        butText = 'Add to Favs';
    } else {
        butText = 'Remove from Favs'
    }

    const favButClick = (id) => {
        if (G.favIDs.indexOf(props.post.id) == -1) {
            G.addFav(props.post.id);
            butText = 'Remove from Favs'
        } else {
            G.removeFav(props.post.id);
            butText = 'Add to Favs';
        }
    }

    return (
        <article>
            <a href={G.REDDIT_URL+props.post.permalink}>
                <h3>{props.post.title}</h3>
            </a>
            <p>Score:  {props.post.score}</p>
            <div className="button_bar">
                <button className="button" onClick={() => favButClick(props.post.id)}>{butText}</button>
            </div>
        </article>
    );
    /*
    */
}

export default Post;