import React from 'react'
import { Link } from 'react-router-dom'
import { useAllData } from '../context/quizAllData'

export default function Explore() {
  const Alldata = useAllData()
  type quizes ={
    catergoryName: string,
    id: string,
    mcqs: MCQs[],
    title: string,
    totalScore: Number,
    imgUrl:string,
    _id: string,
}
type MCQs = {
  answer: string,
    options:string,
    question: string,
    _id: string
}
  const quizCard = (item:quizes)=>{
    console.log(item)
    return (
      <>
      <div className="card border-radius-sm">
      <img className="card-img-main border-radius-sm " src={item.imgUrl} alt="jacket"/>
        <div className="card-primary cardSub d-flex">
            <h2 className="card-subtitle">{item.title}</h2>
          </div>
          <div className="card-action">
            <Link  to={"/rules"} className="btn btn-primary w-100 margin-none text-align-center">
               Take Quiz
          </Link>
    </div>
</div>
      </>
    )
  }
  return (
    <>
    
    <div className=" d-flex-col  main">
    <div className=" d-flex  justify-content-center  flex-wrap ">
     <div className='border-1 border-radius-md p-1 m-r btn '>All</div>
     <div className='border-1 border-radius-md p-1 m-r btn'>JavaScript</div>
     <div className='border-1 border-radius-md p-1 m-r btn'>Node</div>
     <div className='border-1 border-radius-md p-1 m-r btn'>ReactJS</div>
     <div className='border-1 border-radius-md p-1 m-r btn'>TypeScript</div>
     </div>
     <div  className=" d-flex  justify-content-center  flex-wrap ">
     {Alldata.data===null?"nodata":Alldata.data.map((item)=>quizCard(item))}

     </div>
   </div>
    </>
  )
}
