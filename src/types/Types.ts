import React from 'react'

export type QuizApiType = {
    category: string,
    type: string,
    difficulty: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[]
}
export type showQuestion={
    question:string,
    options:string[],
    answer:string,
    correct_answer:string,
    incorrect_answers:string[]
}
export type questionPropsType={
    question:string,
    options:string[],
    callback:(e:React.FormEvent<EventTarget>,ans:string)=>void
}