import React, {useState} from "react";
import dragDots from '../assets/icons/drag-dots.svg';
import { Toolbar } from "./Toolbar";
function Gradient(props){
       const [collapse, setCollapse] = useState(true);


       return(
              <div>
                     <div className='container'>
                     <img src={dragDots} alt="DragDots"/>
                     <h1>{props.name} </h1>
                     
                     <Toolbar description={props.description} onChangeCollapse={()=> setCollapse(!collapse)}/>

                     </div>

                     <div>
                            {collapse ? <div className='choropleth-info-container'>
                                  { props.items.map((value)=>{
                                   return <div>
                                   <div className='choropleth-info-colors' style={{backgroundColor: value.color}}></div>
                                   <p className='choropleth-info-text'>{value.name}</p> </div>
                                   
                                   })}
                             </div> : null}
                     </div>
              </div>
       );
}

export {Gradient}