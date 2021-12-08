import React from "react";
import Show from '../assets/icons/show.svg';
import Hide from '../assets/icons/hide.svg';
import info from '../assets/icons/info.svg';
import arrowDown from '../assets/icons/arrow-down.svg'
import { useState } from "react";
import { Modal } from "./Modal";
import Tippy from "@tippyjs/react";


function Toolbar(props){
       const [openModal, setModal] = useState();
       
       const [icon, setIcon] = useState(Hide);
       const [layer, setLayer] = useState('Hide layer');

       

       function onChangeVisibility(){

              setLayer((prevLayer)=>{
                     return(
                            prevLayer === 'Hide layer' ? 'Show layer' :  'Hide layer'
                     )
              })

              setIcon((prevIcon)=>{
                     return(
                            prevIcon === Show ? Hide :  Show
                     )
              })
       }

       return(
          <div>
              <div className='icons'>

                     <Tippy content={layer}>
                          <img onClick={onChangeVisibility} src={icon} alt="show-icon" />
                     </Tippy>

                     <Tippy content='Layer Info'>
                          <img src={info} alt="info-icon" onClick={()=>{setModal(!openModal)}}/>
                     </Tippy>
                     <img onClick={() => props.onChangeCollapse() } src={arrowDown} alt="arrow-down-icon" />
                            
              </div>
               { openModal &&  <Modal closeModal={setModal} description={props.description}/> }
          </div>
       );
}

export {Toolbar}