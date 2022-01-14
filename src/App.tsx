import React,{useState,useEffect} from 'react'
import {getQuiz} from './services/questionApi'
import { showQuestion } from './types/Types'
import QuestionCard from './components/QuestionCard'

export default function App() {
    const [quiz,setQuiz]=useState<showQuestion[]>([])
     useEffect(()=>{
      async function fetchQuiz(){
          const questions:showQuestion[]=await getQuiz(5,'easy')
          setQuiz(questions)
          console.log(questions)
      }
      fetchQuiz()
    },[])
    if(!quiz.length)
    return <h2>Loading...</h2>
    return (
        <div>
           
            
            <QuestionCard
            question={quiz[0].question}
            options={quiz[0].options}
            />
            
            
        </div>
    )
}
