import React from 'react'

function Dog({name, age, pic, facts, id}) {

    return (
        <>
            <p>Name: {name} </p>
            <p>Age: {age} </p>
            <img src={pic} alt={name}></img>
           
            <ul> Interesting Facts: 
                {facts.map(fact => {
                    return (
                        <li key={fact}>{fact}</li>
                    )
                })}
            </ul>
        </>
    )
}

export default Dog;