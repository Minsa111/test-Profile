import React from "react";
import Navbar from "../Components/navbar";
import Framework from "../Components/framework";
import Football1 from"../Assets/Images/Football1.jpg"
import Football2 from"../Assets/Images/Football2.jpg"
import Football3 from"../Assets/Images/Football3.jpg"

function HobbyPage(){
    return(
        <>
        
            <Framework/>
            <Navbar />
            <div class= "container-fluid px-0 "style={{height: '100vh', width: 'auto',backgroundImage:"linear-gradient(rgb(16,16,16) 50%,rgb(195, 40, 101)120% )"}}>
                <div class = "row mx-0">
                    <div class = "col-md-8">
                        <div id="carouselExampleIndicators" class="carousel slide ">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner ">
                                <div class="carousel-item active ">
                                <img src={Football3} class="d-block w-100 " alt="..."/>
                                </div>
                                <div class="carousel-item">
                                <img src={Football2}class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                <img src={Football1}class="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex align-items-center text-white"> 
                        <p style={{fontSize:"20px"}}>
                        As one of my favorite hobbies, playing football holds a special place in my heart. Whether when I am on a big pitch or a small pitch, the joy I get from the game remains unwavering. My preferred position is as a winger, chosen for my speed, defensive prowess, and adept passing abilities. This role not only allows me to showcase my strengths but also contributes to the dynamic flow of the game. The thrill of the match, the camaraderie with teammates, and the strategic maneuvers on the field all contribute to my love for this sport."
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HobbyPage;