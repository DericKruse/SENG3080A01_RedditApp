import React, {useState, useEffect} from 'react';

import * as G from './Globals.js';

import Post         from './components/Post';
import FavPost      from './components/FavPost';
import StudentInfo  from './components/StudentInfo';
import Greeting     from './components/Greeting';


let amHome = true;

function MainRedditApp() {
  const switchPage = () => {
    amHome = !amHome;
    console.log(amHome);
  }

  const [posts, setPosts] = useState([]);
  const [subreddit, setSubreddit] = useState([G.DEF_SR]);

  useEffect(() => {
    fetch(G.SUBREDDIT+subreddit+G.HOT_GET).then(res => {
      G.getFavs ();

      if (res.status != 200) {
        console.log("ERROR!!");
        return;
      }

      res.json().then(postsJSON => {
        if (postsJSON != null){
          setPosts(postsJSON.data.children)
        }
      });
    })
  },[subreddit,G.favIDs]);

  const user = {
    firstName:"Deric",
    lastName:	"Kruse",
    studID:		"dkruse9837",
    studNum:	"8659837"
  };

  const favsElement = (
    <div className="MainRedditApp">
      <Greeting />
      <button className="button" onClick={() => switchPage()}>Subreddits</button>
      <div name="subreddit_posts" id="subreddit_posts" className="posts">
        { ((G.favIDs != null)&&(G.favIDs != [])) ? G.favIDs.map((ID, index)=> <FavPost key={index} id={ID} />):'' }
      </div>
      <br />
      <StudentInfo user={user} />
    </div>);

  const subredditElement = (
    <div className="MainRedditApp">
      <Greeting />
      <button className="button" onClick={() => switchPage()}>Favourites</button>
      <div class = "inputDiv">
        <label for="subreddit">/r/</label>
        <input type="text" name="subreddit" id="subreddit" className="input" value={subreddit} onChange={e=>setSubreddit(e.target.value)} />
      </div>
      <div name="subreddit_posts" id="subreddit_posts" className="posts">
        { (posts != null) ? posts.map((post, index)=> <Post key={index} post={post.data} />):'' }
      </div>
      <br />
      <StudentInfo user={user} />
    </div>);
  if (amHome) {
    return subredditElement;
  } else {
    return favsElement;
  }
  
}

export default MainRedditApp;
