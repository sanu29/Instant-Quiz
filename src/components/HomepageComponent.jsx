import React from 'react'
import { Link } from 'react-router-dom';
import heroImg from '../images/index.svg';
export  function HomepageComponent() {

    return (<>
    <div className=" d-flex  justify-content-evenly align-item-center  flex-wrap w-100 h-100 main">
   
       
             <div className="d-flex-cols justify-content-center align-items-center text-align-center flex-wrap">
                 <div className="heading2 font-color-secondary ">Instant Quiz</div>
               
                 <div className="para4 font-weight-bolder details m-t font-color-primary">
                                         
                 <br/>
                    Check Your Preperation with quick Quizes!
                    <br/>

                    All about JavaScript!
                 </div>
                 <div className="para4 font-weight-bolder details m-t font-color-secondary">
                 JavaScript || Node || React || TypeScript 
                 </div>
                 <div  class="heading-3  margin-8 btn bg-primary font-color-white m-r w-100 m-t">
                            Explore
                        </div>
               </div>
        
             
                <img src={heroImg} className="image-responsive main-img" />
     
         </div>

</>
  )
}
