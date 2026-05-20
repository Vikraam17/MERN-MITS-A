import React from 'react'

const Child = ({name,dept,mobile}) => {
  return (
    <div>
        <p> {`My name is ${name}`} </p>
        <p>Department : {dept}</p>
        <p>Mobile No : {mobile}</p>
    </div>
  )
}

export default Child