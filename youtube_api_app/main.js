// Options
const CLIENT_ID = "504143617099-2daum5eaqdjm7dphi198rrv62et7u75l.apps.googleusercontent.com"

// Array of API discovery doc URLs for APIs used by the quickstart
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"];

// Authorization scopes reqired by the API. If using multiple scopes,
// separated them with spaces.
const SCOPES = "https://www.googleapis.com/auth/youtube.readonly";


const authorizeButton = document.getElementById('authorize-button');
const signoutButton = document.getElementById('signout-button');
const content = document.getElementById('content');
const channelForm = document.getElementById('channel-form');
const channelInput = document.getElementById('channel-input');
const videoContainer = document.getElementById('video-container');

const defaultChannel = "techguyweb";

// Load auth2 library
function handleClientLoad(){
  gapi.load('client:auth2', initClient);
}

// Init API client library and set up sign in listeners 
function initClient(){
  gapi.client.init({
    discoveryDocs: DISCOVERY_DOCS,
    clientId: CLIENT_ID,
    scope: SCOPES,
  }).then(() => {
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

    // Handle inital sign in state
    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    authorizeButton.onclick = handleAuthClick;
    signoutButton.onclick = handleSignoutClick;
  });

  // Update UI sign in state changes
  function updateSigninStatus(isSignedIn){
    if(isSignedIn){
      authorizeButton.style.display = "none";
      signoutButton.style.display = "block";
      content.style.display = "block";
      videoContainer.style.display = "block";
      getChannel(defaultChannel);
    } else {
      authorizeButton.style.display = "block";
      signoutButton.style.display = 'none';
      content.style.display = "none";
      videoContainer.style.display = "none";

    }
  }
}

// Handle login
function handleAuthClick() {
  gapi.auth2.getAuthInstance().signIn();
}
// Handle logout
function handleSignoutClick() {
  gapi.auth2.getAuthInstance().signOut();
}
// Dispay channel data
  function showChannelData(data){
    const channelData = document.getElementById('channel-data')
    channelData.innerHTML = data;
  }
// Get Channel for API
  function getChannel(channel){
    gapi.client.youtube.channels.list({
      part: 'snippet,contentDetails,statistics',
      forUsername: channel
    })
    .then(response=>{
      console.log(response)
      const channel = response.result.items[0]);

      const output =`
      <ul class="collection">
        <li class="collection-item"> Title: ${channel.snippet.title}</li>
        <li class="collection-item">Id: ${channel.id}</li>
        <li class="collection-item">Subscribers: ${channel.statistics.subscriberCount}</li>
        <li class="collection-item">Views: ${channel.statistics.viewCount}</li>
        <li class="collection-item">Videos: ${channel.statistics.videoCount}</li>
        </ul>
        <p>${channel.snippet.description}</p>
        <hr>
        <a class="btn grey darken-2" target="_blank" href="https://youtube.com/${channel.snippet.customUrl}">Visit Channel</a>`;
        showChannelData(output);
    })
    .catch(err => alert('No Channel By That Name'));
  }

