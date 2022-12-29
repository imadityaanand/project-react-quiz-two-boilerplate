import React, { Component } from 'react'
import "./ResultComponent.css"

export default class ResultComponent extends Component {
  render() {
    return (
        <>
            <h1>Result</h1>
            <div className='main-container'>
                <h4>You need more practice!</h4>
                <h1 className='container-heading'>Your score is 20%</h1>
                <div>
                    <p>Total number of questions</p>
                    <p>15</p>
                </div>
                <div>
                    <p>Number of attempted questions</p>
                    <p>9</p>
                </div>
                <div>
                    <p>Number of correct answers</p>
                    <p>3</p>
                </div>
                <div>
                    <p>Number of wrong answers</p>
                    <p>6</p>
                </div>
            </div>
            <div className='navigate-div'>
                <button className='play-again'>Play Again</button>
                <button className='back-to-home'>Back to Home</button>
            </div>
        </>
    )
  }
}
