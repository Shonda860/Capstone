import React from 'react';
import { getLyrics } from 'genius-lyrics-api';



function LyricsCard() {
  const options = {
    apiKey: 'U7S9-1u6C-lzyhukTgGZ_ZFo3JMsqcdeltRcmqrR7Vk6G6wB-wY2Q9PPhZqPncNq',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    optimizeQuery: true
};
 
getLyrics(options).then((lyrics) => console.log(lyrics));
 
  return (<div>LC</div>  );
}
export default LyricsCard;

