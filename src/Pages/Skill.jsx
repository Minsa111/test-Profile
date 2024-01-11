import React from "react";
import Navbar from "../Components/navbar";
import Framework from "../Components/framework";
import homePicture from "../Assets/Profile.png";

function SkillPage(){
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
                            <a href="/About"></a>
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
export default SkillPage;