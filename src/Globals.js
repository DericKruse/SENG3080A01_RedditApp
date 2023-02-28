export const REDDIT_URL = 'https://www.reddit.com';
export const SUBREDDIT  = REDDIT_URL + '/r/';
export const POST_ID    = REDDIT_URL + '/comments/';
export const DEF_SR     = 'react';
export const HOT_GET    = '/hot.json?limit=10';
export const POST_GET   = '.json?limit=-1&depth=-1';


export let favIDs = [];

export function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

export function setObjStorage ( key, obj ) {
	localStorage.setItem(key, JSON.stringify(obj));
}

export function getObjStorage ( key ) {
	let objString = localStorage.getItem(key);

	let retVal = null;
	
	try {
		retVal =  JSON.parse(objString);
	} catch (e) {}

    if (retVal === null) {
        setObjStorage ( key, [] );
        retVal = [];
    }

	return retVal;
}

export function saveFavs () {
    setObjStorage("favArray",favIDs);
}

export function getFavs () {
    let objString = localStorage.getItem("favArray");
	
    
        favIDs = [];

        try {
            favIDs =  JSON.parse(objString);
        } catch (e) {}

        if (favIDs === null) {
            setObjStorage ( "favArray", [] );
            favIDs = [];
        }
    //console.log(favIDs);
}

export function addFav (id) {
    favIDs.push(id);
    saveFavs ();
}

export function removeFav (id) {
    favIDs.splice(favIDs.indexOf(id),1);
    saveFavs ();
}

/*
export const REDDIT_AUTH_URL	= 'https://oauth.reddit.com';
export const REDDIT_UN			= 'Deric_Kruse';
export const REDDIT_UP			= 'iLgpbEQtKxU6gFb';
export const REDDIT_APP		= 'SENG3080_A01_dkruse';
export const REDDIT_APP_ID		= 'G0Um85ZgTjHfBS9ZN6KTEQ';
export const REDDIT_APP_SC		= 'xchRLcyr-lqDerb8p-WOhryj6ZiyGQ';


function getAccessToken () {
	let url = REDDIT_URL + R + 'api/v1/access_token';
	let data = {'grant_type': 'password', 'username': REDDIT_UN, 'password': REDDIT_UP};
	let header = {'user-agent': REDDIT_APP + ' by ' + REDDIT_UN};


}*/