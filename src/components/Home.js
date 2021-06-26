import React from 'react';
import pic from './img/left-image.jpg';

function Home() {
    return (
        <React.Fragment>
            <br></br>
            <h1 style={{textAlign: "center", color: "black"}}>Cryptolore</h1>
            <br/>
            <h3 style={{textAlign: "center", color: "blue"}}>By Coding-Fortress</h3>
                <br></br>
                
                <center>
                <img src={pic} width="500px" height="350px"/>
                </center>
                <h2  style={{color: "lightyellow"}}>&nbsp;About</h2>
                <h4 >Cryptolore aims to make your literary works such as poems, stories, novels and evryhting into NFTs</h4>
                <br></br>
                
            <br/><br/>
            
        </React.Fragment>
        
    )
}

export default Home;