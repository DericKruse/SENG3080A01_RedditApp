import React, {useState, useEffect} from 'react';

import * as G from '../Globals.js';

function FavPost(props) {
    const [post, setPost] = useState([]);
  
    useEffect(() => {
      fetch(G.POST_ID+props.id+G.POST_GET).then(res => {
  
        if (res.status != 200) {
          console.log("ERROR!!");
          return;
        }
  
        res.json().then(postJSON => {
          if (postJSON != null){
            setPost(postJSON[0].data.children[0].data)
          }
        });
      })
    },[G.favIDs]);
    let butText;
    if (G.favIDs.indexOf(post.id) == -1) {
        butText = 'Add to Favs';
    } else {
        butText = 'Remove from Favs'
    }

    const favButClick = (id) => {
        if (G.favIDs.indexOf(post.id) == -1) {
            G.addFav(post.id);
            butText = 'Remove from Favs'
        } else {
            G.removeFav(post.id);
            butText = 'Add to Favs';
        }
    }

    return (
        <article>
            <a href={G.REDDIT_URL+post.permalink}>
                <h3>{post.title}</h3>
            </a>
            <p>Score:  {post.score}</p> 
            <div className="button_bar">
                <button className="button" onClick={() => favButClick(post.id)}>{butText}</button>
            </div>
        </article>
    );
    /*
    */
}

export default FavPost;