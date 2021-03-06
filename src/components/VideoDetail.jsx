import React from "react";
import YouTube from 'react-youtube'
import AspectRatio from 'react-aspect-ratio';
import { Paper, Typography } from "@material-ui/core";
// import { VideoItem } from "./VideoItem";

  const VideoDetail = ({video, onPlay, onStart, onEnd}) => {
    const opts = {
      height: '100%',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      }
    }
      function _onReady(event) {
        // access to player in all event handlers via event.target
        // event.target.pauseVideo();
      }

      // function onStateChange(event){
      //   if ( event.data=== 0) {

      //   }

      // TODO - LET PPL KNOW HOW TO START
        const videoDisplay = (video) => {
          // const divEL = useRef(null);

      return (   
        <div style={{marginLeft: "25px"}}>
        <AspectRatio ratio="16/9">
            <YouTube videoId={video.id.videoId} opts={opts} onReady={_onReady} onPlay={onPlay} onEnd={onEnd}/></AspectRatio>

            <Paper elevation={6} style={{ padding: "15px" }}>
              <Typography variant="h4">
                {video.snippet.title} - {video.snippet.channelTitle}
              </Typography>
              <Typography variant="subtitle1">
                {video.snippet.channelTitle}
              </Typography>
              <Typography variant="subtitle2">{video.snippet.description}</Typography>
            </Paper>
          </div>)
          
    };
    // console.log(video);
    if (!video) {return <div></div>} 
        
        else {
        onStart()
         return videoDisplay(video)
      };
}

 export default VideoDetail;
  
  
  
  



















  // class VideoDetail extends React.Component {
  //   render() {
      // const opts = {
      //   height: '390',
      //   width: '640',
      //   playerVars: {
      //     // https://developers.google.com/youtube/player_parameters
      //     autoplay: 1,
      //   },
    //   };
    
    // }
   
    // _onReady(event) {
    //   // access to player in all event handlers via event.target
    //   event.target.pauseVideo();
    // }
//   } 

    
  
// }

  // const onVideoPlaying = useCallback(() => {
  //   console.log('onVideoPlaying')
  // },[]);

  // const videoStateChange = useCallback((event) => {
  //   if (event.data === window.YT.PlayerState.PLAYING){
  //     onVideoPlaying();
  //   }
  // },[onVideoPlaying]);

  //  useEffect (()=>{
  //    const player = new window.YT.Player(
  //      "youtubeembedvideo",{
  //        events:{
  //          onStateChange: videoStateChange
  //        }
  //      }
  //    );

  //   },[videoSrc, videoStateChange])
//   return (
//     <React.Fragment>
//       <Paper elevation={6} style={{ height: "70%" }}>
//         <iframe
//           frameBorder="0"
//           height="100%"
//           width="100%"
//           title="Video Player"
//           src={videoSrc}
//           id = "youtubeembedvideo"
//         />
//       </Paper>
//       <Paper elevation={6} style={{ padding: "15px" }}>
//         <Typography variant="h4">
//           {video.snippet.title} - {video.snippet.channelTitle}
//         </Typography>
//         <Typography variant="subtitle1">
//           {video.snippet.channelTitle}
//         </Typography>
//         <Typography variant="subtitle2">{video.snippet.description}</Typography>
//       </Paper>
//     </React.Fragment>
//   );
