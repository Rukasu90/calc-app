import React from 'react'
import PropTypes from 'prop-types'

const Result = ({ value }) => {
    console.log("Renderizacion de Result", value)
    return (
        <div className="result">
           {value} 
        </div>
    )
}

Result.propTypes = {
    value: PropTypes.string.isRequired
} 

export default Result
