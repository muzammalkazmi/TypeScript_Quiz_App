import React from 'react'
import {questionPropsType} from '../types/Types'
export default function QuestionCard:React.FC<questionPropsType>({question,options})=> {
    return (
        <div>
             
           {question}
            
        
        <div>
        {options}
        </div>
        </div>
    )
}
