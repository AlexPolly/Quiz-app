import React, { useState } from 'react'
import { QuizData } from '../Data/QuizData';
import logo1 from '../logo.png'
import QuizResult from './QuizResult';
function Quiz() {
    const [quizStarted, setQuizStarted] = useState(false);
    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [score,setScore] = useState(0);
    const [clickedOption,setClickedOption]=useState(0);
    const [showResult,setShowResult]=useState(false);

    const startQuiz = () => {
        setQuizStarted(true);
      };
    
    const changeQuestion = ()=>{
        if (!quizStarted) {
            return;
          }

        updateScore();
        if(currentQuestion< QuizData.length-1){
            setCurrentQuestion(currentQuestion+1);
            setClickedOption(0);
        }else{
            setShowResult(true)
        }
    }
    const updateScore=()=>{
        if(clickedOption===QuizData[currentQuestion].answer){
            setScore(score+1);
        }
    }
    const resetAll=()=>{
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
    }
  return (
    <div>
      <>
           <div className='logo'> <img className='' width={'120px'} src={logo1} alt="" /></div>
            <div className='main'>
                <div className='text'>
                    <p className="heading-txt">Champions &nbsp;League -&nbsp;<p className='rotate'>Quiz</p> </p>
                </div>
                <div className="container">
                    {showResult ? (
                        <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll}/>
                    ):(
                        
                    <>
                      {!quizStarted ? (
                       <>
                            <h5 className='h-txt'>Let's see , How much do you know about  Champions League ? </h5>
            <button className='sbtn' onClick={startQuiz}><p>Start</p> <img style={{alignItems:"center",marginLeft:'5px'}} width={'25px'} height={'25px'} src="https://media.tenor.com/fJjW0Q5fDUMAAAAi/football-soccer.gif" alt="" /></button>
                       </>
      ) : (
                  <div>
                        <div className="question">
                            <span id="question-number">{currentQuestion+1}. </span>
                            <span id="question-txt">{QuizData[currentQuestion].question}</span>
                        </div>
                        <div className="option-container">
                            {QuizData[currentQuestion].options.map((option,i)=>{
                                return(
                                    <button 
                                    // className="option-btn"
                                    className={`option-btn ${
                                        clickedOption == i+1?"checked":null
                                    }`}
                                    key={i}
                                    onClick={()=>setClickedOption(i+1)}
                                    >
                                    {option}
                                    </button>
                                )
                            })}    
                            <div className='nextbtn'> <input type="button" value="Next" id="next-button" onClick={changeQuestion}/></div>            
                        </div>
                       
                  </div>
      )}
                    </>
                    )}
                </div>
            </div>
      </>
        
    </div>
  )
}

export default Quiz