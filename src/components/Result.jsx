import React from 'react'

const Result = (props) => {
    debugger
    console.log("Renderizacion de Result", props)
    return (
        <div className="result">
           {props.value} 
        </div>
    )
}
export default Result
