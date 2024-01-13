import React from "react";
import Navbar from "../Components/navbar";
import Framework from "../Components/framework";
import { Link } from "react-router-dom";

function ContactPage(){
    return(
        <>
        
            <Framework/>
            <Navbar />
            
            <div class= "container-fluid text-center py-5"style={{height: '100vh', width: 'auto',backgroundImage:"linear-gradient(rgb(16,16,16) 50%,rgb(195, 40, 101)120% )"}} >
            <h1 className="text-white">My Socials</h1><br /><br /><br />
                <div class ="container"style={{height: '60vh', width: '100%'}}>
                    <div class="row justify-content-md-center g-5">
                        <div class="col-6 justify-content-md-center mb-3">
                        <Link to="https://www.instagram.com/minsaa111/"style={{textDecoration: 'none'}}>
                            <div class="btn-group justify-content-md-end px-5 mr-5">
                                <div class="play-btn">
                                    <div class="play-btn-inner">
                                    <i class="fa-brands fa-instagram"></i>
                                        <span class="align-items-center" style={{textDecoration: 'none'}}>Instagram</span>  
                                    </div>
                                </div>
                            </div>
                        </Link>
                        </div>

                        <div class="col-6 ">
                        <Link to="https://www.github.com/minsa111/"style={{textDecoration: 'none'}}>
                            <div class="btn-group justify-content-md-start px-5 mr-5">
                                <div class="play-btn">
                                    <div class="play-btn-inner">
                                    <i class="fa-brands fa-github"></i>
                                        <span style={{textDecoration: 'none'}}>Github</span>  
                                    </div>          
                                </div>
                            </div>
                        </Link>
                        </div>
                        <div class="col-6">
                        <Link to="https://www.linkedin.com/in/minsa111/"style={{textDecoration: 'none'}}>

                            <div class="btn-group justify-content-md-end px-5 mr-5">
                                <div class="play-btn">
                                    <div class="play-btn-inner">
                                    <i class="fa-brands fa-linkedin"></i>
                                        <span style={{textDecoration: 'none'}}>Linkedin</span>  
                                    </div>          
                                </div>
                            </div>
                        </Link>
                        </div>
                        <div class="col-6">
                        <Link to="/message"style={{textDecoration: 'none'}}>
                            <div class="btn-group justify-content-md-start px-5 mr-5">
                                <div class="play-btn">
                                    <div class="play-btn-inner">
                                        <i class="fa-solid fa-envelope"></i>
                                        <span style={{textDecoration: 'none'}}>Leave a Message</span>  
                                    </div>          
                                </div>
                            </div>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ContactPage;