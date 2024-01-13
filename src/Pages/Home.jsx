import React from "react";
import Navbar from "../Components/navbar";
import Framework from "../Components/framework";
import homePicture from "../Assets/Images/Profile.png";
import { Link } from "react-router-dom";

function HomePage(){
    return(
        <>
        
            <Framework/>
            {/* <div class="inv-header"></div> */}
            <Navbar />
            <div class="content">
                <div class="home" >
                    <div class="text">
                        <h1><span>Hi!</span> I'm <br/>Minsa</h1>
                        <Link to="/Message"style={{textDecoration: 'none'}}>
                        <div class="primary-btn">
                            <div class="btn-group">
                                <div class="play-btn">
                                    <div class="play-btn-inner">
                                        <i class="fa-solid fa-envelope"></i>
                                        <span style={{textDecoration: 'none'}}>Leave a Message</span>  
                                    </div>          
                                </div>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <img src={homePicture}/>
                </div>
            </div>
        </>
    )
}
export default HomePage;