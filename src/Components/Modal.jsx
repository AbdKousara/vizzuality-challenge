import React from "react";

function Modal(props){
       
       return(
              <div>
                     <div className='modal'>
                       <button className='modal-btn' onClick={()=> props.closeModal(false)}> X </button>
                       <h1 className='modal-text' dangerouslySetInnerHTML={{ __html: props.description }}></h1>

                     </div>
              </div>
       );
}

export {Modal}