import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
type allQuiz= {
    data : quizes[]|null
}

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
const GetAllData = createContext<allQuiz | null>(null);
const useAllData = () => useContext(GetAllData) as allQuiz;

const GetQuizDataProvider = ({ children }: { children: React.ReactNode }) => {
  const [quizData, setQuizData] = useState<quizes[]|undefined>(undefined)
    useEffect(()=>{
    (async() =>{
      const res = await axios.get("/api/quizzes")
      console.log(res.data.quizes)
      setQuizData(res.data.quizes)
     })()
       
      

       
    },[])
  return (
    <GetAllData.Provider
      value={{data:quizData===undefined?null:quizData}}
    >
      {children}
    </GetAllData.Provider>
  );
};
export {  GetQuizDataProvider, useAllData};