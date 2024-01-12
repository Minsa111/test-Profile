import React from "react";
import Navbar from "../Components/navbar";
import Framework from "../Components/framework";
import aboutImage from "../Assets/Images/aboutprofile0.png"

function AboutPage(){
    return(
        <>
        
            <Framework/>
            <Navbar />
            <div class="about" id="about">
                <div class="about-header">
                    <h1>About Me</h1>
                </div>
                <div class="about-content">
                    <div class="about-content-text">
                        <p>My name is Aminudin Muhibbullah<br/><br/>When I was a kid I always wonder how everything was made. And the thing 
                            that really caught my attention was how computer or mobile works.
                            "How is it made?", "How is it works?", "How is it transitioned from one to another?"
                            And that curiosity stays on, and when I got into highschool I tried coding for the first time.
                            And since then I developed a passion about coding, my path still undecisive, but I want to
                            master software development.
                        </p>
                    </div>
                    <div class = "about-content-image">
                        <img src={aboutImage} alt=""/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutPage;