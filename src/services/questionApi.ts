
import {QuizApiType,showQuestion} from '../types/Types'

export const getQuiz = async(questionNo:number,level:string):Promise<showQuestion[]> => {
    const res = await fetch(`https://opentdb.com/api.php?amount=${questionNo}&difficulty=${level}&type=multiple`)
    const {results}= await res.json()
    console.log(results)
    const apiQuiz:showQuestion[]=results.map((quizObj:showQuestion)=>{
        return{
            question:quizObj.question,
            options:quizObj.incorrect_answers.concat(quizObj.correct_answer),
            answer:quizObj.correct_answer
        }

      
    })
  
return apiQuiz


}