import React, { useState } from "react";
import { Grid,Paper} from "@material-ui/core";
import 'react-aspect-ratio/aspect-ratio.css'
import './App.css';
import { JudgeCounters,Counters,VideoList, VideoDetail, League,Nav,Carousel, StartUp,Term,LeagueInfo,Home,BattleOver, AboutBattle,Landing} from "./components";
import {
  Switch,
  Route,
} from "react-router-dom";
import callapp from "./api/callapp";
import youtube from "./api/youtube";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default () => {
  
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showList, setShowList] = useState(true)
  const [showFanCard, setShowFanCard] = useState(false)
  const [showStart, setShowStart] = useState(true)
  const [mode, setMode] = useState("Fan Mode")
  const [userName,setUserName] = useState('')
  const [battleOver, setBattleOver] = useState(false)
  const [userVoteCount, setUserVoteCount] = useState([])
  const [hideVideo, setHideVideo] = useState(true)
  const onPlay =() => {
    setShowList(false) 
    // console.log('inside onPlay')
    setShowFanCard(true) 
  }

  // TODO 
  const onEnd =() => {
    setHideVideo(false)
    setShowFanCard(true) 
    getUserVoteCount()
    
    console.log('inside onEnd')
    
  }

  const onStart =() => {
    setShowStart(false)
    
  
    // console.log('inside onPlay')
  }

  

  // const handleSelectOfCard =() => {
  //   setShowStart(true) 
  //   // console.log('inside onPlay')
  // }

  async function getUserVoteCount(){
    const artists = getArtist()
     const artistsA = await callapp.get("/user",{
        params: {
          artist: artists[0],
          videoId: selectedVideo.id.videoId,
          userName: userName
        }
      })
      // artistAObject[artists[0]] = artistsA.data
      const artistAObject = {name: artists[0], votes: artistsA.data}
      const artistsB = await callapp.get("/user",{
      params: {
        artist: artists[1],
        videoId: selectedVideo.id.videoId,
        userName: userName
      }
    }) 
      console.log("async", artistsA, artistsB)
      // artistBObject[artists[1]] = artistsB.data 
      const artistBObject = {name: artists[1], votes: artistsB.data} 
      setUserVoteCount([artistAObject, artistBObject])
      setBattleOver(true)
   };
  
   
  const getArtist =()=> {  
    // regex
  let pattern = /([a-zA-Z\s]*)\svs\s([a-zA-Z\s]*)/
  const title = selectedVideo.snippet.title
  let result = pattern[Symbol.match](title)
  
  return [result[1],result[2]]

  // console.log(result,title)
 }



  async function getChannel(id) {
      try {const { data: { items: videos } } = await youtube.get("search", {
        params: {
          part: "snippet",
          channelId: id,
        } 
      });
    setVideos(videos);
   } 
    catch(err){
      console.log(err)
    }
  }

  return (
  
    <MuiThemeProvider>
    <React.Fragment>
    <Nav usernameCallback={setUserName}/> 
    <Switch>
    <Route exact path="/">
    <Carousel/>
    <Home/>
    </Route>

    <Route export path="/landing">
     <Landing/>
    </Route>
    <Route exact path="/voting">
        <Grid item xs={11} style={{marginLeft: "40px"}}>
          <Grid container spacing={10}>
            <Grid item xs={8}>  
            <div>

            <League name="KOTD" getChannel={getChannel} id='UCIuFtIO8i_XqA8lM7q4B1FQ' /> 
            <League name="URL"  getChannel={getChannel} id='UCflIAeM03JFL9ml03LwYF-g'/>
            <League name="UDUBB" getChannel={getChannel} id='UC3psUl-IQCBboXS334JdDpA' />
            <League name="QUEEN OF THE RING" getChannel={getChannel} id='UCk-nxzyAUCJoeWyPXaDsbFw' /> 
            <League name="BULLPEN" getChannel={getChannel} id='UCY-ME2gHi5DvKw4iMnOIziA' />
            <League name="Grind Time" getChannel={getChannel} id='UCSfPVl0BBm9g3SvG_WaDTrw' /> 
            <League name="DON'T FLOP" getChannel={getChannel} id='UCtk06jK3PvU6pZvrj68ROfQ' />
            <League name="iBATTLETV" getChannel={getChannel} id='UCcn1FcR6MoWhnZ0gfH2dVJw' /> </div> 
            </Grid>
            <Grid item xs={6}>
               {showStart && <StartUp mode={mode} setMode={setMode}/>} {battleOver && <BattleOver mode={mode} onEnd={onEnd} userName={userName} userVoteCount={userVoteCount} /> }
              {hideVideo && <VideoDetail video={selectedVideo} onStart={onStart}onPlay={onPlay} onEnd={onEnd} />} 
            </Grid>
            <Grid item xs={6}>
                { showList && <VideoList 
            videos={videos} onVideoSelect={setSelectedVideo} />}{(mode === "Judge Mode" && showFanCard) && <Paper elevation={6} style={{ padding: "15px" }}><JudgeCounters userName={userName} video={selectedVideo}/></Paper>}
            {(mode === "Fan Mode" && showFanCard) && <Paper elevation={6} style={{ padding: "15px" }}><Counters userName={userName} video={selectedVideo}/></Paper>}
            {(mode === "Over" && battleOver) && <Paper elevation={6} style={{ padding: "15px" }}><BattleOver onEnd={onEnd} userName={userName} userVoteCount={userVoteCount}/></Paper>}
            </Grid>
          </Grid>
        </Grid>          
     
    </Route>
    <Route export path="/dictionary">
        <Term/>
     </Route>
    <Route export path="/signin">
    </Route> 
    <Route export path="/league">
      <LeagueInfo/>
     </Route>
     <Route export path="/battlerapology">
     <AboutBattle/>
    </Route>
    
    </Switch>
    
    </React.Fragment>  
    </MuiThemeProvider>
  ); 
}
  