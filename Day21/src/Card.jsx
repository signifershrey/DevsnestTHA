import React from 'react'

const Card = ({food,cal}) => {
    return (
        <div style={{border:"2px solid black", width:"50vw"}}>
                <h1>Food</h1>
                <p>You Have consumed  calories.</p>
                <button>Delete</button>
                <button>Edit</button>
        </div>
    )
}

export default Card
