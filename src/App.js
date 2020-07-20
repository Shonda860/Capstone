import React, { useState } from "react";
import { Grid,Paper} from "@material-ui/core";
import 'react-aspect-ratio/aspect-ratio.css'
import './App.css';
import { JudgeCounters,Counters,VideoList, VideoDetail, League,Nav,Carousel, StartUp,Term,LeagueInfo,Home,BattleOver } from "./components";
import {
  Switch,
  Route,
} from "react-router-dom";
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
  const onPlay =() => {
    setShowList(false) 
    // console.log('inside onPlay')
    setShowFanCard(true) 
  }

  // TODO 
  const onEnd =() => {
    setBattleOver(true) 
    // console.log('inside onPlay')

  }

  const onStart =() => {
    setShowStart(false)
  
    // console.log('inside onPlay')
  }

  const handleSelectOfCard =() => {
    setShowStart(true) 
    // console.log('inside onPlay')
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
               {battleOver && <BattleOver/> }
              <VideoDetail video={selectedVideo} onStart={onStart}onPlay={onPlay} onEnd={onEnd} />
            </Grid>
            <Grid item xs={4}>
                { showList && <VideoList 
            videos={videos} onVideoSelect={setSelectedVideo} />}{(mode === "Judge Mode" && showFanCard) && <Paper elevation={6} style={{ padding: "15px" }}><JudgeCounters userName={userName} video={selectedVideo}/></Paper>}
            {(mode === "Fan Mode" && showFanCard) && <Paper elevation={6} style={{ padding: "15px" }}><Counters userName={userName} video={selectedVideo}/></Paper>}
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
  