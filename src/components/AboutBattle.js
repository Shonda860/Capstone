import React from 'react';
import { Parallax } from 'react-parallax';
import "./AboutBattle.css"

const image1 =
"https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80" ;
const image2 =
  "https://dch81km8r5tow.cloudfront.net/wp-content/uploads/2012/02/rap-battles-1-958x559.jpg";
const image3 =
  "https://dch81km8r5tow.cloudfront.net/wp-content/uploads/2012/02/rap-battles-4-958x559.jpg";
const image4 =
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";

const inlineStyle = {
  background: '#fff',
  left: '50%',
  top: '50%',
  position: 'absolute',
  padding: '20px',
  transform: 'translate(-50%, -50%)',
}




function AboutBattle() {
  return (
   <section className="plain" >
    <div style={{ textAlign: 'center' }}>
      <Parallax bgImage={ image1 } strength={500}>
        <div style={{ height: 500 }}>
        <div style={inlineStyle} ><h3 className="inside_text">Why is Battle Rap the $#@!</h3></div>
        </div>
      </Parallax> 
      <div class="row">
      <div class="card col s4" style={{height: "400px", marginLeft: "20px"}}>
      <div class="card-image waves-effect waves-block waves-light">
        <img className="activator" src="https://cdn.buttercms.com/jdOleijRuq2hw1fsuWgz" alt="pic of exited male"/>
      </div>
      <div className ="card-content" style={{background: "white"}}>
        <span class="card-title activator grey-text text-darken-4 card_header">What is Battle Rap?<i class="material-icons right">more_vert</i></span>
        <p><a href="https://www.huckmag.com/perspectives/reportage-2/battle-rap/">HuckMag</a></p>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">Article Preview<i class="material-icons right">close</i></span>
        <p className="preview_text">So, how did rap battling get this way? How did it turn into a kind of consciously staged reality show, where almost every lyric is pre-written, there’s no beat to speak of and everything is caught on camera? Where you can throw an insult at somebody that, anywhere else on earth, would get you a pounding, but somehow here ends in high-fives and hugs?

        Up until the early 2000s, battles were usually done over beats, with microphones and regimented sixteen-bar verses. Becoming well known was a lot harder, unless you snuck onto a VHS compilation or got to battle live on the radio.</p>       
        </div> 
      </div>
      <div className="col s6" style={{marginLeft: "60px"}}><h4 className="section_header">Modern rap battling works like this. There are no beats and no mics. Almost every rhyme will have been prewritten days or weeks in advance, with opponents studied and dissected for weaknesses. Anything goes; literally everything is fair game. Family members, race, physical defects, sexual preferences – as long as it’s rhymed, it’s all good. Obvious and clumsy are bad. Witty and cunning are good. Rhythm is not important, but theatricality, comedic timing and personality are. Make the crowd laugh, and you’ll walk away from the battle a winner.</h4></div>
    </div>
      <Parallax bgImage={ image2 } blur={{ min: -1, max: 5 }}>
        <div style={{ height: 500 }}>
      
        </div>
      </Parallax>
      <div className="row">
      <div className="col s6" style={{marginRight: "100px"}}><h4 className="section_header">There are a number of mainstream rappers and underground rappers who base there careers on rap battling at points. Mickey Factz started his career in Sacred Society Battle League and has also coordinated and hosted many Ultimate Rap League (Smack/URL) events. Rapper Eminem, who battled constantly in the film 8 Mile is seen on several YouTube videos battling other mainstream and underground MCs.

      Some of the most recognized battle leagues include Ultimate Rap League, Grind Time Now, King Of The Dot, Don't Flop, Queen of the Ring, and Flip Top.  
 </h4>
      </div>
      <div class="card col s4" style={{height: "400px", marginLeft: "20px"}}>
      <div class="card-image waves-effect waves-block waves-light">
        <img className="activator" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTaSrZVpmaASI62lQXig6AeJnczraKNczu8cg&usqp=CAU" alt="head to head two males about to battle rap"/>
      </div>
      <div className ="card-content">
        <span class="card-title activator grey-text text-darken-4 card_header">History of Battle Rap?<i class="material-icons right">more_vert</i></span>
        <p><a href="https://rap.fandom.com/wiki/Battle_Rap">Battle Rap Wiki</a></p>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">Article Preview<i class="material-icons right">close</i></span>
        <p className="preview_text">Battling is generally believed to have originated in the East Coast hip hop scene in the late 1970sTemplate:Citation needed. One of the earliest and most famous battles was in December 1982 when Kool Moe Dee challenged Busy Bee Starski Busy Bee Starski's defeat by the more complex raps of Kool Moe Dee meant that "no longer was an MC just a crowd-pleasing comedian with a slick tongue; he was a commentator and a storyteller", which KRS-One also credits as creating a shift in rapping in the documentary Beef.</p>       
        </div> 
      </div>
      </div>
      <Parallax bgImage={ image3 } strength={-200} >
        <div style={{ height: 500 }}>
          
        </div>
      </Parallax>
       <div class="row">
      <div class="card col s4" style={{height: "550px", marginLeft: "20px"}}>
      <div class="card-image waves-effect waves-block waves-light">
        <img className="activator" style={{padding: "10px", marignTop: "10px", height: "400px"}} src="https://www.nme.com/wp-content/uploads/2018/11/eminem-8-mile-rexfeatures_1555158a.jpg" alt="scence from 8 mile xbit and em"/>
      </div>
      <div className ="card-content">
        <span class="card-title activator grey-text text-darken-4 card_header" style={{padding: "10px"}}>8 Mile The Movie<i class="material-icons right">more_vert</i></span>
        <p><a href="https://en.wikipedia.org/wiki/8_Mile_(film)">8 mile</a></p>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">Article Preview<i class="material-icons right">close</i></span>
        <p className="preview_text">8 Mile is a 2002 American drama film written by Scott Silver and directed by Curtis Hanson. It stars Eminem in his film debut, alongside Mekhi Phifer, Brittany Murphy, Michael Shannon, Anthony Mackie, and Kim Basinger. The film, which contains autobiographical elements from Eminem's life, follows white rapper B-Rabbit (Eminem) and his attempt to launch a career in a genre dominated by African-Americans, hip hop. The title is derived from 8 Mile Road, the highway between the predominantly black city of Detroit and the largely white suburban communities to the north.

        </p>       
        </div> 
      </div>
      <div className="col s6" style={{marginLeft: "60px",marginTop: "50px"}}><h4 className="section_header">8 Mile was a critical and box office success. It opened at No. 1 in the US with $51.3 million grossed in its opening weekend, and would eventually go on to achieve a total gross of $242.9 million worldwide. The album's accompanying soundtrack was also a commercial success, being certified quadruple platinum by the Recording Industry Association of America (RIAA).The film garnered numerous nominations and wins, including an Academy Award for Best Original Song for "Lose Yourself" win for Eminem, Luis Resto and Jeff Bass at the 75th Academy Awards. 8 Mile was named one of the best films of 2002 by several publications.</h4></div>
    </div>
      <Parallax 
        bgImage={ image4 }
        strength={200}
        renderLayer={precentage => (
          <div 
            style={{
              position: 'absolute',
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) scale(${precentage * 5})`,
            }}
          >
          </div>
        )}
      >
        <div style={{ height: 500 }}>
          <div style={inlineStyle}>Battle Rap is Art</div>
        </div>
      </Parallax>
      <div style={{ height: '100vh' }}></div>
    </div>

    </section>
  );
}

export default AboutBattle;

