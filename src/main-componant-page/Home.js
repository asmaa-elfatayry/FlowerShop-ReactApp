import React from "react";
import Header from '../component/Header';
import Shopping from '../component/Buy-Flower';
import Reviews  from "../component/Reviews";
import Line from "../component/line";
import {Section,Footer} from "../component/line"





// home Component
export default class Home extends React.Component{
    render(){
        return(
         <div>
             
             <Header/>
             <Shopping/>
             <Line/>
             <Reviews/>
             <Section/>
             <Footer/>

             
            
           
          
         </div>
        )
    }
}