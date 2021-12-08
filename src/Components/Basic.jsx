import React from "react";
import dragDots from '../assets/icons/drag-dots.svg';
import { Toolbar } from "./Toolbar.jsx";
import { useState } from "react";

function Basic(props){
       const [collapse, setCollapse] = useState(true)

       return(
              <div>
                     
                     <div className='container'>
                            <img src={dragDots} alt="DragDots"/>
                            <h1>{props.name}</h1>

                            <Toolbar description={props.description} onChangeCollapse={()=> setCollapse(!collapse)}/>
                     </div>

                     {collapse ? <div>
                            {props.items.map((value)=>{
                            return <div className='basic-info-container'>
                            <div className='basic-info-colors' style={{backgroundColor: value.color}}></div>
                            <p>{value.name}</p>
                            </div>
                            })} 
                     </div> : null}
                                   
                  <hr />
              </div>
       );
}

export {Basic}