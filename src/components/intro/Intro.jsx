import React from 'react'
import"./intro.scss";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { init } from 'ityped'
import { useEffect,useRef } from 'react';

export default function Intro() {
    const textRef=useRef();



    useEffect(() => {
        init(textRef.current,{
             showcursor:false,
             backDelay:  1500,
             backSpeed:60,

            strings: ['Designer', 'Developer','Content-Creator'] 
        })
       
        
        
    }, [])
    return (
        <div className="intro" id="intro">
            <div className="left">
               <div className="imageContainer">
               <img src="assets/c.png" alt="" /> 
               </div>
            </div>
            <div className="right">

        <div className="wrapper">
            <h2>Hi There, I'm</h2>
            <h1>Siddhertho Roy</h1>
            <h3>Freelancer <span ref={textRef}></span></h3>

        </div>
                <a href="#portfolio">
                <ArrowDownwardIcon className="icon"/>
                </a>
            </div>
          
        </div>
    )
}
