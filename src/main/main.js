import React, { useState } from "react"
import {Card,CardContainer,Nav} from "../component/cards/cards.styles"
import "./main.css"

const Main=() =>{
   let[b,setB]=useState({1:true,2:true,3:true,4:true});
   let[bb,setBB]=useState(false);

   console.log(b);
  const smallother=(e)=>{
    setBB(true);
    console.log(e.target.id)
    let r=e.target.id;
    let a={1:1==r,2:2==r,3:3==r,4:4==r};
    console.log(a);
    setB(a);
  }

  const reset=(e)=>{
    setBB(false);
    setB({1:true,2:true,3:true,4:true});
  }

  return (
    <div className='main'>
    <Nav className={bb?`blur`:``}/>
    <CardContainer>
    <Card url="https://www.mordeo.org/files/uploads/2020/09/Iron-Man-Fortnite-4K-Ultra-HD-Mobile-Wallpaper-scaled.jpg" onMouseOver={smallother} onMouseOut={reset} id="1" className={b[1]?`popup1`:'popdown'}/>
    <Card url="https://sguru.org/wp-content/uploads/2017/09/Mobile-Hd-Wallpaper-thor-wallpaper-hd-1080x1920.jpg" onMouseOver={smallother} onMouseOut={reset} id="2" className={b[2]?`popup`:`popdown`}/>
    <Card url="https://iphoneswallpapers.com/wp-content/uploads/2019/08/Captain-America-Art-iPhone-Wallpaper.jpg"  onMouseOver={smallother} onMouseOut={reset} id="3" className={b[3]?`popup`:`popdown`}/>
    <Card  url="https://preview.redd.it/tinb31yqgfi31.jpg?width=640&crop=smart&auto=webp&s=ded8047a3b94a5c4faac52ebdff2c261683708dc" onMouseOver={smallother} onMouseOut={reset} id="4" className={b[4]?`popup2`:`popdown`}/>

    </CardContainer>
    </div>
  );
}

export default Main;