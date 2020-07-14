import React from 'react';
import Lyricist from 'lyricist';


const lyricist = new Lyricist('UrQZA5HGEs5oJQY0xLHtAk-TFhVkeoifDAuX8YObykRoOGPhD81jmHCdrT6MQIrX');
const testfunction = async()=> {
   const song = await lyricist.song(714198);
  console.log(song.title);
}
 
const LyricsCard =()=> {
  // use await here
  testfunction()
  return <div></div>;
};

export default LyricsCard;





