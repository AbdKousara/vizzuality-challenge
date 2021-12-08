import React from "react";
import { useState } from "react";
import {Basic} from './Basic.jsx';
import { Choropleth } from "./Choropleth.jsx";
import {Gradient} from './Gradient.jsx'
const fetchData = fetch("https://raw.githubusercontent.com/Vizzuality/front-end-code-challenge/master/data.json").then((response) => response.json())

export default function App(){
       const [data, setData] = useState([]);
       fetchData.then((data) => setData(data));

       return(
              <div>
                    {     
                       data.filter((item)=>{
                          return item.type !== 'timeline'
                       }).reverse().map((item)=>{ 
                          return(    
                            item.type === 'basic' ? <Basic key={item.id} name={item.name} items={item.items} description={item.description}/> :
                            item.type === 'choropleth' ? <Choropleth key={item.id} name={item.name} items={item.items} description={item.description}/> :
                            <Gradient key={item.id} name={item.name} items={item.items} description={item.description}/> )
                              
                       })
                              
                        
                     }


              </div>
       );
       
       
}