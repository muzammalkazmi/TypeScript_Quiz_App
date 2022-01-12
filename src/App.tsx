import React,{useState,useEffect} from 'react'
import {getQuiz} from './services/questionApi'
import { showQuestion } from './types/Types'
import QuestionCard from './components/QuestionCard'

import QuestionCard from './components/QuestionCard'

export default function App() {
    const [quiz,setQuiz]=useState<showQuestion[]>([])
     useEffect(()=>{
      async function fetchQuiz(){
          const questions:showQuestion[]=await getQuiz(5,'easy')
          setQuiz(questions)
      }
      fetchQuiz()
    },[])
    return (
        <div>
            React Quiz Application with TypeScript
            
            <QuestionCard
            question={quiz[0].question}
            />
            
            
        </div>
    )
}
