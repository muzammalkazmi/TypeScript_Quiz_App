import React from 'react'
import {questionPropsType} from '../types/Types'
const QuestionCard:React.FC<questionPropsType>=({question,options})=> {
    return (
        <div>
             
           {question}
            
        
        <div>
            <form>
        {options.map((opt:string)=>{
            return(
                <label>
                    <input type='radio' name='opt' value={opt}/>{opt}
                </label>
            )
        })}
        <button type='submit'>Submit</button>

            </form>
        
        </div>
        </div>
    )
}
export default QuestionCard
