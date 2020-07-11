import React from 'react';
import genius from "./api/genius";

export default class LyricsCard extends React.Component {
  const [lyrics, setLyrics] = useState([]);

  async componentDidMount(){
    const { data: { items: lyrics } } = await youtube.get("search",{
      params:{
      q: "Kendrick"
    }
  });
//const url = "api.genius.com/"
      // const response = await fetch(url);
    // const data = await response.json();
    // console.log(data)


  render(){
    return(
      <div>
      {this.state.loading ? <div>loading...</div>: <div>person..</div>}
      </div>
    )
  }
}
 