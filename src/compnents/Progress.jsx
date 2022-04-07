import React, {useState} from 'react'
import './progress.css';
function Progress() {
  const [progress, setProgress] = useState(1)
  
  
  const [isDisabled, setDisabled] = useState(false);


  

    
  

const prevoice = (()=>{
  if(progress < 5){
    setProgress(progress -1)
  }
  else if(progress >=0) {
    setDisabled(true)
  }
})

  const next =(()=>{
    
    
    if(progress < 4){
      setProgress(progress +1)
    }
    else{
      setDisabled(true);
      
    }
   

  })


   
  return (
    <>
        <div className="container">
            <div className="progress-container">
                    <div className="progress"style={{width:`${progress===2 ? "33.33%" : ''}`||`${progress===3 ? "66.66%" : ''}`||`${progress===4 ? "100%" : ''}`}} id="progress"></div>
                    <div className={`circle ${progress > 1 ? "active" : ''}`}>1</div>
                    <div className={`circle ${progress >2 ? "active" : ''}`}>2</div>
                    <div className={`circle ${progress > 3 ? "active" : ''}`}>3</div>
                    <div className={`circle ${progress > 4 ? "active" : ''}`}>4</div>


            </div>
            <br />
            <button type="button"  id="prev"className="btn btn-primary"   onClick={prevoice}>Previus</button>
            <button type="button"  id='next' className="btn btn-primary" disabled={isDisabled} onClick={next}>Next</button>
        </div>

            
    </>
  )
}

export default Progress