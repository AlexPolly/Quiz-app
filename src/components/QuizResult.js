import React from 'react'

function QuizResult(props) {
  return (
    <>
    <div className='show-score'>
   <div> <img style={{borderRadius:"10px "}} width={'200px'} src="https://cdn.dribbble.com/users/1203044/screenshots/4293138/trophy.gif" alt="" /></div>
       <div>
          Your Score:{props.score}<br/>
          Total Score:{props.totalScore}
       </div>
    </div>
    <button id="next-button" onClick={props.tryAgain}>Try Again</button>
    </>
  )
}

export default QuizResult