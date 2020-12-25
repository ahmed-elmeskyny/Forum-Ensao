import React, { useRef } from 'react';
import { Slide } from "react-slideshow-image"

//styling
import "./slider.scss";
import 'react-slideshow-image/dist/styles.css';

//assets
import slide1 from "../../assets/slides/slide5.jpeg";
import slide2 from "../../assets/slides/slide7.jpg";
import slide3 from "../../assets/slides/slide8.jpg";

//react-icons 
import {AiOutlineRight} from "react-icons/ai";
import {AiOutlineLeft} from "react-icons/ai";


const slides = [
    slide1,
    slide2,
    slide3
]

const properties =  {
     prevArrow: <AiOutlineLeft style={{fontSize:"40px" , cursor:"pointer",position:"absolute" , color:"white"}} ></AiOutlineLeft>,
     nextArrow: <AiOutlineRight style={{fontSize:"40px" , cursor:"pointer", position:"absolute", left:"1200px" , color:"white"}}></AiOutlineRight>,
     duration : 2000
}


const Slider = () => {
    const slide = useRef(null)

    return (
            <Slide {...properties} ref={slide}>
                <div className="each-slide">
                    <div style={{ background:`url(${slides[0]}) no-repeat`,backgroundSize:"cover", height:"500px"}}>
                        <div className="slide-text">
                            <div className="text-container">
                                <h1>Forum Ensao Entreprises</h1>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ratione quia error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione repudiandae libero, quasi, facere voluptates distinctio vitae mollitia eos illo aliquam ducimus perferendis in itaque iure exercitationem laborum enim eveniet nihil! Itaque deleniti reiciendis placeat qui expedita? Fugiat nostrum eum harum quod et est minima dolor vero sed blanditiis.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ backgroundImage:`url(${slides[1]}) ` , height:"500px"}}>
                        <div className="slide-text">
                            <div className="text-container">
                                <h1>Titre</h1>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ratione quia error. Itaque deleniti reiciendis placeat qui expedita? Fugiat nostrum eum harum quod et est minima dolor vero sed blanditiis.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ backgroundImage:`url(${slides[2]}) `, height:"500px"}}>
                        <div className="slide-text">
                            <div className="text-container">
                                <h1>Titre</h1>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ratione quia error. Itaque deleniti reiciendis placeat qui expedita? Fugiat nostrum eum harum quod et est minima dolor vero sed blanditiis.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>
    )
}
export default Slider;