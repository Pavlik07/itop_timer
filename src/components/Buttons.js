import React from 'react'

function Buttons(props) {
    return (
        <div>
            {(props.isRunning===0) ? 
                <button onClick={props.start}>Start</button> : ''
            }
            {(props.isRunning===1) ? 
                <button onClick={props.stop}>Stop</button> : ''
            }

            <button onClick={props.reset}>Reset</button>

            <button onClick={props.doubleClickButton}>Wait</button>
        </div>
    )
}

export default Buttons
