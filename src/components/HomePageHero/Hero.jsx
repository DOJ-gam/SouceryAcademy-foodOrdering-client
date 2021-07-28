import React from 'react'
import './Hero.css';
import HeroButtons from '../HeroButtons/HeroButtons'

const Hero = props =>{
    return(
        <div className="">
            <div id="carouselExampleSlidesOnly overlay" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner overlay">

                    <div className="carousel-item active">
                        <img className="img-fluid w-100" src="https://images.unsplash.com/photo-1584473457493-17c4c24290c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
                         <div class="carousel-caption fs-5 shadow-lg">
                            {/* <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p> */}
                        </div>
                        <div className="buttons">
                            <HeroButtons/>
                        </div>  
                    </div>

                    <div className="carousel-item">
                        <img className="img-fluid w-100" src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80" alt="" />
                        <div className="buttons">
                            <HeroButtons/>
                        </div>  
                        <div class="carousel-caption fs-5 shadow-lg">
                            {/* <h5 classname="no-opacity">First slide label</h5>
                            <p classname="no-opacity">Some representative placeholder content for the first slide.</p> */}
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Hero;