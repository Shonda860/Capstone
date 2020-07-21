import React, { useState } from "react";
import { Grid,Paper} from "@material-ui/core";
import 'react-aspect-ratio/aspect-ratio.css'
import './App.css';
import { JudgeCounters,Counters,VideoList, VideoDetail, League,Nav,Carousel, StartUp,Term,LeagueInfo,Home,BattleOver } from "./components";
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
  const [userVoteCount, setuserVoteCount] = useState({})
  const onPlay =() => {
    setShowList(false) 
    // console.log('inside onPlay')
    setShowFanCard(true) 
  }

  // TODO 
  const onEnd =() => {
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
    const artistAObject = {}
    const artistBObject = {}
     const artistsA = await callapp.get("/user",{
        params: {
          artist: artists[0],
          videoId: selectedVideo.id.videoId,
          userName: userName
        }
      })
      artistAObject[artists[0]] = artistsA.data
     
      const artistsB = await callapp.get("/user",{
      params: {
        artist: artists[1],
        videoId: selectedVideo.id.videoId,
        userName: userName
      }
    }) 
      artistBObject[artists[1]] = artistsB.data  
      setuserVoteCount({...artistAObject, ...artistBObject})
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
    <Route exact path="/voting">
        <Grid item xs={11} style={{marginLeft: "40px"}}>
          <Grid container spacing={8}>
            <Grid item xs={8}>  
            <div>
            <League name="KOTD" getChannel={getChannel} id='UCIuFtIO8i_XqA8lM7q4B1FQ' /> 
            <League name="URL"  getChannel={getChannel} id='UCflIAeM03JFL9ml03LwYF-g'/>
            <League name="UDUBB" getChannel={getChannel} id='UCIuFtIO8i_XqA8lM7q4B1FQ' />
            <League name="QUEEN OF THE RING" getChannel={getChannel} id='UCk-nxzyAUCJoeWyPXaDsbFw' /> 
            <League name="BULLPEN" getChannel={getChannel} id='UCY-ME2gHi5DvKw4iMnOIziA' /> </div> 
            </Grid>
            <Grid item xs={8}>
               {showStart && <StartUp setMode={setMode}/>}
               {battleOver && <BattleOver userName={userName} userVoteCount={userVoteCount} /> }
              <VideoDetail video={selectedVideo} onStart={onStart}onPlay={onPlay} onEnd={onEnd} />
            </Grid>
            <Grid item xs={4}>
                { showList && <VideoList 
            videos={videos} onVideoSelect={setSelectedVideo} />}{(mode === "Judge Mode" && showFanCard) && <Paper elevation={6} style={{ padding: "15px" }}><JudgeCounters userName={userName} video={selectedVideo}/></Paper>}
            {(mode === "Fan Mode" && showFanCard) && <Paper elevation={6} style={{ padding: "15px" }}><Counters userName={userName} video={selectedVideo}/></Paper>}
            {(mode === "Over" && battleOver) && <Paper elevation={6} style={{ padding: "15px" }}><BattleOver/></Paper>}
            </Grid>
          </Grid>
        </Grid>          
     
    </Route>
    <Route export path="/battlerapology">
        <Term/>

     </Route>
    <Route export path="/signin">
    </Route> 
    <Route export path="/league">
      <LeagueInfo/>
     </Route>
    </Switch>
    
    </React.Fragment>  
    </MuiThemeProvider>
  ); 
}
  