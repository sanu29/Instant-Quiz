import React from 'react'
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import rulesImg from "../images/rules.svg"
export  function RulesPage() {

    return (<>
    <Header/>
    <div className=" d-flex  justify-content-evenly align-item-center  flex-wrap w-100 h-100 main">
   
       
             <div className="d-flex-cols justify-content-center align-items-center text-align-center flex-wrap">
                 <div className="heading2 font-color-secondary ">Rules</div>
               
                 <div className="para4 font-weight-bolder details font-color-primary">
                                         
                
                  Instant Quiz
                 </div>
                 <div className="para4 font-weight-bolder details m-t font-color-secondary text-align-left">
                        <li>Every question will have 5 points</li>
                        <li>Every wrong question will have negative marking of 1 mark</li>
                        <li>You cannot skip a question.</li>
                        <li>After 15 sec the question will change automatically</li>
                        
                 </div>
              
                 <div className=" text-align-center m-t btn btn-primary w-100">
                        
                        Start
                 </div>
              
               </div>
        
             
                <img src={rulesImg} className="image-responsive main-img" alt='mainImage' />
     
         </div>

</>
  )
}
