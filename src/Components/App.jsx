import React from "react";
import { useState , useEffect} from "react";
import { Basic } from "./Basic.jsx";
import { Choropleth } from "./Choropleth.jsx";
import { Gradient } from "./Gradient.jsx";


export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
       async function fetchMyAPI() {
         let response = await fetch("https://raw.githubusercontent.com/Vizzuality/front-end-code-challenge/master/data.json")
         let josnResponse = await response.json();
         setData(josnResponse)
         console.log(josnResponse);
       }
   
       fetchMyAPI()
     }, [])

  return (
    <div>
      {
      

      data.reverse().map((item, index) => {
       return item.type !== "timeline" ?
         (item.type === "basic" ? 
        <Basic
          key={item.id}
          name={item.name}
          items={item.items}
          description={item.description}
        />
       : item.type === "choropleth" ? 
        <Choropleth
          key={item.id}
          name={item.name}
          items={item.items}
          description={item.description}
        />
       : 
        <Gradient
          key={item.id}
          name={item.name}
          items={item.items}
          description={item.description}
        />) : null
       
      })


      
      }
    </div>
  );
}
