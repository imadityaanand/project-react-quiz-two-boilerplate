import React, { Component, useState } from 'react'
import "./QuizComponent.css"
import questions from "../resources/quizQuestion.json"

function QuizComponent() {
  const [ques, setQues] = useState(0);

  function HandlePrev() {
    if(ques !== 0){
      setQues((prev) => prev-1);
    }
  }

  function HandleNext() {
    if(ques !== 14){
      setQues((prev) => prev+1);
    }
  }

  return (
    <div className='quiz-container'>
      <h2>Question</h2>
      <p>{ques + 1} of 15</p>
      <p className='question'>{questions[ques].question}</p>
      <div className='options-div'>
          <button className='option'>{questions[ques].optionA}</button>
          <button className='option'>{questions[ques].optionB}</button>
          <button className='option'>{questions[ques].optionC}</button>
          <button className='option'>{questions[ques].optionD}</button>
      </div>
      <div className='navigate-div'>
          <button className='prev' onClick={HandlePrev}>Previous</button>
          <button className='next' onClick={HandleNext}>Next</button>
          <button className='quit' onClick={() => window.alert("Are you sure you want to quit ?")}>Quit</button>
      </div>
    </div>
  )
}

export default QuizComponent;