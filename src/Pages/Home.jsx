import React from "react";
import Navbar from "../../../minsa/src/Components/navbar";
import Framework from "../../../minsa/src/Components/framework";
import homePicture from "../Assets/Profile.png";

function HomePage(){
    return(
        <>
        
            <Framework/>
            <div class="inv-header"></div>
            <Navbar />
            <div class="content">
                <div class="home" >
                    <div class="text">
                        <h1><span>Hi!</span> I'm <br/>Minsa</h1>
                        <div class="primary-btn">
                            <a href="/about"></a>
                            <div class="btn-group">
                                <div class="play-btn">
                                    <div class="play-btn-inner">
                                        <i class="fa fa-play"></i>
                                        <span>Watch Resume</span>  
                                    </div>          
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={homePicture}/>
                </div>
            </div>
        </>
    )
}
export default HomePage;